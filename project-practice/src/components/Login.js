import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        userId: '',
        userPwd: ''
    })
    const {userId, userPwd} = inputs;

    const onChange = e => {
        const {name, value} = e.target;

        const nextInputs = {
            ...inputs,
            [name]: value
        }

        setInputs(nextInputs);
    }

    const login = async () => {
        try{
            const response = await axios.post("/login", {
                userId : userId,
                userPwd : userPwd
            });
            if(response.data.userId === undefined || response.data.userPwd === undefined){
                alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
                return;
            }
            alert(`${response.data.userId}님 환영합니다.`);
            navigate("/", {replace:true});
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
            name='userId'
            value={userId}
            onChange={onChange}
          />
          <TextField
            className="password"
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            name='userPwd'
            value={userPwd}
            onChange={onChange}
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