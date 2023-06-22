import fs from "fs";
import userService from "../service/userService.js";
import userRouter from "../router/userRouter.js";
class UserController {
    showAll(req, res) {
        fs.readFile('views/userManagement/listUser.html', 'utf-8', (err, string) => {
            let str = '';
            for (const strElement of userService.showAll()) {
                str += `<table> <tr><td>${strElement.username}</td>
                                    <td>${strElement.password}</td>
                                    <td><button>DELETE</button></td>
                       </tr> </table> `
            }
            string = string.replace('{a}', str)
            res.write(string);
            res.end();
        })
    }

    showFormAdd(req, res) {
        fs.readFile('views/userManagement/add.html', 'utf-8', (err, string) => {
            res.write(string);
            res.end();
        })

    }

}

export default new UserController()