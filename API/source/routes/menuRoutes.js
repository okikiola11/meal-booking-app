import { Router } from 'express';

import MenuController from '../controller/menuController';
import authMiddleware from '../middleware/authMiddleware';
import MenuMiddleware from '../middleware/menuMiddleware';

const router = Router();

router.use('/', authMiddleware.verifyToken);
router.get('/', MenuMiddleware.fetchAllMenu, MenuController.fetchAllMenu);
router.get('/:id', MenuMiddleware.getSingleMenu, MenuController.getSingleMenu);
router.post('/', MenuMiddleware.addAMenu, MenuController.addAMenu);

export default router;
