import {Router} from "express";
import { loginControl, signupControl, checkControl, verification } from "../controllers/user.js";
import { authorisation, hasHotel, isAdmin } from "../middleware/auth.js";
import adminRouter from '../routes/admin.js';

const router = Router();

// admin
router.use('/admin',adminRouter);

// user
router.post('/login',loginControl);
router.post('/signup',signupControl);
router.get('/signup/verify/',verification);
router.get('/id/:uid',authorisation,signupControl);
router.get('/check',checkControl);
router.get('/auth-check',authorisation,isAdmin,checkControl);
router.get('/admin-check',authorisation,isAdmin,checkControl);
router.get('/hotel-check',authorisation,hasHotel,checkControl);

export default router;