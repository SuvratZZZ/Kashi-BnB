import { prisma } from "../utils/client.js";

export const getHotels = async (req,res,nex)=>{
    try{
        const hotels = await prisma.hotels.findMany({
            include: {
                owner: {
                    select : {
                        name : true,
                        email : true,
                    }
                },
                images: {
                    take: 1,
                }
            }
        });
        return res.status(200).json({ hotels });
    }
    catch(e){
        console.log(e);
        return res.status(420).json({
            message : "error getting hotels",e
        });
    }
};

export const getUniqueHotel = async (req,res,nex)=>{
    try{
        const id = req.params.uid;
        if(!id){
            return res.status(420).json({
                message : "no id",
            });
        }
        const hotel = await prisma.hotels.findUnique({
            where : {
                id
            },
            include : {
                owner : {
                    select : {
                        name : true,
                        email : true
                    },
                },
                images : true
            }
        });
        return res.status(200).json({
            ...hotel
        })
    }
    catch(e){
        console.log(e);
        return res.status(420).json({
            message : "error getting hotels",e
        });
    }
};


export const bookHotel = async (req,res,nex) => {
    try{
        const id = req.params.uid;
        if(!id){
            return res.status(420).json({
                message : "no id",
            });
        }
        
        const booking = await prisma.bookings.create({
            data : {
                ...req.body,
            }
        })
        return res.status(200).json({
            message : "booked hotel",
            booking
        });
    }
    catch(e){
        console.log(e);
        return res.status(420).json({
            message : "error booking hotel",e
        });
    }
};


export const getMyHotels = async (req,res,nex) =>{
    try{
        const hotels = await prisma.hotels.findMany({
            where : {
                email : req.body.user.email,
            },
            include : {
                bookings : true,
            }
        })
        return res.status(200).json({
            message : "your hotels",
            hotels
        });
    }
    catch(e){
        console.log(e);
        return res.status(420).json({
            message : "error getting your hotels",e
        });
    }
}
