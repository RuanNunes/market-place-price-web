import React, { useState } from 'react'
import { Container, FormComponent, InputComponent, InputComponentPassword } from './styles'
import { Layout, Button, Tabs, Alert } from 'antd'
import Footer from '../Footer'
import FadeAlert from '../FadeAlert'
import Fade from 'react-fade-opacity'
export default function SignUp() {
    const [notice, setNotice] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    function submitHandler(e) {
        console.log(name, email, password)
        if (email && name && password && confirmPassword) {
            if (password === confirmPassword) {
                console.log(email, name, password)
            } else {
                showNotice("Confirme sua senha!")
            }
        } else {
            showNotice("Preencha os campos corretamente!")
        }
    }
    function showNotice(message) {
        setNotice({ time: Date.now(), message: message })
    }

    return (
        <Fade in={true} delay={20} interval={20} >
            <Layout>
                <Container>
                    <FormComponent>
                        <Tabs>
                            <Tabs.TabPane key="1" tab="Cadastre-se">

                                <FadeAlert notice={notice} />
                                <InputComponent onChange={e => setName(e.target.value)} placeholder="Nome completo (Obrigatório)" />
                                <InputComponent onChange={e => setEmail(e.target.value)} placeholder="Email (Obrigatório)" />
                                <InputComponentPassword onChange={e => setPassword(e.target.value)} placeholder="Senha (Obrigatório)" />
                                <InputComponentPassword onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirme sua senha (Obrigatório)" />

                                <Button type="primary" onClick={submitHandler}>Cadastrar</Button>
                                <div>
                                    <a style={{ marginTop: '10px' }} href="/signin">
                                        Ja tenho uma conta!
                                </a>
                                </div>
                            </Tabs.TabPane>
                        </Tabs>

                    </FormComponent>
                </Container>
                <Footer></Footer>
            </Layout>
        </Fade>
    )
}
