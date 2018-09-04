const React = require('react');

const BasicNavbar = require('./common/BasicNavbar.jsx');

function LandingPage() {
  return (
    <div className="landing-page">
      <BasicNavbar />
      <div className="section-center-page">
        <p>Hello, world!</p>
        <p>You can write React code to change this content! Look at the readme for more details...</p>
      </div>
    </div>
  );
}

module.exports = LandingPage;
