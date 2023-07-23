import { Router } from 'express';
import { updateProductsByTitle } from '../controllers/updateProducts/updateProductsByTitle';

const router = Router();

router.put('/:title', updateProductsByTitle);

export default router;