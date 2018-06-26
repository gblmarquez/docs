/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Plugins extends React.Component {
  render() {
      const plugins = siteConfig.plugins.map((plugin, i) => {
      return (
        <a href={plugin.infoLink} key={i}>
          <img src={plugin.image} alt={plugin.caption} title={plugin.caption} />
        </a>
      );
    });

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Plugins para Integração</h1>
              <p>Disponibilização de Plugins para integração com: </p>
            </div>
            <div className="logos">{plugins}</div>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Plugins;
