const http = require('http');
const app = require('./app');
const { Server } = require('socket.io');
const { PORT } = require('./config/constants');
const socketAuth = require('./middleware/socketAuth');
const setupSocket = require('./sockets/chat');

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

io.use(socketAuth);
setupSocket(io);

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
