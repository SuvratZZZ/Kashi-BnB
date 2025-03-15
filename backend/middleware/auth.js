import jwt from 'jsonwebtoken';

const authorisation = async (req,res,nex)=>{
    try{
        const token = req.header.get('authorisation').split(" ")[1];
        if(!token){
            return res.status(411).json({
                message : "no token",
            });
        }
        if(await jwt.verify(token,process.env.JWT_SEX)){
            nex();
        }
        else{
            return res.status(411).json({
                message : "invalid token",
            });
        }
    }
    catch(e){
        return res.status(411).json({
            message : "auth error",
            e
        });
    }
};
const isAdmin = async (req,res,nex)=>{
    
};
const hasHotel = async (req,res,nex)=>{

};
const hasRestr = async (req,res,nex)=>{

};

export {isAdmin,authorisation,hasHotel,hasRestr};