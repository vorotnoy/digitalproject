import s from "./Task.module.scss";
import clsx from "clsx";

export const Task = () => {
  return (
    <section className={s.wrapper}>
      <h2 className={s.title}>Основные задачи</h2>
      <div className={s.task_block__wrapper}>
        <div className={clsx(s.task_block, s.task_block__margin)}>
          <p className={s.task_block__number}>1</p>
          <p className={s.task_block__desc1}>
            "Создание комфортных условий и повышение качества обслуживания
            клиентов"
          </p>
        </div>
        <div className={s.task_block}>
          <p className={s.task_block__number}>2</p>
          <p className={s.task_block__desc2}>
            "Постоянно совершенствовать качество предоставляемых услуг путем
            обучения персонала, закупки нового оборудования и усиленной рекламы
            на рынке"
          </p>
        </div>
      </div>
    </section>
  );
};
