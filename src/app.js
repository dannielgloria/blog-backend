const express = require('express');
const constants = require('./config/constants')
const postRoutes = require('./routes/postRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express();

//Middleware para parsear(hacer uso) JSON
app.use(express.json())

/// http://localhost:5005/posts
app.use('/posts',postRoutes)

/// http://localhost:5005/users
app.use('/users',userRoutes)

app.listen(constants.PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${constants.PORT}`)
})