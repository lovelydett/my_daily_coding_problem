/**
 * @description Main component of the application
 * @author Yuting Xie
 * @date Oct 14, 2024
 */

import React from "react";
import { Layout } from "antd";

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

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div style={cssBackground}></div>
                <div style={cssPageContent}>
                    <Layout>
                        <Layout.Header>
                            <h1>Header</h1>
                        </Layout.Header>
                        <Layout.Content>
                            <h1>Content</h1>
                        </Layout.Content>
                        <Layout.Footer>
                            <h1>Footer</h1>
                        </Layout.Footer>
                    </Layout>
                </div>
            </div>
        );
    }
}

export default App;
