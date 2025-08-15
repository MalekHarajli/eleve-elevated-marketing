-- Verify and strengthen RLS policies for leads table
-- Check current RLS status
DO $$
BEGIN
  -- Ensure RLS is enabled
  IF NOT EXISTS (
    SELECT 1 FROM pg_class c
    JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE c.relname = 'leads' AND n.nspname = 'public' AND c.relrowsecurity = true
  ) THEN
    ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
    RAISE NOTICE 'RLS enabled on leads table';
  ELSE
    RAISE NOTICE 'RLS already enabled on leads table';
  END IF;
END $$;

-- Recreate policies to ensure they're correct
DROP POLICY IF EXISTS "No public access to leads" ON public.leads;
DROP POLICY IF EXISTS "Anyone can create leads" ON public.leads;

-- Completely block all SELECT access for anonymous users
CREATE POLICY "No public access to leads" 
ON public.leads 
FOR SELECT 
USING (false);

-- Allow INSERT for contact form submissions
CREATE POLICY "Anyone can create leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Verify no UPDATE/DELETE policies exist (they should be blocked by default)
-- Add explicit policies to be completely sure
CREATE POLICY "No public updates to leads" 
ON public.leads 
FOR UPDATE 
USING (false);

CREATE POLICY "No public deletes to leads" 
ON public.leads 
FOR DELETE 
USING (false);