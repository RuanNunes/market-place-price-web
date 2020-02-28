import styled, { keyframes } from 'styled-components';
import { Layout, Form, Input, Alert } from 'antd'
export const Container = styled(Layout.Content)`
    margin-top:120px;
    min-width:320px;
    width: 21vw;
    height:100%;
    align-self:center;
`;
export const FormComponent = styled(Form)`
    text-align:center;
`;

export const InputComponent = styled(Input)`
    margin:6px;
    width:90%;
`;
export const InputComponentPassword = styled(Input.Password)`
    margin:6px;
    width:90%;
`;
