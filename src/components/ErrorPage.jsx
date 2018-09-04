var React = require('react');

const errorMap = {
  404: "404 Not Found"
}

function ErrorPage(props) {
  return(
    <div className="error-page">
      <h1>{errorMap[props.errorCode]}</h1>
    </div>
  );
}

module.exports = ErrorPage;