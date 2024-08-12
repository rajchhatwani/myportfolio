import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Raj Chhatwani's portfolio website. Ahmedabad based Silver Oak University graduate."
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Raj Chhatwani</Link>
          </h2>
          <p>
            Wellcome to my portfolio website, I&apos;m Ahmedabad based
            Full-stack Developer, still learning and growing,
            right now open for work you can
            contact me <Link to="/contact">here</Link> ,
          </p>
        </div>
      </header>
      <p>
        {' '}
        Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        {/* view <Link to="/stats">site statistics</Link>, or{' '} */}
        <Link to="/contact">contact</Link> me.
      </p>
      {/* <p>
        {' '}
        Source available <a href="https://github.com/rajchhatwani">here</a>.
      </p> */}
    </article>
  </Main>
);

export default Index;
