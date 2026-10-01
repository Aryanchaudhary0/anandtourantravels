import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { business, rateTables } from "@/config/business";
import { CHAR_DHAM_PACKAGES, TOUR_PACKAGES, TRANSFER_PRICES } from "@/data/packages";

export type LiveRate = { route_name: string; vehicle_type: string; price: number };
export type LivePricingItem = { item_key: string; category: string; title: string; vehicle_type: string; price: number; pricing_unit: string; is_active: boolean };

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

export const fallbackPricingItems: LivePricingItem[] = [
  ...TOUR_PACKAGES.map((item) => ({ item_key: item.key, category: "Tour packages", title: item.title, vehicle_type: item.vehicle, price: item.price, pricing_unit: item.pricingUnit, is_active: true })),
  ...CHAR_DHAM_PACKAGES.map((item) => ({ item_key: item.key, category: "Char Dham Yatra", title: `${item.title} · ${item.duration}`, vehicle_type: item.vehicle, price: item.price, pricing_unit: "full vehicle", is_active: true })),
  ...TRANSFER_PRICES.map((item) => ({ item_key: item.key, category: "Airport & railway transfers", title: item.hub, vehicle_type: item.vehicle, price: item.price, pricing_unit: item.note, is_active: true })),
];

export function useLivePricingItems() {
  const { data } = useQuery({
    queryKey: ["public-pricing-items"],
    queryFn: async () => {
      const { data, error } = await supabase.from("pricing_items").select("item_key, category, title, vehicle_type, price, pricing_unit, is_active").eq("is_active", true).order("sort_order");
      if (error || !data?.length) return fallbackPricingItems;
      return data;
    },
    initialData: fallbackPricingItems,
    initialDataUpdatedAt: 0,
    staleTime: 60_000,
    retry: 1,
  });
  return data;
}

export function pricingFor(items: LivePricingItem[], key: string, fallback: number) {
  return items.find((item) => item.item_key === key)?.price ?? fallback;
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
