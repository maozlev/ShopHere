import { Router } from 'express';
import { createProduct } from '../controllers/createProducts/createProduct';

const router = Router();

router.post('/', createProduct);

export default router;
