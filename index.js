const jsonServer=require('json-server')
//common js
const server = jsonServer.create()
//create a server using json-server
server.use(jsonServer.defaults())
//defaults returns middlewares (parsing,stringify,resourse sharing b/w diff origins) used by JSON server -tells our server to use these middlewares
const route =jsonServer.router('db.json')
//tells the place where the data should be saved
server.use(route)
server.listen(3000,()=>{
    console.log('server is running on portno 3000')
})