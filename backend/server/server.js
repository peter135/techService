require("dotenv").config();

const express = require("express")
const app = express()

//middleware
app.use(express.json())


app.use("/posts",require("./routes/postRoutes"));

app.use((err,req,res,next)=> { 
    console.log(err.stack)
    console.log(err.name)
    console.log(err.code)

    res.status(500).json({
        message:"something went rely wrong."
    })
})

const port = 5000

app.listen(port, () =>
console.log(`Server is listening on port ${port}...`)
);