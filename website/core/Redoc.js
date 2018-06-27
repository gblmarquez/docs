"use strict"

const React = require('react');
const scripts = ["https://cdn.jsdelivr.net/npm/redoc/bundles/redoc.standalone.js"];
const styles = [];

class Redoc extends React.Component {
    render() {
        return (
            <div>
                {styles.map(url => <link rel="stylesheet" href={url} key={url} />)}

                <redoc spec-url={this.props.url}></redoc>

                {scripts.map(url => <script src={url} key={url} />)}
            </div>
        );
    }
}

module.exports = Redoc;