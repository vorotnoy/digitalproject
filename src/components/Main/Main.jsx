import s from './Main.module.scss'
import { Hero } from '../Hero/Hero'

export const Main = ()=>{
    return(
        <div className={s.container}>
            <Hero/>
        </div>
    )
}