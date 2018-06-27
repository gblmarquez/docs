const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Integrations extends React.Component {
    render() {
        const integrations = siteConfig.integrations.map((integration, i) => {
        return (
          <a href={integration.infoLink} key={i}>
            <img src={integration.image} alt={integration.caption} title={integration.caption} />
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
              <div className="logos">{integrations}</div>
            </div>
          </Container>
        </div>
      );
    }
  }
  
  module.exports = Integrations;