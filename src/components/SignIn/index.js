import React, { useState } from 'react'
import { Container } from './styles'
import { Layout } from 'antd'
import Footer from '../Footer'
import Login from 'ant-design-pro/lib/Login';
import { Alert, Checkbox } from 'antd';
import Fade from 'react-fade-opacity'
const { Tab, UserName, Password, Submit } = Login;

export default function SignIn() {

    const [notice, setNotice] = useState('')
    const [type, setType] = useState('tab1')
    const [autoLogin, setAutoLogin] = useState(true)


    function onSubmit(err, values) {
        console.log('value collected ->', {
            ...values,
            autoLogin: autoLogin,
        });
        if (type === 'tab1') {
            setNotice('')
            if (!err && (values.username !== 'admin' || values.password !== '888888')) {
                setTimeout(() => {
                    setNotice('The combination of username and password is incorrect!')
                }, 500);
            }
        }
    };
    function onTabChange(key) {
        setType(key)
    };
    function changeAutoLogin(e) {
        setAutoLogin(e.target.checked)
    };


    return (
        <Fade in={true} delay={20} interval={20} >

            <Layout>
                <Container>
                    <Login
                        defaultActiveKey={type}
                        onTabChange={onTabChange}
                        onSubmit={onSubmit}
                    >
                        <Tab key="tab1" tab="Market Place Price - Entrar">
                            {notice && (
                                <Alert
                                    style={{ marginBottom: 24 }}
                                    message={notice}
                                    type="error"
                                    showIcon
                                    closable
                                />
                            )}
                            <UserName name="username" />
                            <Password name="password" />
                        </Tab>

                        <div>
                            <Checkbox checked={autoLogin} onChange={changeAutoLogin}>
                                Keep me logged in
                         </Checkbox>
                            <a style={{ float: 'right' }} href="">
                                Forgot password
                        </a>
                        </div>
                        <Submit>Login</Submit>
                        <div>
                            Other login methods
                        <span className="icon icon-alipay" />
                            <span className="icon icon-taobao" />
                            <span className="icon icon-weibo" />
                            <a style={{ float: 'right' }} href="/signup">
                                Register
                         </a>
                        </div>
                    </Login>
                </Container>
                <Footer />
            </Layout>
        </Fade>
    )
}
