import express from 'express';

// const app = express();

// app.use(cors());
 
// app.get("hel",(req,res)=>{
//     return res.send("fine");
// })

// app.listen(3000);
import userRouter from './routes/user.js';

const app = express();
app.use(express.json());

app.use('/api/v1/user',userRouter);
app.get('/',(req,res)=>{
    return res.send("Apis for Kashi-BnB");
});
// app.use('/api/v1/restr');
// app.use('/api/v1/hotel');
// https://kashi-bnb-production.up.railway.app/

app.listen(3000,()=>{
    console.log("app running on");
})
