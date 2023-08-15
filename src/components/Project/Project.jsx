import s from "./Project.module.scss";
import svg from "../../assets/icons/sprite.svg";
import { Button } from "../Button/Button";

const ImgWrap = ({ img, alt }) => {
  const image = "src/assets/img";
  return (
    <picture>
      <source
        srcSet={`${image}/${img}.jpg 1x,
            ${image}/${img}@2x.jpg 2x`}
      />
      <img src={image + "/${img}.jpg"} alt={alt} />
    </picture>
  );
};

const Backdrop = ({ title }) => {
  return (
    <div className={s.backdrop}>
      <div className={s.backdrop_textblock}>
        <h3 className={s.backdrop_title}>{title}</h3>
        <a href="#" className={s.backdrop_link}>
          ПОДРОБНЕЕ
          <svg width="24" height="24" className={s.backdrop_svg}>
            <use href={svg + "#icon-arrow"}></use>
          </svg>
        </a>
      </div>
    </div>
  );
};

export const Project = () => {
  return (
    <section className={s.wrapper}>
      <h2 className={s.project_title}>Наши проекты</h2>
      <ul className={s.project_image__wrapper}>
        <li className={s.project_image__item}>
          <Backdrop title="ДОСУГОВЫЙ ЦЕНТР" />
          <ImgWrap img="project" alt="Досуговый центр" />
        </li>
        <li className={s.project_image__item}>
          <Backdrop title="КУЛЬТУРНЫЙ ЦЕНТР" />
          <ImgWrap img="project1" alt="КУЛЬТУРНЫЙ центр" />
        </li>
        <li className={s.project_image__item}>
          <Backdrop title="СПОРТИВНЫЙ ЦЕНТР" />
          <ImgWrap img="project2" alt="СПОРТИВНЫЙ центр" />
        </li>
        <li className={s.project_image__item}>
          <Backdrop title="ЖИЛИЩНЫЙ ЦЕНТР" />
          <ImgWrap img="project3" alt="ЖИЛИЩНЫЙ центр" />
        </li>
        <li className={s.project_image__item}>
          <Backdrop title="РАЗВЛЕКАТЕЛЬНЫЙ ЦЕНТР" />
          <ImgWrap img="project4" alt="РАЗВЛЕКАТЕЛЬНЫЙ центр" />
        </li>
      </ul>
      <Button
        title="ВСЕ ПРОЕКТЫ"
        bgrclr="#333333"
        color="#FFFFFF"
        fill="#FFFFFF"
      />
    </section>
  );
};
