import React from 'react';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark probootstrap_navbar" id="probootstrap-navbar">
    <div className="container">
    <a className="navbar-brand" href="index.html">Fluge</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#probootstrap-menu" aria-controls="probootstrap-menu" aria-expanded="false" aria-label="Toggle navigation">
      <span><i className="ion-navicon"></i></span>
    </button>
    <div className="collapse navbar-collapse" id="probootstrap-menu">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="city-guides.html">Sobre Nós</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/atendimento">Atendimento</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/reservas">Minhas Reservas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/entrar">
            Entrar
            <span class="icon ion-arrow-right-c ml-2" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
);

export default Nav;
