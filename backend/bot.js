// let cou=100

// while(cou){
//     try{
//         const res = await fetch("https://kashi-bnb-production.up.railway.app/");
//         const stream = res.body.pipeThrough(new TextDecoderStream());
//         for await (const val of stream){
//             console.log(val);
//         }
//     }
//     catch(e){
//         console.log(e);
//         break;
//     }
//     cou--;
// }

import { prisma } from './utils/client.js'


// const me = await prisma.users.findUnique({
//     where: {
//         email : "subrat.singh.cer21@itbhu.ac.in"
//     }
// })

// const hotel = await prisma.hotels.create({
//     data:{
//         name : "viswakarma",
//         address : "IIT BHU, Hyderabad Colony, Varanasi",
//         ownerId : me.id,
//         gmap : "https://maps.app.goo.gl/GJ2Cm9jXutJDXwoc9",
//     }
// })

// const img = await prisma.himages.create({
//     data : {
//         url : "https://iitbhu.ac.in/sites/default/files/institute/others/hostels/img/slider/vishwakarma/slider_02.jpg",
//         name : "hostel profile",
//         hotelId : hotel.id,
//     }
// });

let hotel = await prisma.hotels.findMany();

// let hotel = await prisma.hotels.findMany({
//     where : {
//         name : 'viswakarma'
//     },
//     // select : "owner"
// });

// console.log(me);
console.log(hotel);
// console.log(img);
