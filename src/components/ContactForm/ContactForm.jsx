import s from "./ContactForm.module.scss";
import { Button } from "../Button/Button";

import svg from "../../assets/icons/sprite.svg";

export const ContactForm = () => {
  return (
    <form className={s.form}>
      <label>
        <input
          type="text"
          name="name"
          placeholder="Имя"
          className={s.form_input}
        />
      </label>
      <label>
        <input
          type="phone"
          name="phone"
          placeholder="Номер телефона*"
          className={s.form_input}
          required
        />
      </label>
      <label>
        <input
          type="email"
          name="email"
          placeholder="E-mail*"
          className={s.form_input}
          required
        />
      </label>
      <label>
        <input
          type="text"
          name="product"
          placeholder="Интересующий товар/услуга"
          className={s.form_input}
        />
      </label>
      <label>
        <textarea
          type="text"
          name="product"
          placeholder="Сообщение*"
          className={s.form_textarea}
          required
        />
      </label>
      <label htmlFor="argue" className={s.form_label__checkbox}>
        <input type="checkbox" className={s.form_checkbox} id="argue" />
        <span className={s.from_checkbox__text}>Отправляя заявку Вы соглашаетесь с политикой конфиденциальности</span>
        <svg width="20" height="20" className={s.form_checked__svg}>
          <use href={svg + "#icon-check"}></use>
        </svg>
      </label>
      <Button
        title="ОТПРАВИТЬ"
        bgrclr="#333333"
        color="#FFFFFF"
        fill="#FFFFFF"
      />
    </form>
  );
};
