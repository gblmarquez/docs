"use strict"
const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Vindi extends React.Component {
  render() {
    return (
      <div className="page-integrations">
        <div className="page-integrations__hero vindi">
          <div className="hero__title-box">
            <img className="title-box__icon" src="/docs/img/integration-logos/logo_vindi.png" alt="Vindi" />
            <div className="title-box__description">
              <h1>Vindi</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, itaque? Molestiae cupiditate consequuntur beatae tempora?</p>
            </div>
          </div>
        </div>

        <div className="page-integrations__content-wrapper">

        </div>
      </div>
    );
  }
}

module.exports = Vindi;