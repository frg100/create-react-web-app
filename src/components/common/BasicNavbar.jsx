const React = require('react');

function BasicNavbar() {
  return(
    <nav className="navbar">
      <div className="navbar-brand">
        <a className="navbar-item logo" href="/"></a>
      </div>
    </nav>
  );
}

module.exports = BasicNavbar;