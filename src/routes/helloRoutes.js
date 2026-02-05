import { Router } from 'express';

const router = Router();

// Define the GET /api/hello route
router.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello World' });
});

export default router;