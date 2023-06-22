import fs from 'fs';
import qs from "qs";
import {StudentService} from "../service/studentService.js";
import studentController from '../controller/studentController.js'
let studentService = new StudentService()

let studentRouter = {
    '/students': studentController.showAll,

    '/add-student': studentController.showFormAdd,
    '/edit-student': studentController.showFormEdit
}

export default studentRouter