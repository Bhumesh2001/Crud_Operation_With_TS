import * as express from 'express';
import * as userController from '../controllers/userController';

const router = express.Router();

router.get('/get-users', userController.getUsers);
router.post('/create-user', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
