import fs from "fs";

export class HomeController{
    showIndex(req,res){
        fs.readFile('views/index.html', 'utf-8', (err, string) => {
            res.write(string);
            res.end();
        })
    }
    showErr(req,res){
        fs.readFile('views/err.html', 'utf-8', (err, string) => {
            res.write(string);
            res.end();
        })
    }
}
export default new HomeController()