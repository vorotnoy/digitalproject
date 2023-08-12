import s from "./Header.module.scss";
import { Nav } from "../Nav/Nav";
import img from '../../assets/img/logo_header.png'

export const Header = () => {
  return (
    <header className={s.wrapper}>
      <img src={img} className={s.image}/>
      <Nav />
    </header>
  );
};
