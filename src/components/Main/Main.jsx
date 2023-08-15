import s from './Main.module.scss'
import { Hero } from '../Hero/Hero'
import { About } from '../About/About'
import { Task } from '../Task/Task'
import { Project } from '../Project/Project'
import { ContactUs } from '../ContactUs/ContactsUs'

export const Main = ()=>{
    return(
        <div className={s.container}>
            <Hero/>
            <About/>
            <Task/>
            <Project/>
            <ContactUs/>
        </div>
    )
}