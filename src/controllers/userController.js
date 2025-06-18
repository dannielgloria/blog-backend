const supabase = require('../config/supabase')

// Create
exports.createUser = async (req,res) => {
    const {name, last_name, birthdate } = req.body;

    const { data , error} = await supabase
        .from('users')
        .insert([{name, last_name, birthdate}])
        .select();
    
    if (error) return res.status(500).json({error: error.message})
    
    res.status(201).json(data[0])
    }
