import {
  Router,
} from 'express';

import UserController from '../controller/userController';

const router = Router();

router.post('/signup', UserController.signupAUser); //
router.post('/login', UserController.loginUsers);

export default router;
