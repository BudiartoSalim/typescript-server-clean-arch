import express from 'express';
const router = express.Router();
import UserController from '../../../../controllers/user_controller';
import expressAdapter from '../adapters/express_adapter';

router.get('/', expressAdapter(UserController.testEndpoint))

export default router;