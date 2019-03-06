import {
    Router
} from 'express';

import UserController from '../controller/userController';

const router = Router();

router.post('/signup', UserController.signupAUser);
router.post('/login', UserController.loginUsers);
router.get('/', UserController.fetchAllUsers);
router.put('/:id', UserController.getAUser);

export default router;