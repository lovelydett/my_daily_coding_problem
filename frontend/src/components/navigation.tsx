/**
 * @description The navigation bar component
 * @author Yuting Xie
 * @date Oct 20, 2024
 *
 */

import React from 'react';
import {Row, Col, Menu, Image} from 'antd';

interface MenuItem {
    label: string;
    key: string;
}

const menuItems: MenuItem[] = [
    {
        label: 'History',
        key: 'history',
    },
    {
        label: 'Subscribe',
        key: 'subscribe',
    },
    {
        label: 'About',
        key: 'about',
    },
];

const cssRow: React.CSSProperties = {
    backgroundColor: '#D3C6EA',
};

const cssCol: React.CSSProperties = {
    backgroundColor: 'transparent',
}

const cssMenu: React.CSSProperties = {
    display: 'flex', // For flexbox layout
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
};

const cssItem: React.CSSProperties = {
    fontSize: '20px',
};

// No props and no states
class Navigation extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <Row style={cssRow}>
                <Col span={8} style={cssCol}>
                    <Image src={'img/title.png'} style={{width: '100%', height: 'auto'}}></Image>
                </Col>
                <Col span={16} style={cssCol}>
                    <Menu mode="horizontal" style={cssMenu}>
                        {
                            menuItems.map(item => (
                                <Menu.Item key={item.key} style={cssItem}>{item.label}</Menu.Item>
                            ))
                        }
                    </Menu>
                </Col>
            </Row>
        );
    }
}

export {Navigation};
