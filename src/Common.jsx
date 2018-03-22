import React from 'react';

const Home = () => (
  <div className="home">
    <h1>Home Section contents</h1>
  </div>
);

const Header = () => (
  <div className="header">
    <h1>Issue Tracker</h1>
  </div>
);
const Footer = () => (
  <div className="footer">
    Full source code available at this <a href="https://github.com/ashotpahlevanyan/promernstack-book">Github repository</a>
  </div>
);

export {
  Home,
  Header,
  Footer,
};
