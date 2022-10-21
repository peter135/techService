import style from "./home.less";

export default function HomePage() {
  return (
    <div className={style.container}>
      <div className={style.column}>
        <span>公司优势</span>
      </div>
      <div className={style.column}>
        <span>热销产品</span>
      </div>
      <div className={style.column}>
        <span>物流配送</span>
      </div>
    </div>
  );
}
