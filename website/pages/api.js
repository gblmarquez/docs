const React = require('react');

const CompLibrary = require('../core/CompLibrary.js');
const Container = CompLibrary.Container;
const siteConfig = require(process.cwd() + '/siteConfig.js');
const ApiBoxes = require(process.cwd() + '/core/ApiBoxes.js');

class Api extends React.Component {
    render() {
        return (
            <div>
                <div className="page-api">
                    <div className="wrapper">
                        <div className="page-api__title">
                            <h1>Conheça nossas API's</h1>
                            <p>Aqui você encontrará todas as nossas APIs disponíveis</p>
                        </div>
                    </div>
                </div>
                <div className="wrapper homeWrapper page-api-box">
                    <ApiBoxes />
                </div>
            </div >
        );
    }
}

module.exports = Api;