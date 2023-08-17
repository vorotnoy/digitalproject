import s from "./About.module.scss";
import { Button } from "../Button/Button";
import { ImgWrap } from "../Image/Image";

export const About = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.image_block__wrapper}>
        <div className={s.image_block}>
          <ImgWrap img="about" alt="about us" />
          <ImgWrap img="about2" alt="about us" />
          <ImgWrap img="about3" alt="about us" />
        </div>
      </div>
      <div className={s.about_block}>
        <h2 className={s.about_block__title}>О компании</h2>
        <p className={s.about_block__desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <Button title="ЧИТАТЬ" />
      </div>
    </section>
  );
};
