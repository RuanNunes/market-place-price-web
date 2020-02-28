import React from 'react'
import { Container } from './styles'
import { Layout } from 'antd'
import Fade from 'react-fade-opacity'
import Header from '../Header'
import Footer from '../Footer'
export default function Home() {
    return (
        <Fade in={true} delay={20} interval={20} >
            <Layout >
                <Header />
                <Container>
                    <a style={{ marginTop: '10px' }} href="/signin">
                        Sign In
                </a>
                    <div></div>
                    <a style={{ marginTop: '10px' }} href="/signup">
                        Sign up
                </a>
                </Container>
                <Footer />
            </Layout>
        </Fade>
    )
}
