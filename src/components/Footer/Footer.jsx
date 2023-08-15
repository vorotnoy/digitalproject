import s from "./Footer.module.scss";
import img from "../../assets/img/logo_footer.png";
import svg from "../../assets/icons/sprite.svg";

export const Footer = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <img src={img} className={s.footer_logo} />
        <div className={s.footer_nav}>
          <p className={s.footer_title}>Информация</p>
          <ul className={s.footer_nav__list}>
            <li className={s.footer_nav__item}>Главная</li>
            <li className={s.footer_nav__item}>Галерея</li>
            <li className={s.footer_nav__item}>Проекты</li>
            <li className={s.footer_nav__item}>Сертификаты</li>
            <li className={s.footer_nav__item}>Контакты</li>
          </ul>
        </div>
        <div className={s.footer_contact}>
          <p className={s.footer_title}>Контакты</p>
          <ul className={s.footer_contact__list}>
            <li className={s.footer_contact__item}>
              <svg
                width="11"
                height="16"
                fill="#FFFFFF"
                className={s.footer_svg}
              >
                <use href={svg + "#icon-location"}></use>
              </svg>
              <p className={s.footer_contact__text}>
                100000, Республика Казахстан, г. Караганда, ул. Телевизионная 10
              </p>
            </li>
            <li className={s.footer_contact__item}>
              <svg
                width="11"
                height="16"
                fill="#FFFFFF"
                className={s.footer_svg}
              >
                <use href={svg + "#icon-phone"}></use>
              </svg>
              <p className={s.footer_contact__text}>+38 (000) 000 00 00</p>
            </li>
            <li className={s.footer_contact__item}>
              <svg
                width="11"
                height="16"
                fill="#FFFFFF"
                className={s.footer_svg}
              >
                <use href={svg + "#icon-email"}></use>
              </svg>
              <p className={s.footer_contact__text}>mail@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className={s.footer_social}>
          <p className={s.footer_title}>Социальные сети</p>
          <div className={s.footer_social__list}>
            <svg width="15" height="19" className={s.footer_svg}>
              <use href={svg + "#icon-facebook"}></use>
            </svg>
            <svg
                width="22"
                height="17"
                className={s.footer_svg}
              >
                <use href={svg + "#icon-twitter"}></use>
              </svg>
              <svg
                width="20"
                height="20"
                className={s.footer_svg}
              >
                <use href={svg + "#icon-linkedin"}></use>
              </svg>
              <svg
                width="14"
                height="19"
                fill="#FFFFFF"
                className={s.footer_svg}
              >
                <use href={svg + "#icon-pininterest"}></use>
              </svg>
          </div>
        </div>
      </div>
      <div className={s.footer_line}></div>
      <p className={s.footer_pl}>© 2019 Digital Project. Все права защищены.</p>
    </section>
  );
};
