const React = require('react');

const CompLibrary = require('../core/CompLibrary.js');
const Container = CompLibrary.Container;
const siteConfig = require(process.cwd() + '/siteConfig.js');
const ApiBoxes = require(process.cwd() + '/core/ApiBoxes.js');

class Api extends React.Component {
    render() {
        return (
            <Container padding={['bottom', 'top']}>
                <div className="productShowcaseSection">
                    <h1>Conheça nossas API's</h1>
                    <div className="productShowcaseSection">
                        <ApiBoxes />
                    </div>
                </div>
            </Container >
        );
    }
}

module.exports = Api;