// Mock user routes

import express from 'express';
import { getMockUser1, getMockUser2 } from '../controllers/userController.js';

const router = express.Router();

router.get('/user/mock1', getMockUser1);
router.get('/user/mock2', getMockUser2);

export default router;