import s from "Nav.module.scss";

export const Nav = () => {
  return (
    <>
      <ul>
        <li className={s.nav_item}>ГЛАВНАЯ</li>
        <li className={s.nav_item}>ГАЛЕРЕЯ</li>
        <li className={s.nav_item}>ПРОЕКТЫ</li>
        <li className={s.nav_item}>СЕРТИФИКАТЫ</li>
        <li className={s.nav_item}>КОНТАКТЫ</li>
      </ul>
    </>
  );
};
