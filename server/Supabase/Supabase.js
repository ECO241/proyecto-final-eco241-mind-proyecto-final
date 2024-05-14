import { createClient } from '@supabase/supabase-js'


const supabase = createClient('https://sujzsmcgbweqstusdqvj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1anpzbWNnYndlcXN0dXNkcXZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MzE4NDQsImV4cCI6MjAzMTIwNzg0NH0.Jcz96ytVYKUugOnrzpRaGwAELMQgdK2cFGbtv0zGqAg')
export default supabase