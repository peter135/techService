import {Outlet} from 'umi'
import styles from "./basicLayout.less"
import NavBar from "@/components/navbar";

export default () => {
  return (
    <div className={styles.container}> 
        <Outlet/>
        <NavBar/>
    </div>
  )

}