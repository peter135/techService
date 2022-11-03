import React from "react";
import { useState } from "react";
import axios from "axios";
import { history, useLocation} from 'umi';
import style from "./add.less";

const Add = ()=>{

    const [book,setBook] = useState({
        title:"",
        desc:"",
        price:null,
        cover:""
    })

    const handleChange = (e)=>{
        setBook((prev)=>({...prev,[e.target.name]:e.target.value}));
    }

    const handleClick = async e =>{
        console.log("book",book)
        e.preventDefault()
        try {
            await axios.post("http://localhost:3000/books",book)
            history.push("/books")
        } catch (error) {
            console.log("error",error)
        }
    }

    return(
        <div className={style.container}>
            <h1>add new book</h1>
            <input className={style.input} type="text" placeholder="title" onChange={handleChange} name="title"/>
            <input className={style.input} type="text" placeholder="desc" onChange={handleChange} name="desc"/>
            <input className={style.input} type="text" placeholder="cover" onChange={handleChange} name="cover"/>
            <input className={style.input} type="text" placeholder="price" onChange={handleChange} name="price"/>
            <button className={style.button} onClick={handleClick}>
                add
            </button>
        </div>
    )
}

export default Add

