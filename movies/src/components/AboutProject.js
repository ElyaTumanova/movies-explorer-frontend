import React from 'react';

function AboutProject (){
  return (
    <section className="about page__section-margin page__section-width page__padding" id="about_project">
      <h2 className="about__header page__section-header">О проекте</h2>
      <div className="about__descripton">
        <div className="about__descr-item">
          <h3 className="about__descr-heading">Дипломный проект включал 5 этапов</h3>
          <p className="about__descr-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about__descr-item">
          <h3 className="about__descr-heading">На выполнение диплома ушло 5 недель</h3>
          <p className="about__descr-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about__timing">
        <p className="about__timing-item about__timing-item_black">1 неделя</p>
        <p className="about__timing-item about__timing-item_grey">4 недели</p>
        <p className="about__timing-item about__timing-item_white">Back-end</p>
        <p className="about__timing-item about__timing-item_white">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;