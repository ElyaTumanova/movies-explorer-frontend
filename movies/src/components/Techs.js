import React from 'react';

function Techs (){
  return (
    <section className="tech" id="technologies">
      <h2 className="tech__header page__section-header page__section-width page__padding">Технологии</h2>
      <h3 className="tech__subtitle">7 технологий</h3>
      <p className="tech__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="tech__cards">
        <li className="tech__card">HTML</li>
        <li className="tech__card">CSS</li>
        <li className="tech__card">JS</li>
        <li className="tech__card">React</li>
        <li className="tech__card">Git</li>
        <li className="tech__card">Express.js</li>
        <li className="tech__card">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;