import { Router } from 'express';
import { deleteProductById } from '../controllers/deleteProducts/deleteProductById';

const router = Router();

router.get('/', deleteProductById);

export default router;
