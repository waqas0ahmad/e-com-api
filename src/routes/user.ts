import {Router} from 'express';
import userCtrl from '../controller/user.controller';

const userRouter = Router();
userRouter.post("/",userCtrl.signIn);
export default userRouter;
