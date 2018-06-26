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
        <Logo img_src={imgUrl('nfe_transp.png')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href="#try">Teste aqui</Button>
            <Button href={docUrl('doc1.html', language)}>Link de Exemplo</Button>
            <Button href={docUrl('doc2.html', language)}>Link de Exemplo 2</Button>
          </PromoSection>
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
        image: imgUrl('nfe_transp.png'),
        imageAlign: 'top',
        title: 'Primeira Feature',
      },
      {
        content: 'The content of my second feature',
        image: imgUrl('nfe_transp.png'),
        imageAlign: 'top',
        title: 'Segunda Feature',
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

// const Showcase = props => {
//   if ((siteConfig.users || []).length === 0) {
//     return null;
//   }
//   const showcase = siteConfig.users
//     .filter(user => {
//       return user.pinned;
//     })
//     .map((user, i) => {
//       return (
//         <a href={user.infoLink} key={i}>
//           <img src={user.image} alt={user.caption} title={user.caption} />
//         </a>
//       );
//     });

//   return (
//     <div className="productShowcaseSection paddingBottom">
//       <h2>Quem usa o NFe hoje?</h2>
//       <p>Nosso produto é utilizado por diversas empresas, como: </p>
//       <div className="logos">{showcase}</div>
//       <div className="more-users">
//         <a className="button" href={pageUrl('users.html', props.language)}>
//           Veja Mais
//         </a>
//       </div>
//     </div>
//   );
// };



// const Plugin = props => {
//   return (
//     <div className="productShowcaseSection paddingBottom">
//       <h2>Plugins para Integração</h2>
//       <p>lorem ipsum </p>
//       <div className="more-users">
//         <a className="button" href={pageUrl('plugins.html', props.language)}>
//           Veja Mais
//          </a>
//       </div>
//     </div>
//   )
// };

class Plugins extends React.Component {
  render() {
    let language = this.props.language || '';
    const plugins = siteConfig.plugins.map((plugin, i) => {
      return (
        <a href={plugin.infoLink} key={i}>
          <img src={plugin.image} alt={plugin.caption} title={plugin.caption} />
        </a>
      );
    });

    return (
      <div>
        <Container padding={['bottom', 'top']}>
          <div className="productShowcaseSection">
            <div className="prose">
              <a href="plugins.html" style={{ color: "black" }}>
                <h2>Plugins para Integração</h2>
                <h4>Não é um Desenvolvedor?</h4>
                <p>Fique tranquilo!
                  Nós disponibilizamos alguns plugins para integração ao seu site.
              </p>
              </a>
            </div>
            <div className="logos">{plugins}</div>
            <a className="button" href={pageUrl('plugins.html', language)}>
              Clique Aqui
            </a>
          </div>
        </Container>
      </div>
    );
  }
}
module.exports = Plugins;

// const SdkClients = props => {
//   return (
//     <div className="productShowcaseSection paddingBottom">
//       <h2>Clientes SDK</h2>
//       <p>lorem ipsum </p>
//       <div className="more-users">
//         <a className="button" href={pageUrl('clientes-sdk.html', props.language)}>
//           Veja Mais
//          </a>
//       </div>
//     </div>
//   )
// };

class SDKS extends React.Component {
  render() {
    let language = this.props.language || '';
    const sdks = siteConfig.sdks.map((sdk, i) => {
      return (
        <a href={sdk.infoLink} key={i}>
          <img src={sdk.image} alt={sdk.caption} title={sdk.caption} />
        </a>
      );
    });

    return (
      <div>
        <Container padding={['bottom', 'top']}>
          <div className="productShowcaseSection">
            <div className="prose">
              <a href={pageUrl('clientes-sdk.html', language)} target="_blank" style={{ color: "black" }}>
                <h2>Clientes SDK</h2>
                <h4>Pensado para desenvolvedores</h4>
                <p>Disponibilização de Clientes SDK para integração.</p>
              </a>
            </div>
          </div>
          <div className="logos" style={{ display: "block", textAlign: "center"}}>{sdks}</div>
          <div className="productShowcaseSection">
            <a className="button" href={pageUrl('clientes-sdk.html', language)}>
              Clique Aqui
            </a>
          </div>
        </Container>
      </div>
    );
  }
}
module.exports = SDKS;

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <section style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <Plugins language={language} />
            <SDKS language={language} />
          </section>
          <Description />
        </div>
      </div>
    );
  }
}

module.exports = Index;
