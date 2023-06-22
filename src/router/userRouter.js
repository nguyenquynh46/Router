import fs from 'fs';
import qs from "qs";
import {UserService} from "../service/userService.js";
import userController from "../controller/userController.js";
import studentController from "../controller/studentController.js";
let userService = new UserService();
let userRouter = {
    '/users': userController.showAll,

    '/add-user': userController.showFormAdd
}

export default userRouter