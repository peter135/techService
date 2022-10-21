import style from "./topbar.less"
import { useState, useEffect } from 'react';

export default function topBar(props) {

    const {data,callback} = props
    const [activeIndex, setActiveIndex] = useState(0);
 

    return (
        
      <div className={style.topbar}>
            {data.map((item,index)=>{
                return(
                     <div key={index} className={style.button}>
                         <span className={activeIndex == index ? style.active:""} onClick={()=>{
                            setActiveIndex(index),
                            callback(index)
                            }} >{item.name}</span>
                     </div>

                )
            })}
      </div>
    );



}
  