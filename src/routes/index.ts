import {Router} from 'express';
import userRouter from './user';
import testRouter from './test';
import accountRouter from './account/account.routes';
import productRouter from './product/product.routes';
const apiRouter = Router();
apiRouter.use("/user",userRouter);
apiRouter.use("/test",testRouter);
apiRouter.use("/account",accountRouter);
apiRouter.use("/product",productRouter);
export default apiRouter;
