import {Router} from 'express';
import accountCtrl from '../../controller/account/account.controller';
import { UserTypes } from '../../models/account-request.model';
import { checkAuth } from '../../utils/middlewares/auth.middleware';

const userRouter = Router();
userRouter.get("/all",checkAuth(UserTypes.SuperAdmin),accountCtrl.get);
userRouter.get("/",checkAuth(UserTypes.SuperAdmin),accountCtrl.get);
userRouter.delete("/:id/delete",checkAuth(UserTypes.SuperAdmin),accountCtrl.delete);
userRouter.post("/",accountCtrl.createAccount);
userRouter.post("/login",accountCtrl.login);
export default userRouter;
