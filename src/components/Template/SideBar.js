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
<<<<<<< HEAD
        Hi, I&apos;m Raj. I am pursuing B.Tech Computer Engineering from{' '}
        <a href="https://silveroakuni.ac.in">Silver Oak University.</a>{' '}
        Learnig and exploring new stuff related to web development.
=======
        Hi, I&apos;m Michael. I am a{' '}
        <a href="https://icme.stanford.edu/">Stanford ICME</a> graduate, YC
        alumnus, and the co-founder and CTO of{' '}
        <a href="https://promptfoo.dev">Promptfoo</a>. Previously, I
        was VP of Engineering at <a href="https://usesmileid.com">SmileID</a>,
        co-founder and CTO of <a href="https://arthena.com">Arthena</a>, and
        co-founded <a href="https://matroid.com">Matroid</a>.
>>>>>>> ca7e1f83b4de5cfc2596abc9139dbb4586bc1c15
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
