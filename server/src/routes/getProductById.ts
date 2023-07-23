import { Router } from 'express';
import { getProductById } from '../controllers/getProducts/getProductById';

const router = Router();

router.get('/', getProductById);

export default router;
