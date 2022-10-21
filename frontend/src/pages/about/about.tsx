
import style from "./about.less";
import { history, useLocation} from 'umi';

export default function AboutPage() {
  return (
    <div className={style.container}>
      <div className={style.column}>
        <span>公司介绍</span>
      </div>
      <div className={style.column}>
        <span>公司业务</span>
      </div>
      <div className={style.column}>
        <span>联系我们</span>
      </div>
      <div className={style.column} onClick={()=>{history.push(`/login`)}}>
        <span>登录</span>
      </div>
    </div>
  );
}
