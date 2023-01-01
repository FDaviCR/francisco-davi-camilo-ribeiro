import { Router } from 'express';

import * as LoginController from '../controllers/LoginController';

const router = Router();

router.get('/ping', LoginController.ping);

// Endpoints de Login
router.post('/login', LoginController.login);

export default router;