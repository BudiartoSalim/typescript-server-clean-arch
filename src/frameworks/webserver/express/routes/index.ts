import express from 'express';
const router = express.Router();
import UserController from '../../../../controllers/user_controller';
import expressAdapter from '../adapters/express_controller_adapter';

router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.get('/', expressAdapter(UserController.testEndpoint));

export default router;