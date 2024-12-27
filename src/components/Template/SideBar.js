import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      {/* <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link> */}
      <header>
        <h2>Raj Chhatwani</h2>
        <p>
          <a href="mailto:rajchhatwani39@gmail.com">rajchhatwani39@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Raj. I am pursuing B.Tech Computer Engineering from{' '}
        <a href="https://silveroakuni.ac.in">Silver Oak University.</a>{' '}
        Learnig and exploring new stuff related to web development.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Raj Chhatwani{' '}<Link to="/">rajchhatwani.github.io</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
