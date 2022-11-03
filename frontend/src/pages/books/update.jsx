import React,{useState,} from "react";
import style from "./update.less";
import { useParams,useLocation,history } from 'umi';
import axios from "axios";

const Update = ()=>{

    const params = useParams();
    const location = useLocation();
    const bookId = location.search.split("=")[1]
    console.log('bookId',bookId)
    console.log('params',JSON.stringify(params))


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
            await axios.put("http://localhost:3000/books/"+bookId,book)
            history.push("/books")
        } catch (error) {
            console.log("error",error)
        }
    }

    return(
        <div className={style.container}>
            <h1>update new book</h1>
            <input className={style.input} type="text" placeholder="title" onChange={handleChange} name="title"/>
            <input className={style.input} type="text" placeholder="desc" onChange={handleChange} name="desc"/>
            <input className={style.input} type="text" placeholder="cover" onChange={handleChange} name="cover"/>
            <input className={style.input} type="text" placeholder="price" onChange={handleChange} name="price"/>
            <button className={style.button} onClick={handleClick}>
                update
            </button>
        </div>
    )
    
}

export default Update
