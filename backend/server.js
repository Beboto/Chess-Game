import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';  // Middleware to enable Cross-Origin Resource Sharing
import dotenv from 'dotenv';  // Loads environment variables from a .env file
import cookieParser from 'cookie-parser';  // Parses cookies in HTTP requests
import passport from 'passport';  // Middleware for authentication
import connectDB from './database/connect.js';
import setupGameSocket from './sockets/gameSockets.js';
import './config/passport.js';

//routes
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

connectDB(); // Database Connection

const app = express();  

const corsOptions = {
    origin: process.env.FRONTEND_URL, // Allow requests only from this frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true,  // Allow cookies to be sent with requests
};

app.use(cors(corsOptions)); // CORS for HTTP requests

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(cookieParser());

const server = http.createServer(app);  // create HTTTP server using express app

const io = new Server(server, {
    cors: corsOptions
});


setupGameSocket(io);  

app.get('/', (req, res) => {
    res.send('Backend API is running....');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes); 
// app.use('/api/game', gameRoutes);


server.listen(8000, () => {
    console.log('Server started on port 8000');
});