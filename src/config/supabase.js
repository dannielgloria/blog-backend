const { createClient } = require('@supabase/supabase-js')
const { SUPABASE } = require('../config/constants')

const supabase = createClient(SUPABASE.URL, SUPABASE.KEY);

module.exports = supabase;