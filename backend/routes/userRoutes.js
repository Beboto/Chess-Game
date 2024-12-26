import express from 'express';
import { getProfile, getUser  } from '../controllers/profileControllers.js';  // Import controller functions for user profile and data
import { verifyToken } from '../Middlewares/authMiddleware.js';  // Import middleware for token verification

const router = express.Router();

router.get('/:id', verifyToken, getUser);
router.get('/profile/:id', verifyToken, getProfile);

export default router;