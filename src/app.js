const express = require('express');
const cors = require('cors')
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express();

app.use(cors())
//Middleware para parsear(hacer uso) JSON
app.use(express.json())

/// http://localhost:5005/auth
app.use('/auth',authRoutes)

/// http://localhost:5005/posts
app.use('/posts',postRoutes)

/// http://localhost:5005/users
app.use('/users',userRoutes)

module.exports = app;