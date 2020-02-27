import React from 'react';

import { Layout } from 'antd'
const { Footer } = Layout;
export default function FooterComponent() {
    return (
        <Footer style={{ textAlign: 'center' ,position: "fixed",width:'100%' , bottom: "0" }}>Market Place Price  © {new Date().getFullYear()}</Footer>
    );
}
