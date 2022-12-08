import React from 'react';
import styled from 'styled-components';

const LoginTempleteBlock = styled.div`
    width: 512px;
    height: 512px;

    position: relative;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

    margin: 0 auto;
    margin-top: 200px;
    margin-bottom: 96px;

    display: flex;
    flex-direction: column;
`

function LoginTamplete ({ children }) {
    return <LoginTempleteBlock>{children}</LoginTempleteBlock>
}

export default LoginTamplete;