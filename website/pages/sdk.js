const React = require('react');

const CompLibrary = require('../core/CompLibrary.js');
const Container = CompLibrary.Container;
const siteConfig = require(process.cwd() + '/siteConfig.js');
const ApiBoxes = require(process.cwd() + '/core/ApiBoxes.js');

class Api extends React.Component {
    render() {
        return (
            <div className="page-api">
                <div className="page-api__description">
                    <div className="wrapper">
                        <div className="description__title">
                            <h1>Referências das API's</h1>
                            <p>Aqui você encontrará todas as referências das nossas API's</p>
                        </div>
                    </div>
                </div>
                <div className="wrapper homeWrapper page-api__api-box">
                    <ApiBoxes />
                </div>
            </div >
        );
    }
}

module.exports = Api;