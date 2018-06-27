"use strict"

const React = require("react");
const Redoc = require(process.cwd() + '/core/Redoc.js');

class RedocLoader extends React.Component {
  render() {
    return (
      <div>
        <Redoc url={"https://api.nfe.io/v1/swagger.json"} />
      </div>
    );
  }
}

module.exports = RedocLoader;