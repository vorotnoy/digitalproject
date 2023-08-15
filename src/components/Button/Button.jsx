import s from './Button.module.scss'
import svg from "../../assets/icons/sprite.svg";

export const Button =({title, bgrclr, color, fill})=>{
    return(
        <button type="button" className={s.button}  style={{backgroundColor:bgrclr}}>
        <p className={s.button_title}  style={{color : color}}>{title}</p>
        <svg width="24" height="24" fill={fill}>
          <use href={svg + "#icon-arrow"}></use>
        </svg>
      </button>
    )
}