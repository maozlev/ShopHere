import { Router } from 'express';
import { getProductsByTitle } from '../controllers/getProducts/getProductsByTitle';

const router = Router();

router.get('/', getProductsByTitle);

export default router;
