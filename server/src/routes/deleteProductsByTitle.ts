import { Router } from 'express';
import { deleteProductsByTitle } from '../controllers/deleteProducts/deleteProductsByTitle';

const router = Router();

router.get('/', deleteProductsByTitle);

export default router;
