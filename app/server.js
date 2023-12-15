import http from 'http'
import {app} from './apps.js'

console.log("Hallo");
const server = http.createServer(app);

server.listen(8080, () => {
    console.log("Server ist online")
})
