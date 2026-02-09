import { Router } from 'express';
import { getFirstTenUsers } from '../controllers/usersController.js';

const router = Router();

router.get('/', getFirstTenUsers);

export default router;