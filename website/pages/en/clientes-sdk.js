"use strict"

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class SDKS extends React.Component {
  render() {
      const sdks = siteConfig.sdks.map((sdk, i) => {
      return (
        <a href={sdk.infoLink} key={i}>
          <img src={sdk.image} alt={sdk.caption} title={sdk.caption} />
        </a>
      );
    });

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Clientes SDK</h1>
              <p>Disponibilização de Clientes SDK para integração com: </p>
            </div>
            <div className="logos">{sdks}</div>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = SDKS;