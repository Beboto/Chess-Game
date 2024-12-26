import { Router } from 'express';
import {register, login , googleAuth, googleAuthCallback ,logout } from '../controllers/authControllers.js';  // Import controller functions for authentication
import { verifyToken } from '../Middlewares/authMiddleware.js'; // Import middleware for token verification

const router = Router();

router.post('/register', register);
router.post('/sign-in', login);
router.post('/logout' , logout)
router.get('/google', googleAuth);
router.get('/google/callback', googleAuthCallback);


router.get('/check-auth' , verifyToken , (req, res) => {   
    res.json(req.user);
});

export default router;
