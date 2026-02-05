// fibonacciRoutes.js

import express from 'express';
import { getFirst50 } from '../controllers/fibonacciController.js';

const router = express.Router();

router.get('/first50', getFirst50);

export default router;
