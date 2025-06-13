const express = require('express');

const app = express();
const PORT = 5005;

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

//Middleware para parsear(hacer uso) JSON
app.use(express.json())

// Ruta GET /posts - devuelve arreglo de posts
app.get('/posts', (req, res) =>{
    res.json([
        { id: 1, title: 'Hola mundo'},
        { id: 2, title: 'Este es mi servidor con post'},
        { id: 3, title: 'Adios mundo'},
    ])
})

// Ruta POST /posts - recibr un JSON y responde con una confirmacion
app.post('/posts', (req, res) =>{
    console.log("Json recibido: " + req.body);
    res.json(
        { 
        message: "Post recibido correctamente", 
        data: req.body
        }
    )
})