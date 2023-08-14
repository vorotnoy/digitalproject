import s from "./Hero.module.scss";
import img from "../../assets/img/hero.jpg";
import clsx from "clsx";
import { Button } from "../Button/Button";
import svg from "../../assets/icons/sprite.svg";

export const Hero = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.info_block}>
        <h1>
          PROJECT <span>HOME</span>
        </h1>
        <div className={s.navigate_block}>
          <div className={s.navigate_items}>
            <div className={clsx(s.navigate_item, s.navigate_item__rotation)}>
              <svg width="24" height="24">
                <use href={svg + "#icon-arrow"}></use>
              </svg>
            </div>
            <div className={s.navigate_item}>
              <svg width="24" height="24">
                <use href={svg + "#icon-arrow"}></use>
              </svg>
            </div>
            <div className={s.navigate_line}></div>
          </div>
          <div className={s.navigate_info}>
            <p className={s.navigate_info__item}>01</p>
            <div className={clsx(s.navigate_line, s.rotation)}></div>
            <p className={s.navigate_info__item}>02</p>
          </div>
        </div>
      </div>
      <div className={s.image_wrapper}>
        <img src={img} className={s.image} />
        <div className={s.button_wrapper}><Button title='ВЗГЛЯНУТЬ'/></div>
        
      </div>
    </section>
  );
};
