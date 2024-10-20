/**
 * @description Main component of the application
 * @author Yuting Xie
 * @date Oct 14, 2024
 */

import React from "react";
import {Layout} from "antd";

import {Navigation} from "./components/navigation";

const cssBackground: React.CSSProperties = {
    backgroundImage: "url('/img/bg.jpg')",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "fixed",
    zIndex: -1,
};

const cssPageContent: React.CSSProperties = {
    zIndex: 1,
};

interface ResponsiveComponentState {
    windowWidth: number;
}

class App extends React.Component<{}, ResponsiveComponentState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
        };
    }

    updateDimensions = () => {
        this.setState({windowWidth: window.innerWidth});
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
        // Make content component responsive
        const {windowWidth} = this.state;
        const cssContent: React.CSSProperties = {
            display: "flex",
            flexDirection: windowWidth > 768 ? "row" : "column", // Example of a responsive layout
            padding: windowWidth > 768 ? "20px" : "10px",
            backgroundColor: windowWidth > 768 ? "lightblue" : "lightgreen",
        };

        return (
            <div className="App">
                <div style={cssBackground}></div>
                <div style={cssPageContent}>
                    <Layout>
                        <Navigation></Navigation>
                    </Layout>
                </div>
            </div>
        );
    }
}

export default App;
