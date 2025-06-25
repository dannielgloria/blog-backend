require('dotenv').config()

module.exports = {
    PORT: process.env.PORT || 5005,
    SUPABASE: {
        URL: process.env.SUPABASE_URL,
        KEY: process.env.SUPABASE_KEY
    },
    JWT_KEY: process.env.JWT_KEY
};