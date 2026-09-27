import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { business, rateTables } from "@/config/business";

export type LiveRate = { route_name: string; vehicle_type: string; price: number };

// Static fallback: the site always renders these instantly, then swaps in database values.
export const fallbackRates: LiveRate[] = rateTables.flatMap((table) =>
  table.rates.map((rate) => ({ route_name: rate.destination, vehicle_type: table.name, price: rate.price })),
);

export function useLiveRates() {
  const { data } = useQuery({
    queryKey: ["public-rates"],
    queryFn: async () => {
      const { data, error } = await supabase.from("rates").select("route_name, vehicle_type, price").order("sort_order");
      if (error || !data?.length) return fallbackRates;
      return data;
    },
    initialData: fallbackRates,
    initialDataUpdatedAt: 0,
    staleTime: 60_000,
    retry: 1,
  });
  return data;
}

export function priceFor(rates: LiveRate[], routeName: string, vehicle: string, fallback = 0) {
  return rates.find((r) => r.route_name === routeName && r.vehicle_type === vehicle)?.price ?? fallback;
}

export function useLiveAnnouncement() {
  const { data } = useQuery({
    queryKey: ["public-offer"],
    queryFn: async () => {
      const { data, error } = await supabase.from("offers").select("headline, is_active").order("updated_at", { ascending: false }).limit(1).maybeSingle();
      if (error || !data) return { headline: business.announcement as string, is_active: true };
      return data;
    },
    initialData: { headline: business.announcement as string, is_active: true },
    initialDataUpdatedAt: 0,
    staleTime: 60_000,
    retry: 1,
  });
  return data;
}
