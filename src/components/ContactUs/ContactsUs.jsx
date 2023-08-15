import s from "./ContactUs.module.scss";
import { ContactForm } from "../ContactForm/ContactForm";
import {ImgWrap} from '../Image/Image'
export const ContactUs = () => {
  return (
    <section className={s.wrapper}>
      <h3 className={s.contactus_title}>Связаться с нами</h3>
      <div className={s.blocks_wrapper}>
        <ContactForm />
        <ImgWrap img='contact' alt = 'Форма обратной связи'/>
      </div>
    </section>
  );
};
