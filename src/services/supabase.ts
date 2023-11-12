import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://upysehsmhgosygexmqoz.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVweXNlaHNtaGdvc3lnZXhtcW96Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTc4MjA3NywiZXhwIjoyMDE1MzU4MDc3fQ.3M3WVfe__MXCVOkP7sM0yti7al4zTkdQUWtGAjg8LLk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
