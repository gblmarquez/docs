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
  <h1 className="projectTitle">
    Documentação
  <small>Bem vindo à documentação do NFe!
    Automatize seu financeiro com nossa API de emissão de Notas Fiscais!
     </small>
  </h1>
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
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} className="features" />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'This is the content of my feature',
        image: imgUrl('docs.svg'),
        imageAlign: 'top',
        title: 'Documentação',
      },
      {
        content: 'The content of my second feature',
        image: imgUrl('api-reference.svg'),
        imageAlign: 'top',
        title: 'Referência da API',
      },
      {
        content: 'This is the content of my feature',
        image: imgUrl('updates.svg'),
        imageAlign: 'top',
        title: 'Atualizações',
      },
      
    ]}
  </Block>
);

const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{ textAlign: 'center' }}>
    <h2>Callout da Feature</h2>
    <MarkdownBlock>Estas são as features deste projeto</MarkdownBlock>
  </div>
);

const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: 'Converse sobre aprender a usar isto',
        image: imgUrl('nfe_transp.png'),
        imageAlign: 'right',
        title: 'Aprenda',
      },
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: 'Converse sobre testar isso',
        image: imgUrl('nfe_transp.png'),
        imageAlign: 'left',
        title: 'Testar',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: 'Esta é outra descrição sobre o quanto este projeto é util',
        image: imgUrl('nfe_transp.png'),
        imageAlign: 'right',
        title: 'Descrição',
      },
    ]}
  </Block>
);

class Plugins extends React.Component {
  render() {
    let language = this.props.language || '';
    const plugins = siteConfig.plugins.map((plugin, i) => {
      return (
        // <a href={plugin.infoLink} key={i}>
        <div className="app-item">
          <img className="plugin" src={plugin.image} alt={plugin.caption} title={plugin.caption} />
          <span className="app-name">{plugin.caption}</span>
        </div>
        // </a>
      );
    });

    return (
      <Container>
        <div className="productShowcaseSection">
          <div className="prose shadow-card shadow-card-elevate">
            <a href={pageUrl('plugins', language)} target="_blank" style={{ color: "black" }}>
              <h3>Integração Plugins</h3>
              <h4>Não é um Desenvolvedor?</h4>
              <p>Fique tranquilo!
                Nós disponibilizamos alguns plugins para integração ao seu site.
              </p>
              <div className="logos">{plugins}</div>
            </a>
          </div>
        </div>
      </Container>
    );
  }
}

class SDKS extends React.Component {
  render() {
    let language = this.props.language || '';
    const sdks = siteConfig.sdks.map((sdk, i) => {
      return (
        // <a href={sdk.infoLink} key={i}>
        <div className="app-item">
          <img className="sdk" src={sdk.image} alt={sdk.caption} title={sdk.caption} />
          <span className="app-name">{sdk.caption}</span>
        </div>
        // </a>
      );
    });

    return (
      <Container>
        <div className="productShowcaseSection">
          <div className="prose use-case-card shadow-card shadow-card-elevate">
            <a href={pageUrl('clientes-sdk', language)} target="_blank" style={{ color: "black" }}>
              <h3>Clientes SDK</h3>
              <h4>Pensado para desenvolvedores</h4>
              <p>Disponibilização de Clientes SDK para integração. Asnaisnfas aisndaisda sd as</p>
              <div className="logos">{sdks}</div>
            </a>
          </div>
        </div>
      </Container>
    );
  }
}

class Platforms extends React.Component {
  render() {
    let language = this.props.language || '';
    const platforms = siteConfig.platforms.map((platforms, i) => {
      return (
        // <a href={platforms.infoLink} key={i}>
        <div className="app-item">
          <img className="erp" src={platforms.image} alt={platforms.caption} title={platforms.caption} />
          <span className="app-name">{platforms.caption}</span>
        </div>
        // </a>
      );
    });

    return (
      <Container>
        <div className="productShowcaseSection">
          <div className="prose use-case-card shadow-card shadow-card-elevate">
            <a className="use-case-content " href={pageUrl('integracoes', language)} target="_blank" style={{ color: "black" }}>
              <h3>Integração Plataformas</h3>
              <h4>Facilidade na hora de integrar o NFe</h4>
              <p>Nosso sistema possui integração com diversas plataformas do mercado</p>
              <div className="logos">{platforms}</div>
            </a>
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