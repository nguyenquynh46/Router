import http from 'http';
import qs, {parse} from 'qs';
import fs from 'fs'
import router from "./router/router.js";
import * as url from "url";


const server = http.createServer((req, res) => {
   let x= url.parse(req.url,true)

    let handle = router[x.pathname];
    if (handle === undefined) {
        handle = router['/err']
    }
    handle(req, res)
})
server.listen('8080', () => {
    console.log('Đã kết nối')
})