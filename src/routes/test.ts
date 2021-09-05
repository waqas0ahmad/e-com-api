import {Router} from 'express';
import userCtrl from '../controller/test.controller';

const userRouter = Router();
userRouter.get("/",userCtrl.get);
userRouter.get("/dump",userCtrl.dumpData);
export default userRouter;
