const express = require("express");
const app = express();
app.use(express.static("build", { maxAge: 1000 * 3600 }));
app.listen(3001,()=>{
    console.log('http://localhost:3001')
});
//启动服务器 nodemon server.js
//或 node server.js