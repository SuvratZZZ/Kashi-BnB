import { Router } from "express";
import { getHotels,getUniqueHotel,bookHotel,getMyHotels } from '../controllers/hotel.js';
import { authorisation,hasHotel } from '../middleware/auth.js'

const router = Router();

// router.use('/admin',authorisation,isAdmin,adminRouter);

// unauthorised
router.get('/hotel/:uid',getUniqueHotel);
router.get('/hotels',getHotels);

// user-authorised
router.post('/hotel/:uid/book',authorisation,bookHotel);
// router.get('/signup/verify/',verification);
// router.get('/check',checkControl);
// router.get('/auth-check',authorisation,isAdmin,checkControl);
// router.get('/admin-check',authorisation,isAdmin,checkControl);

// hoteler-authorised
router.get('/my-hotels',authorisation,hasHotel,getMyHotels);


// admin-authorised

export default router;