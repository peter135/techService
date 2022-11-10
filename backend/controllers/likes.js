import { db } from "../server/connect.js"
import jwt from "jsonwebtoken"
import moment from "moment"

export const getLikes = (req,res)=>{
    
        const q = `SELECT userId FROM likes WHERE postId = ?`

        db.query(q,[req.query.postId],(err,data)=>{
            if(err) return res.status(500).json(err);
            return res.status(200).json(data)
        })

}

export const addLike = (req,res)=>{
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in!")

    jwt.verify(token,"secretkey",(err,userInfo) => {
        const q = "INSERT INTO likes (`userId`,`postId`) VALUES (?)"

        const values = [
            userInfo.id,
            req.body.postId
        ]

        db.query(q,[values],(err,data)=>{
            if(err) return res.status(500).json(err);
            return res.status(200).json("likes had been created")
        })

    })

}


export const deleteLike = (req,res)=>{
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in!")

    jwt.verify(token,"secretkey",(err,userInfo) => {
        const q = "DELETE FROM likes WHERE `userId` = ? AND `postId` = ?"

        const values = [
            userInfo.id,
            req.body.postId
        ]

        db.query(q,[values],(err,data)=>{
            if(err) return res.status(500).json(err);
            return res.status(200).json("likes had been deleted")
        })

    })

}