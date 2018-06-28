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
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
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

        {/* <Logo img_src={imgUrl('nfe-logo.svg')} /> */}
        <div className="inner">
          <ProjectTitle />
          <Features />

          {/* <PromoSection>
            <Button href="#try">Teste aqui</Button>
            <Button href={docUrl('doc1.html', language)}>Link de Exemplo</Button>
            <Button href={docUrl('doc2.html', language)}>Link de Exemplo 2</Button>
          </PromoSection> */}
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
    <GridBlock align="center" contents={props.children} layout={props.layout} />
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
        <img className="plugin" src={plugin.image} alt={plugin.caption} title={plugin.caption} />
        // </a>
      );
    });

    return (
      <Container padding={['bottom', 'top']}>
        <div className="productShowcaseSection">
          <div className="prose use-case-card shadow-card shadow-card-elevate flex-it-3-sm flex-it-1">
            <a className="use-case-content" href={pageUrl('plugins', language)} target="_blank" style={{ color: "black" }}>
              <h2>Plugins para Integração</h2>
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
        <img className="sdk" src={sdk.image} alt={sdk.caption} title={sdk.caption} />
        // </a>
      );
    });

    return (
      <Container padding={['bottom', 'top']}>
        <div className="productShowcaseSection">
          <div className="prose use-case-card shadow-card shadow-card-elevate flex-it-3-sm flex-it-1">
            <a className="use-case-content" href={pageUrl('clientes-sdk', language)} target="_blank" style={{ color: "black" }}>
              <h2>Clientes SDK</h2>
              <h4>Pensado para desenvolvedores</h4>
              <p>Disponibilização de Clientes SDK para integração.</p>
              <div className="logos">{sdks}</div>
            </a>
          </div>
        </div>
      </Container>
    );
  }
}

class Integrations extends React.Component {
  render() {
    let language = this.props.language || '';
    const integrations = siteConfig.integrations.map((integrations, i) => {
      return (
        // <a href={integrations.infoLink} key={i}>
        <img className="erp" src={integrations.image} alt={integrations.caption} title={integrations.caption} />
        // </a>
      );
    });

    return (
      <Container padding={['bottom', 'top']}>
        <div className="productShowcaseSection">
          <div className="prose use-case-card shadow-card shadow-card-elevate flex-it-3-sm flex-it-1">
            <a className="use-case-content " href={pageUrl('integracoes', language)} target="_blank" style={{ color: "black" }}>
              <div>
                <h2>Integrações com Plataformas</h2>
                <h4>Facilidade na hora de integrar o NFe</h4>
                <p>Nosso sistema possui integração com diversas plataformas do mercado</p>
                <div className="logos">{integrations}</div>
              </div>
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
          <LearnHow />
          <TryOut />
          <section className="integrations">
            <SDKS language={language} />
            <Integrations language={language} />
            <Plugins language={language} />
          </section>
          <Description />
        </div>
      </div>
    );
  }
}

module.exports = Index;
