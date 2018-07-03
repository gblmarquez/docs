"use strict"
const React = require('react');
const scripts = ["https://cdn.jsdelivr.net/npm/redoc/bundles/redoc.standalone.js"];
const styles = ["/docs/css/redoc-component/style.css"];

class Redoc extends React.Component {
    render() {
        return (
            <div className="top">
                {styles.map((url,i) => <link rel="stylesheet" href={url} key={i} />)}

                <redoc scroll-y-offset="80" spec-url={this.props.url}></redoc>

                {scripts.map((url, i) => <script src={url} key={i} />)}
            </div>
        );
    }
}

module.exports = Redoc;