import style from "./products.less";
import dataJson from "@/assets/data.json";
import { useState, useEffect } from 'react';
import { history, useLocation} from 'umi';
import TopBar from "@/components/topbar";

export default function ProductsPage() {

  const [data, setData] = useState([]);


  useEffect(() => {
    const dataIndex = dataJson.products[0]
    setData(dataIndex.data)
  });  

  const setActiveIndex = (index)=>{
    console.log('products setActiveIndex',index)
    const dataIndex = dataJson.products[index]
    setData(dataIndex.data)
    console.log('dataIndex',dataIndex)

  }

  return (
    <div className={style.container}>

        <TopBar data={dataJson.products} callback={(index)=>{setActiveIndex(index)}}/>

           <div className={`container-fluid  ${style.column}`}>
              <div className={`row ${style.columnData}`}>
              {
                data.map((item,index)=>{
                  return(
                      <div key={item.id} onClick={()=>{history.push(`/productDetail?id=${item.id}`)}} className={`col-6 col-md-4`}>
                        <div className={style.columnItem}>
                          <img src={item.img}/>
                          <div className={style.columnText}>
                            <span>{item.name}</span>
                            <span>{item.desc}</span>
                          </div>
                        </div>
                      </div>
                  )
                })
              }
              </div>
           </div>
           

    </div>
  );

}
