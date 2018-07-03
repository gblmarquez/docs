const React = require('react');
const siteConfig = require(process.cwd() + '/siteConfig.js');
const styles = [siteConfig.baseUrl + "/css/components/apiBox.css"];

class ApiBoxes extends React.Component {
    render() {
        const apis = siteConfig.apis.map((api, i) => {
            return (
                <div className="use-cases flex-container flex-space-between flex-wrap">
                    <div className="use-case-card">
                        <a className="use-case-content shadow-card shadow-card-elevate" href={api.apiLink}>
                            <div className="block hfull">
                                <div className="pos-rel flex-container flex-dir-col flex-space-between hfull">
                                    <div>
                                        <h2>{api.title}</h2>
                                        <p>{api.content}</p>                
                                    </div>
                                    <div className="spacer24"></div>
                                    <span className="upper-case text-bold link-arrow-hover flex-container flex-align-center"> Leia mais
                                        <span className="link-arrow-hover-icon">
                                            <svg viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m169 6 4 8h-8z" fill-rule="evenodd" transform="matrix(0 1 -1 0 14 -165)"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            );
        });

        return (
            <div className="apis">{apis}</div >
        );
    }
}

module.exports = ApiBoxes;