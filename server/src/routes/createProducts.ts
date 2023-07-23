import { Router } from 'express';
import { createProducts } from '../controllers/createProducts/createProducts';

const router = Router();

router.post('/', createProducts);

export default router;
