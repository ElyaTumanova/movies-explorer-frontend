import React from 'react';
import Photo from '../images/student__photo.png'

function AboutMe (){
  return (
    <section className="student page__section-margin page__section-width page__padding" id="student">
      <h2 className="student__header page__section-header">Студент</h2>
      <div className="student__wrap">
        <div className="student__bio">
          <h3 className="student__name">Элеонора</h3>
          <p className="student__about">Фронтенд-разработчик, 33 года</p>
          <p className="student__text">Я фронтенд-разработчик из Москвы. Долгое время работаю в консалтинге, но всегда увлекалась программированием. Обучалась также дизайну веб-интерфейсов, но решила попробовать себя в разработке. Мои сильные стороны — аналитический склад ума, структурированный подход и критический взгляд на вещи.</p>
        </div>
        <a href="https://github.com/ElyaTumanova" className="student__link" target="_blank">Github</a>
        <img src={Photo} alt="" className="student__photo" />
      </div>
    </section>
  );
}

export default AboutMe;