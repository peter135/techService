import style from "./productDetail.less";
import data from "@/assets/data.json";
import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function ProductsDetailPage() {

  const data = [
    "https://www.hfsclgs.com/upLoad/product/month_2112/20211209102830109.jpg",
    "https://www.hfsclgs.com/upLoad/product/month_2112/20211209102830109.jpg",
    "https://www.hfsclgs.com/upLoad/product/month_2112/20211209102830109.jpg",
  ]

  return (
    <div className={style.container}>

          <Carousel controls={false}>
            {data.map((item)=>{
              return(
                <Carousel.Item>
                    <img className="d-block w-100" src={item}/>
                </Carousel.Item>
              )
            })}
          </Carousel>

          <div>
                详情
          </div>
    </div>
  );
}
