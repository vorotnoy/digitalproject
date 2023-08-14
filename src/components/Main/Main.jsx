import s from './Main.module.scss'
import { Hero } from '../Hero/Hero'
import { About } from '../About/About'

export const Main = ()=>{
    return(
        <div className={s.container}>
            <Hero/>
            <About/>
        </div>
    )
}