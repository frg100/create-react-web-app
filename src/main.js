// main.js
var React       = require('react');
var ReactDOM    = require('react-dom');
const {
  BrowserRouter,
  Route,
  Switch
}                 = require('react-router-dom');

const LandingPage = require('./components/LandingPage.jsx');
const ErrorPage   = require('./components/ErrorPage.jsx');


ReactDOM.render(
  <BrowserRouter history="">
    <Switch>
      {/* MAIN PAGES */}
      {/* You can add more routes here as your app grows */}
      <Route exact path="/" component={LandingPage} />
      <Route render={() => <ErrorPage errorCode={404} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('mainContent')
);