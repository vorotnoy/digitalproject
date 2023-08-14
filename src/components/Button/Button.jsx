import s from './Button.module.scss'
import svg from "../../assets/icons/sprite.svg";

export const Button =({title})=>{
    return(
        <button type="button" className={s.button}>
        <p className={s.button_title}>{title}</p>
        <svg width="24" height="24">
          <use href={svg + "#icon-arrow"}></use>
        </svg>
      </button>
    )
}