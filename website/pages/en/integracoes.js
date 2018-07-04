"use strict"
const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Platforms extends React.Component {
  render() {
    const platforms = siteConfig.platforms.map((platforms, i) => {
      return (
        <a href={platforms.infoLink} key={i}>
          <img src={platforms.image} alt={platforms.caption} title={platforms.caption} />
        </a>
      );
    });

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Integração com ERP'S</h1>
              <p>Integrações com os maiores ERP'S do mercado: </p>
            </div>
            <div className="logos">{platforms}</div>
          </div>
        </Container>
      </div>
    );
  }
}
module.exports = Platforms;