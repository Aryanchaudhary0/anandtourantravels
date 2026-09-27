CREATE TYPE public.app_role AS ENUM ('admin');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  role public.app_role NOT NULL,
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE TABLE public.admin_emails (
  email text PRIMARY KEY
);
GRANT ALL ON public.admin_emails TO service_role;
ALTER TABLE public.admin_emails ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE OR REPLACE FUNCTION public.claim_admin()
RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE _email text := lower(coalesce(auth.jwt() ->> 'email', ''));
BEGIN
  IF auth.uid() IS NULL THEN RETURN false; END IF;
  IF EXISTS (SELECT 1 FROM public.admin_emails WHERE lower(email) = _email) THEN
    INSERT INTO public.user_roles (user_id, role) VALUES (auth.uid(), 'admin') ON CONFLICT DO NOTHING;
    RETURN true;
  END IF;
  RETURN public.has_role(auth.uid(), 'admin');
END $$;
REVOKE EXECUTE ON FUNCTION public.claim_admin() FROM anon, public;
GRANT EXECUTE ON FUNCTION public.claim_admin() TO authenticated;

CREATE TABLE public.rates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  route_name text NOT NULL,
  vehicle_type text NOT NULL,
  price integer NOT NULL CHECK (price >= 0),
  sort_order integer NOT NULL DEFAULT 0,
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (route_name, vehicle_type)
);
GRANT SELECT ON public.rates TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.rates TO authenticated;
GRANT ALL ON public.rates TO service_role;
ALTER TABLE public.rates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read rates" ON public.rates FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins insert rates" ON public.rates FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update rates" ON public.rates FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete rates" ON public.rates FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.offers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  headline text NOT NULL,
  is_active boolean NOT NULL DEFAULT true,
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.offers TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.offers TO authenticated;
GRANT ALL ON public.offers TO service_role;
ALTER TABLE public.offers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read offers" ON public.offers FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins insert offers" ON public.offers FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update offers" ON public.offers FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete offers" ON public.offers FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.touch_updated_at() RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END $$;
CREATE TRIGGER rates_touch BEFORE UPDATE ON public.rates FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE TRIGGER offers_touch BEFORE UPDATE ON public.offers FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

INSERT INTO public.rates (route_name, vehicle_type, price, sort_order) VALUES
('Lansdowne','Swift Dzire',2200,1),('Dugadda/Satpuli/Pauri','Swift Dzire',2500,2),('Rishikesh/Haridwar','Swift Dzire',2500,3),('Dehradun/Mussoorie/Dhanaulti','Swift Dzire',4000,4),('Jim Corbett/Ramnagar','Swift Dzire',3800,5),('Nainital/Bhimtal','Swift Dzire',5500,6),('Almora/Kausani/Ranikhet','Swift Dzire',7500,7),('Tehri Lake','Swift Dzire',6000,8),('Chopta Tungnath','Swift Dzire',7000,9),('Auli/Joshimath','Swift Dzire',10000,10),('Delhi Airport/Delhi','Swift Dzire',5500,11),('Kedarnath Sonprayag','Swift Dzire',8000,12),('Badrinath','Swift Dzire',11000,13),
('Lansdowne','Maruti Ertiga',3000,1),('Dugadda/Satpuli/Pauri','Maruti Ertiga',3500,2),('Rishikesh/Haridwar','Maruti Ertiga',3500,3),('Dehradun/Mussoorie/Dhanaulti','Maruti Ertiga',5500,4),('Jim Corbett/Ramnagar','Maruti Ertiga',5000,5),('Nainital/Bhimtal','Maruti Ertiga',7500,6),('Almora/Kausani/Ranikhet','Maruti Ertiga',10000,7),('Tehri Lake','Maruti Ertiga',8000,8),('Chopta Tungnath','Maruti Ertiga',9500,9),('Auli/Joshimath','Maruti Ertiga',13000,10),('Delhi Airport/Delhi','Maruti Ertiga',7000,11),('Kedarnath Sonprayag','Maruti Ertiga',11000,12),('Badrinath','Maruti Ertiga',15000,13);

INSERT INTO public.offers (headline, is_active) VALUES ('Planning an Uttarakhand trip? Ask us for a comfortable taxi plan tailored to your route.', true);