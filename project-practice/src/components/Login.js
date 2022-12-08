import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import axios from 'axios';

const LoginBlock = styled.div`
    padding-top: 120px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 120px;

    overflow-y: auto;

    .id{
        width: 100%;

        margin-bottom: 10px;
    }
    .password{
        width: 100%;
        margin-bottom: 10px;
    }
    .loginBtn{
        width: 100%;
    }
`;



function Login () {
    const [userId, setUserId] = useState('');
    const [userPwd, setUserPwd] = useState('');
    const onIdChange = e => {
        setUserId(e.target.value)
    };

    const onPwdChange = e => {
        setUserPwd(e.target.value)
    }

    const login = async () => {
        try{
            const response = await axios.post("http://localhost:3004/signUp", {
                userId : userId,
                userPwd : userPwd
            });
            console.log(response);
        } catch (e) {
            console.log(e);
        }

    }
    return (
      <LoginBlock>
          <TextField
            className="id"
            id="outlined-basic"
            label="id"
            variant="outlined"
            value={userId}
            onChange={onIdChange}
          />
          <TextField
            className="password"
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={userPwd}
            onChange={onPwdChange}
          />
          <Button
            className="loginBtn"
            variant="contained"
            disableElevation
            onClick={login}
          >
            Login
          </Button>
      </LoginBlock>
    )
}

export default Login;