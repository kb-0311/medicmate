import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import connectDatabase from "./db.js";
import user from "./routes/userRoutes.js"

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true },{limit : '50mb'}));
app.use(cookieParser());

app.use("/api/v1" , user);

const server = createServer(app);
const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));

try {
  dotenv.config({ path: `${__dirname}/.env` });
} catch (error) {
  console.error('Error loading .env file:', error);
}


connectDatabase();


app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});


// app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });

io.on('connection', (socket) => {
  console.log('a user connected');
  
  socket.on('message', (msg) => {
    // Broadcast message to all clients
    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});




server.listen(8000, () => {
  console.log('server running at http://localhost:8000');
});