import React from 'react';
import AppIcon from '@/src/ui/AppIcon';
import s from './About.module.scss';

interface Props {}

const About = ({}: Props): React.ReactNode => {
  return (
    <section className={s.root} id="about">
      <div className={s.appIcon}>
        <AppIcon width={200} height={200} />
      </div>
      <h1 className={s.appTitle}>
        Notion Go - удобный список дел и упрощенный интерфейс для работы с notion.
      </h1>
      <div className={s.appDescriptionContainer}>
        <div className={s.description}>
          <h1>Быстрее и эффективнее</h1>
          <p className={s.descriptionText}>
            Если вы уже используете notion, то вы будете рады удобству и простоте использования
            Notion Go.
            <br />
            <br />
            Мы решили, что вам стоит оставить только то, что вам действительно необходимо, и удалить
            все лишнее.
          </p>
        </div>
        <div className={s.description}>
          <h1>Улучшенный опыт работы с Notion</h1>
          <p className={s.descriptionText}>
            Мы добавили самые удобные функции, чтобы помочь вам в работе, и вы можете использовать
            их в любой момент.
            <br />
            <br />
            Мы знаем, что Notion - это мощный инструмент, и мы хотим чтобы вам было просто и легко
            использовать его
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
