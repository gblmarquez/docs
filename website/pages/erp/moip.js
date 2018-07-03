const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Moip extends React.Component {
  render() {
    return (
      <div className="page-integrations">
        <div className="page-integrations__title-box">
          <img className="title-box__icon" src="/docusaurus/img/integration-icons/moip-icon.svg" alt="Moip" />
          
        </div>

        <div className="page-integrations__content-wrapper">
          <div className="wrapper">
            <h1>Moip</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, incidunt voluptas ipsam itaque cum quibusdam eaque voluptates minus nesciunt doloribus numquam rem praesentium rerum similique asperiores dolorem quos alias accusantium quae molestiae qui sequi corporis nemo provident? Corrupti obcaecati exercitationem dolorum labore. Odio placeat quasi nihil, praesentium ab sint cumque.</p>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Moip;