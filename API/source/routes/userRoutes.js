import {
    Router
} from 'express';

import UserController from '../controller/userController';

const router = Router();

router.post('/auth/login', UserController.loginUsers);
router.get('/', UserController.fetchAllUsers);
router.post('/', UserController.addAUser);
router.put('/:id', UserController.getAUser);

export default router;