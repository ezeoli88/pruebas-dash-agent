import express from 'express';
import { getFirst10 } from '../controllers/usersController.js';

const router = express.Router();

router.get('/first10', getFirst10);

export default router;
