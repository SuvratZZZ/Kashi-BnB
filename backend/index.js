import express from 'express';
import { limiter } from './middleware/auth.js';
import userRouter from './routes/user.js';
import hotelRouter from './routes/hotel.js'
import cors from 'cors'

const app = express();

app.use(cors({
    origin: ['http://69.62.84.19:4000', 'https://varanasibnb-com-hqhc.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
  }));
// app.use(limiter);
app.use(express.json());
app.use('/api/v1/user',userRouter);
app.use('/api/v1/hotel',hotelRouter);


app.get('/',(req,res)=>{
    return res.send("Apis for Kashi-BnB");
});

// app.use('/api/v1/restr');
// https://kashi-bnb-production.up.railway.app/

app.listen(3000,()=>{
    console.log("app running on");
})
