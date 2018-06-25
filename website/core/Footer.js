/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Documentações</h5>
            <a href={this.docUrl('doc1.html', this.props.language)}>
              Como Utilizar?
            </a>
            <a href={this.docUrl('doc2.html', this.props.language)}>
              Guias
            </a>
            <a href="https://nfe.io/docs" target="_blank">
              Referência da API
            </a>
          </div>
          <div>
            <h5>Comunidade</h5>
            <a
              href="https://nfe.io/blog"
              target="_blank"
              rel="noreferrer noopener">
              Blog NFe.io
            </a>
            <a
              href="https://consulta.guru"
              target="_blank"
              rel="noreferrer noopener">
              Consulta.Guru
            </a>
            <a href="https://caiu.la">Sistema de Monitoramento</a>
            <a href={this.pageUrl('users.html', this.props.language)}>
              User Showcase
            </a>
          </div>
          <div>
            <h5>Veja Mais</h5>
            <a href={this.props.config.baseUrl + 'blog'}>Blog</a>
            <a href="https://github.com/nfe">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/yagosenhorini/docusaurus/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Estrela
            </a>
          </div>
        </section>

        <a
          href="https://nfe.io"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={this.props.config.baseUrl + 'img/nfe-io-logo.svg'}
            alt="NFe.io"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;