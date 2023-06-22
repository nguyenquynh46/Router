import fs from 'fs';
import qs from "qs";

import {StudentService} from "../service/studentService.js";
import studentRouter from "./studentRouter.js";
import userRouter from "./userRouter.js";
import homeController from "../controller/homeController.js";
let studentService = new StudentService()

let router = {
    '/': homeController.showIndex,
    '/err': homeController.showErr

}
router={...router,...studentRouter}
router={...router,...userRouter}
export default router