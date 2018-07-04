/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <div className="projectTitle">
    <h1>
      Documentação
  </h1>
    <p>Bem vindo à documentação do NFe!
      Automatize seu financeiro com nossa API de emissão de Notas Fiscais!
    </p>
  </div>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <Features />
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} className="features" />
  </Container>
);

const Features = props => (
  <Container
    id={props.id}
    background={props.background}>

    <div className="block-features">
      <a href={siteConfig.baseUrl + 'docs/doc1'} className="features alignCenter">
        <img src={siteConfig.baseUrl + 'img/docs.svg'} />
        <h2>Documentação</h2>
      </a>
      <a href={siteConfig.baseUrl + 'api'} className="features alignCenter">
        <img src={siteConfig.baseUrl + 'img/api-reference.svg'} />
        <h2>Referência da API</h2>
      </a>
      <a href={siteConfig.baseUrl + 'blog'} className="features alignCenter">
        <img src={siteConfig.baseUrl + 'img/updates.svg'} />
        <h2>Atualizações</h2>
      </a>
    </div>
  </Container>
);

class Plugins extends React.Component {
  render() {
    let language = this.props.language || '';
    const plugins = siteConfig.plugins.map((plugin) => {
      return (
        <a href={plugin.pluginLink}>
          <div className="app-item">
            <img className="plugin" src={plugin.image} alt={plugin.caption} title={plugin.caption} />
            <span className="app-name">{plugin.caption}</span>
          </div>
        </a>
      );
    });

    return (
      <Container>
        <div className="productShowcaseSection">
          <div className="prose shadow-card">
            <h3>Integração Plugins</h3>
            <h4>Não é um Desenvolvedor?</h4>
            <p>Fique tranquilo!
              Nós disponibilizamos alguns plugins para integração ao seu site.
              </p>
            <div className="logos">{plugins}</div>
          </div>
        </div>
      </Container>
    );
  }
}

class SDKS extends React.Component {
  render() {
    let language = this.props.language || '';
    const sdks = siteConfig.sdks.map((sdk) => {
      return (
        <a href={sdk.sdkLink}>
          <div className="app-item">
            <img className="sdk" src={sdk.image} alt={sdk.caption} title={sdk.caption} />
            <span className="app-name">{sdk.caption}</span>
          </div>
        </a>
      );
    });

    return (
      <Container>
        <div className="productShowcaseSection">
          <div className="prose shadow-card">
            <h3>Clientes SDK</h3>
            <h4>Pensado para desenvolvedores</h4>
            <p>Disponibilização de Clientes SDK para integração. Asnaisnfas aisndaisda sd as</p>
            <div className="logos">{sdks}</div>
          </div>
        </div>
      </Container>
    );
  }
}

class Platforms extends React.Component {
  render() {
    let language = this.props.language || '';
    const platforms = siteConfig.platforms.map((platforms) => {
      return (
        <a href={platforms.erpLink}>
          <div className="app-item">
            <img className="erp" src={platforms.image} alt={platforms.caption} title={platforms.caption} />
            <span className="app-name">{platforms.caption}</span>
          </div>
        </a>
      );
    });

    return (
      <Container>
        <div className="productShowcaseSection">
          <div className="prose shadow-card">
            <h3>Integração Plataformas</h3>
            <h4>Facilidade na hora de integrar o NFe</h4>
            <p>Nosso sistema possui integração com diversas plataformas do mercado</p>
            <div className="logos">{platforms}</div>
          </div>
        </div>
      </Container>
    );
  }
}

class Index extends React.Component {



  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          {/* <FeatureCallout /> */}
          {/* <LearnHow /> */}
          {/* <TryOut /> */}
          <section className="box integrations">
            <div className="wrapper">
              <h2>Integrações</h2>
              <div className="box-wrapper">
                <Platforms language={language} />
                <Plugins language={language} />
              </div>
            </div>
          </section>
          <section className="box developers">
            <div className="wrapper">
              <h2>Desenvolvedores</h2>
              <div className="box-wrapper">
                <SDKS language={language} />
              </div>
            </div>
          </section>
          {/* <Description /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;