"use strict"
const React = require('react');

// const CompLibrary = require('../../core/CompLibrary.js');
// const siteConfig = require(process.cwd() + '/siteConfig.js');

class WHMCS extends React.Component {
    render() {
        return (
            <div className="page-api">
                <div className="page-api__description">
                    <div className="wrapper">
                        <div className="description__title">
                            <h1>Plugin WHMCS</h1>
                            <p>Aqui você encontrará todas as referências das nossas API's</p>
                        </div>
                    </div>
                </div>
                <div className="wrapper homeWrapper page-api__api-box">
                </div>
            </div >
        );
    }
}

module.exports = WHMCS;