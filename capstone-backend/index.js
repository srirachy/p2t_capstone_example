import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/product.js';
import userRoutes from './routes/user.js';

const app = express();
const port = process.env.PORT || 3500;
const dbUrl = process.env.DB_URL;

const corspolicy = {
    'origin': process.env.FRONTEND_URI,
};

app.use(cors(corspolicy));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
    res.send('Welcome to the Capstone Backend API');    
});
app.use('/product', productRoutes);
app.use('/user', userRoutes);

app.listen(port, () => {
    // Connect to MongoDB
    connectDB();
    console.log(`Server running on http://localhost:${port}`);
});
