import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import movieRoutes from './routes/movieRoutes.js';
import theaterRoutes from './routes/theaterRoutes.js';
import showRoutes from './routes/showRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

// cors setup
app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or curl)
        if (!origin) return callback(null, true);
        
        const isAllowed = origin.startsWith('http://localhost') || origin.endsWith('.vercel.app');
        if (isAllowed) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Movie Booking API is running')
})

// routes
app.use('/api/auth',authRoutes)
app.use('/api/movies',movieRoutes)
app.use('/api/theaters',theaterRoutes)
app.use('/api/shows',showRoutes)
app.use('/api/bookings',bookingRoutes)

connectDB()
app.listen(port,()=>{
    console.log('app listing at port :'+port);
})