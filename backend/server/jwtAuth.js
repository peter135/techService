require("dotenv").config();

const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')
const ACCESS_TOKEN_SECRET= '82dce0b5f964a2f6d3d668a703bd1b0387d25a976d737d3514d2ab18a88d965c4cfea707b336a2517019222c8eb54edf06d0b582e1f55e3a4efcb7b6a56065e8'

app.use(express.json())

const posts = [
    {
        username:'Kyle',
        title:'Post1'
    } ,
    {
        username:'Jim',
        title:'Post2'

    }
]

app.get('/posts',authenticateToken,(req,res)=>{
    res.json(posts.filter(post=>post.username === req.user.name))

})


app.post('/login',(req,res)=>{

    const username = req.body.username
    const user = {name:username}

    const accessToken = generateAcessToken(user)
    res.json({accessToken})

})

function authenticateToken(req,res,next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    if(token == null) {
        return res.sendStatus(401)
    }

    jwt.verify(token,ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err) {
            return res.sendStatus(403)
        }
        req.user = user
        next()

    })

}

function generateAcessToken(user) {
    return jwt.sign(user,ACCESS_TOKEN_SECRET,{expiresIn:'15s'})
}


app.listen(3000)

