require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express()

//middleware
app.use(express.json())
app.use(
    cors({
      origin: ["http://localhost:7000"],
      methods: ["GET", "POST"],
      credentials: true,
    })
);

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"LoginSystem",
    password:"123",

})

// 注册
app.post("/register",(req,res)=> {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "INSERT INTO users (username,password) VALUES (?,?)",
        [username,password],
        (err,result)=>{
            console.log(err,result)

            if(result){
                res.send({result:200,message:"注册成功"})
            }

        }

    );

})


// 登录
app.post("/login",(req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username = ?;",
        username,
        (err,result)=>{
            if(err) {
                res.send({err})
            }

            if(result.length>0) {
                if(password ===  result[0].password){
                    res.send({result})
                }else{
                    res.send({message:"Wrong password"})
                }

            }else {
                res.send({message:"user does not exists"})
            }

        }
    )
})

// start to listen
const port = 7000
app.listen(port, () =>
console.log(`Server is listening on port ${port}...`)
);