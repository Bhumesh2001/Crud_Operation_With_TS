import * as express from 'express';
import * as userController from '../controllers/userController';

const router = express.Router();

router.get('/get-users', userController.getUsers);
router.post('/create-user', userController.createUser);
router.put('/update-user/:id', userController.updateUser);
router.delete('/delete-user/:id', userController.deleteUser);

export default router;