/**
 * @description Main component of the application
 * @author Yuting Xie
 * @date Oct 14, 2024
 */

import React from "react";
import { Layout } from "antd";

class App extends React.Component {
    render() {
        return (
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
        );
    }
}

export default App;
