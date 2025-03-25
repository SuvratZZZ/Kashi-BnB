import { prisma } from "../utils/client.js";

export const getHotels = async (req,res,nex)=>{
    try{
        const hotels = await prisma.hotels.findMany();
        return res.status(200).json({
            ...hotels
        })
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



