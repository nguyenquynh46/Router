import {Student} from "../model/student.js";
export class StudentService{
    constructor() {
        this.ListStudent=[];
        this.ListStudent.push(new Student('1','Quynh', 23));
        this.ListStudent.push(new Student(2,'Trần Anh', 8));
        this.ListStudent.push(new Student(3,'Hoàng Anh', 9));
        this.ListStudent.push(new Student(4,'Trụ', 7));
        this.ListStudent.push(new Student(5,'Hieu', 6));
    };
    findAll(){
        return this.ListStudent;
    };
    add(student){
        let check=false
        for (let i = 0; i < this.ListStudent.length ; i++) {
            if(this.ListStudent[i].id==student.id){
                this.ListStudent[i]=student;
                check=true
            }
        }
        if(check===false){
            this.ListStudent.push(student)
        }

    }
    delete(id){
        this.ListStudent= this.ListStudent.filter(item=> item.id===id)
    }
    edit(id){
        for (const student of this.ListStudent) {
            if(student.id===id){
                return student
            }
        }
    }
    // update(newStudent){
    //     for (let i = 0; i < this.ListStudent.length; i++) {
    //         if(this.ListStudent[i].id===newStudent.id){
    //             this.ListStudent[i]=newStudent
    //         }
    //     }
    // }
}
export default new StudentService()