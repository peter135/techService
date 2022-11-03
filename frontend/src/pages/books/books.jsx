import React, { useState} from "react";
import { useEffect } from "react";
import axios from "axios";
import { history, useLocation} from 'umi';
import style from "./books.less";

const Books = ()=>{

    const [books,setBooks] = useState([])

    useEffect(()=>{
        const fetchAllBooks = async ()=>{
            try {
                const res = await axios.get("http://localhost:3000/books")
                setBooks(res.data)
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllBooks()

    },[])


    const pushAdd = ()=>{
        history.push(`/books/add`)

    }

    const deleteBook = async (id)=>{
        try {
             await axios.delete("http://localhost:3000/books/"+id)
             window.location.reload()

        } catch (error) {
             console.log(error)
        }

    }

    const updateBook = (id)=>{
        history.push(`/books/update/?id=${id}`)

    }

    return(
        <div className={style.container}>   
          <div className={style.books}>
            {books.map((book)=>{
                return(
                     <div className={style.book} key={book.id}>
                         {book.cover && <img src={book.cover} alt=""></img>}
                         <h2>{book.title}</h2>
                         <p>{book.desc}</p>
                         <span>{book.price}</span>
                         <button onClick={()=>deleteBook(book.id)} className={style.delete}>
                                delete
                         </button>
                         <button onClick={()=>updateBook(book.id)} className={style.update}>
                                update
                         </button>
                     </div>
                )
            })}
          </div>
          <button onClick={pushAdd} className={style.button}>
            add new book
          </button>
        </div>
        
    )
}

export default Books

