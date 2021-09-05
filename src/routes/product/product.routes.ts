import {Router} from 'express';
import ctrl from '../../controller/product/product.controller';

const userRouter = Router();
userRouter.get("/all",ctrl.get);
export default userRouter;
