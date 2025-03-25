import { Router } from "express";
import { getHotels,getUniqueHotel } from '../controllers/hotel.js';

const router = Router();

// router.use('/admin',authorisation,isAdmin,adminRouter);

// unauthorised
router.get('/hotel/:uid',getUniqueHotel);
router.get('/hotels',getHotels);

// user-authorised
// router.post('/upgrade_request',authorisation,makeRequest);
// router.get('/signup/verify/',verification);
// router.get('/check',checkControl);
// router.get('/auth-check',authorisation,isAdmin,checkControl);
// router.get('/admin-check',authorisation,isAdmin,checkControl);
// router.get('/hotel-check',authorisation,hasHotel,checkControl);

// hoteler-authorised


// admin-authorised

export default router;