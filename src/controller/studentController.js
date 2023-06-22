import fs from "fs";
import {parse} from "qs";
import studentService from "../service/studentService.js";
import userService from "../service/userService.js";
import url from "url";

class StudentController {
    showAll(req, res) {
        let data='';
        req.on('data',drawData=>{
            data+=drawData
        });
        req.on('end',()=>{
            if(req.method==='GET'){
                showList(req,res)
            } else {
                data=parse(data);
                // let student=studentService.edit(data.id);

                // if( student!==undefined){
                //     console.log(data)
                //     studentService.add(data);
                //     showList(req,res)
                // }else {
                    studentService.add(data);
                    showList(req,res)
                // }

            }

        })

    }
    showFormAdd(req, res) {
        fs.readFile('views/studentManagement/add.html', 'utf-8', (err, string) => {
            res.write(string);
            res.end();
        })

    }
    showFormEdit(req, res) {
        fs.readFile('views/studentManagement/edit.html', 'utf-8', (err, string) => {
            let x= url.parse(req.url,true);
            let student=studentService.edit(x.query.idEdit);
            string=string.replace('{id}',student.id)
            string=string.replace('{name}',student.name)
            string=string.replace('{age}',student.age)
            res.write(string);
            res.end();
        })

    }



}
function  showList(req,res) {
    fs.readFile('views/studentManagement/listStudent.html', 'utf-8', (err, string) => {
        let str='';
        for (const x of studentService.findAll()) {
            str+=`<h2>${x.id}:  ${x.name} , ${x.age} tuổi <button > delete</button> <a href="/edit-student?idEdit=${x.id}"> <button > Edit</button> </a></h2>`
        }
        string=string.replace('{List}', str)
        res.write(string);
        res.end();
    })}
export default new StudentController()