import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123",
    database:"test"
})

app.get("/", (req,res)=>{
    res.json("hello this is the backend")
})

app.get("/books", (req,res)=>{
    const q = "SELECT * FROM books"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })

})

app.post("/books",(req,res)=>{
    const q = "INSERT INTO books (`title`,`desc`,`cover`,`price`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
        req.body.price,
    ];

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("book has been created successfully")
    })
})

app.delete("/books/:id",(req,res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?"

    db.query(q,[bookId],(err,data)=> {
        if(err) return res.json(err);
        return res.json("book has been created successfully")

    })

})

app.put("/books/:id",(req,res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";

    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
        req.body.price,
    ]

    db.query(q,[...values,bookId],(err,data)=> {
        if(err) return res.json(err);
        return res.json("book has been updated successfully")

    })

})


const port = 3000

app.listen(port, () =>
console.log(`Server is listening on port ${port}...`)
);