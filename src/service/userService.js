import {User} from "../model/user.js";
export class UserService{
    constructor() {
        this.listUser=[];
        this.listUser.push(new User('Quỳnh', 1))
        this.listUser.push(new User('hoang anh', 2))
        this.listUser.push(new User('tru', 3))
    }
    showAll(){
        return this.listUser
    }
}
export default new UserService()