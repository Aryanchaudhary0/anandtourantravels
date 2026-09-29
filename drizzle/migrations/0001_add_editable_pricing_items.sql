CREATE TABLE public.pricing_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  item_key text NOT NULL UNIQUE,
  category text NOT NULL,
  title text NOT NULL,
  vehicle_type text NOT NULL,
  price integer NOT NULL CHECK (price >= 0),
  pricing_unit text NOT NULL DEFAULT 'full vehicle',
  sort_order integer NOT NULL DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.pricing_items TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.pricing_items TO authenticated;
GRANT ALL ON public.pricing_items TO service_role;
ALTER TABLE public.pricing_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read pricing items" ON public.pricing_items FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins insert pricing items" ON public.pricing_items FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update pricing items" ON public.pricing_items FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete pricing items" ON public.pricing_items FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER pricing_items_touch BEFORE UPDATE ON public.pricing_items FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();