import s from './Main.module.scss'
import { Hero } from '../Hero/Hero'
import { About } from '../About/About'
import { Task } from '../Task/Task'

export const Main = ()=>{
    return(
        <div className={s.container}>
            <Hero/>
            <About/>
            <Task/>
        </div>
    )
}