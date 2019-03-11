import { Router } from 'express';

import orderController from '../controller/orderController';
import authMiddleware from '../middleware/authMiddleware';
import orderMiddleware from '../middleware/orderMiddleware';

const router = Router();

router.use('/', authMiddleware.verifyToken);
router.get('/', orderMiddleware.fetchAllOrder, orderController.fetchAllOrder);
router.get('/:id', orderController.getSingleOrder);
router.post('/', orderController.addAnOrder);
router.put('/:id', orderController.modifyAnOrder);

export default router;
