import jwt from 'jsonwebtoken';
import rateLimit from 'express-rate-limit';

const authorisation = async (req,res,nex)=>{
    try{
        const token = req.get('Authorization').split(" ")[1];
        if(!token){
            return res.status(411).json({
                message : "no token",
            });
        }
        const user=await jwt.verify(token,process.env.JWT_SEX);
        req.body.user=user;
        if(user){
            nex();
        }
        else{
            return res.status(411).json({
                message : "invalid token",
            });
        }
    }
    catch(e){
        console.log(e);
        return res.status(411).json({
            message : "auth error",
            e
        });
    }
};

const isAdmin = async (req,res,nex)=>{
    const user= req.body.user;
    console.log(user);
    if(user.isAdmin==true){
        nex();
    }
    else{
        return res.status(411).json({
            message:" not admin"
        });
    }
};

const hasHotel = async (req,res,nex)=>{
    const user= req.body.user;
    if(user.hasHotel==true){
        nex();
    }
    else{
        return res.status(411).json({
            message:" no hotel"
        });
    }
};
const hasRestr = async (req,res,nex)=>{
    const user= req.body.user;
    if(user.hasRestr==true){
        nex();
    }
    else{
        return res.status(411).json({
            message:" no rester"
        });
    }
};

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 10,
    message: "Too many requests, please try again later."
});

export {isAdmin,authorisation,hasHotel,hasRestr,limiter};