CREATE TABLE public.password_requests (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
 message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000),
 created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.password_requests TO service_role;
ALTER TABLE public.password_requests ENABLE ROW LEVEL SECURITY;
CREATE INDEX password_requests_email_created_at_idx ON public.password_requests (email, created_at DESC);
CREATE FUNCTION public.limit_password_requests() RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
 PERFORM pg_advisory_xact_lock(hashtextextended(NEW.email, 0));
 IF EXISTS (SELECT 1 FROM public.password_requests WHERE email = NEW.email AND created_at > now() - interval '1 minute') THEN
  RAISE EXCEPTION 'Please wait a minute before submitting another request.' USING ERRCODE = 'P0001';
 END IF;
 RETURN NEW;
END;
$$;
CREATE TRIGGER limit_password_requests BEFORE INSERT ON public.password_requests FOR EACH ROW EXECUTE FUNCTION public.limit_password_requests();