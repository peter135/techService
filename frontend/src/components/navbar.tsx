import style from "./navbar.less"
import { history, useLocation} from 'umi';
import { useState, useEffect } from 'react';
import '@/assets/fontawesome/css/all.css';

export default function navBar() {

    const [activeRoute, setActiveRoute] = useState("/home");
    const [homeColor, setHomeColor] = useState("#fff");
    const [aboutColor, setAboutColor] = useState("#fff");
    const [productsColor, setProductsColor] = useState("#fff");

    const activeColor = "rgba(56, 166, 229,1)"
    const color = "#000"

    useEffect(() => {
        // console.log("history useEffect")
        setRoute()

        // 监听路由变化
        history.listen(() => {
            // console.log("history",history.location)
            setRoute()
        })

    });

    const setRoute = ()=>{
        const pathName = history.location.pathname
        setActiveRoute(pathName)
        if(pathName== "/home"){
            setHomeColor(activeColor)
            setAboutColor(color)
            setProductsColor(color)

        }else if(pathName== "/products"){
            setAboutColor(activeColor)
            setHomeColor(color)
            setProductsColor(color)

        }else if(pathName== "/about") {
            setProductsColor(activeColor)
            setAboutColor(color)
            setHomeColor(color)
        }

    }

    const goHome = ()=>{
        history.push(`/home`)

    }

    const goProducts = ()=>{
        history.push(`/products`)

    }

    const goAbout = ()=>{
        history.push(`/about`)

    }


    return (
      <div className={style.navbar}>

            <div className={style.button} onClick={goHome}>
                 <i className={`fas fa-home fa-lg `} style={{color:homeColor}}></i>
                 <span className={activeRoute == "/home" ? style.active:""}  >首页</span>
            </div>

            <div className={style.button} onClick={goProducts}>
                 <i className={`fas fa-bars fa-lg `} style={{color:aboutColor}}></i>
                 <span className={activeRoute == "/products" ? style.active:""} >全部产品</span>
            </div>

            <div className={style.button}  onClick={goAbout}>
                <i className={`fas fa-user fa-lg `} style={{color:productsColor}}></i>
                <span className={activeRoute == "/about" ? style.active:""}>联系我们</span>
            </div>

      </div>
    );



}
  