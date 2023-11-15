import React from 'react';

function Techs (){
  return (
    <section className="tech" id="technologies">
      <h2 className="tech__header page__section-header page__section-width page__padding">Технологии</h2>
      <h3 className="tech__subtitle">7 технологий</h3>
      <div className="tech__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</div>
      <div className="tech__cards">
        <div className="tech__card">HTML</div>
        <div className="tech__card">CSS</div>
        <div className="tech__card">JS</div>
        <div className="tech__card">React</div>
        <div className="tech__card">Git</div>
        <div className="tech__card">Express.js</div>
        <div className="tech__card">mongoDB</div>
      </div>
    </section>
  );
}

export default Techs;