const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://wkakuvexqoshueslvtrm.supabase.co';
const supabeAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrYWt1dmV4cW9zaHVlc2x2dHJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMTM4NzEsImV4cCI6MjA2NTc4OTg3MX0.uEoP-cv4oTKVqI2Ts3dCwTX5jeOEJ2syIMsY2H5lt4g';

const supabase = createClient(supabaseUrl, supabeAnonKey);

module.exports = supabase;