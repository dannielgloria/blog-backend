const express = require('express');
const postRoutes = require('./routes/postRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express();
const PORT = 5005;

//Middleware para parsear(hacer uso) JSON
app.use(express.json())

/// http://localhost:5005/posts
app.use('/posts',postRoutes)

/// http://localhost:5005/users
app.use('/users',userRoutes)

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})