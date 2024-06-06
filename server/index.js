import cors from 'cors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import { Server } from 'socket.io';
import { SerialPort, ReadlineParser } from 'serialport';

import auth from './routes/auth.js';

const PORT = 5500;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*", // Permitir todas las orígenes
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.json());
app.use('/auth', auth);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/static", express.static(path.join(__dirname, "../server/MethodAudio")));

// SOCKET ****
io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado');

    socket.on('disconnect', () => {
        console.log('Un cliente se ha desconectado');
    });

    socket.on('orderForArduino', (orderForArduino) => {
        port.write(orderForArduino + '\n', (err) => {
            if (err) {
                return console.log('Error on write: ', err.message);
            }
            console.log('Orden enviada al Arduino: ', orderForArduino);
        });
    });
});

// SERIAL PORT ****
const port = new SerialPort({
    path: 'COM4',
    baudRate: 9600,
});

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

parser.on('data', (data) => {
    console.log(`Datos recibidos del Arduino: ${data}`);
});

port.on('error', (err) => {
    console.log('Error: ', err.message);
});

// SERVER LISTEN ****
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
