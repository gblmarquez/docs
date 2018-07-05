"use strict"
const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class MSFlow extends React.Component {
  render() {
    return (
      <div className="page-integrations">
        <div className="page-integrations__hero msflow">
          <div className="hero__title-box">
            <img className="title-box__icon" src="/docs/img/integration-logos/logo-flow.png" alt="Microsoft Flow" />
            <div className="title-box__description ">
              <h1>Microsoft Flow</h1>
              <p>Automatizar processos + tarefas.</p>
              <p>Automatize tarefas ao integrar seus aplicativos favoritos com o Microsoft Flow. Facilite as tarefas repetitivas com a automação do fluxo de trabalho.</p>
            </div>
          </div>
        </div>

        <div className="page-integrations__content-wrapper">

        </div>
      </div>
    );
  }
}

module.exports = MSFlow;