import { PrismaClient } from '@prisma/client'
import cryptoRandomString from 'crypto-random-string';

const prisma = new PrismaClient();

export const loginControl = async (req,res,nex)=>{
}

export const verification = async (req,res,nex)=>{
    try{
        const token = req.query.token;
        const email = req.query.email;
        if(!token||!email){
            return res.status(411).json({
                message:"no token",
            });
        }
        
        console.log("token ver : ",token);

        const user = await prisma.users.findUnique({
            where : {
                email : email,
            }
        });
        
        console.log(user);

        if(user.token === token){
            const user = await prisma.users.update({
                where : {
                    email : email,
                },
                data : {
                    token : null,
                    verified : true
                }
            });
            
            return res.status(200).json({
                message : "verified",
                user 
            });
        }
        else{
            return res.status(411).json({
                message:"invalid token",
                e
            });
        }

    }
    catch(e){
        return res.status(411).json({
            message:"cant verify",
            e
        });
    }
}

export const signupControl = async (req,res,nex)=>{
    try{
        const user = await prisma.users.findUnique({
            where:{
                email : req.body.email
            }
        });

        if((user)&&(user.verified===true)){
            return res.status(420).json({
                message : "user already exist",
            })
        }

        const token = cryptoRandomString({length:15});
        console.log("token is : ",token);

        if(!user){
            user = await prisma.users.create({
                data: {
                    ...req.body,
                    token: token,
                }
            });
        }
        else{
            await prisma.users.update({
                where:{
                    email: req.body.email
                },
                data:{
                    token: token,
                }
            })
        }


        return res.status(201).json({
            message:"verify user to finsish",
        })
    }
    catch(e){
        return res.status(411).json({
            message:"unable to gen token",
            e
        });
    }
}

export const checkControl = (req,res,nex)=>{
    return res.json({
        message:"route working"
    });
}