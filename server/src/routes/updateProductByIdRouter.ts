import { Router } from 'express';
import { updateProductById } from '../controllers/updateProducts/updateProductById';

const router = Router();

router.put('/:id', updateProductById);

export default router;
