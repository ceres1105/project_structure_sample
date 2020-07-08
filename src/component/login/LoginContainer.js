import React, { useState } from "react";
import axios from "axios";
import URL from "../../utils/config";
import styled from "styled-components";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    // console.log(email);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    // console.log(password);
  };

  const handleLogin = () => {
    //   console.log(email,password)
    axios
      .post(`${URL}/users/login`, {
        user: {
          email: email,
          password: password,
        },
      })
      .then(({ data }) => {
        console.log(data);
        const token = data.user.token;
        window.localStorage.setItem("id_token", token);
      });
  };

  return (
    <div>
      <Wrapper>
        <Title>LOGIN</Title>
        <Form>
          <Container>
            <EmailInput
              onChange={handleEmail}
              type="text"
              placeholder="email"
            ></EmailInput>
            <PasswordInput
              onChange={handlePassword}
              type="password"
              placeholder="password"
            ></PasswordInput>
            <LoginButton onClick={handleLogin}>LOGIN</LoginButton>
          </Container>
        </Form>
      </Wrapper>
    </div>
  );
};

export default LoginContainer;

const Wrapper = styled.div`
  width: 500px;
  margin: 0 10px 0;
  background-color: lightcoral;
  text-align: center;
`;
const Title = styled.div`
  font-size: 30px;
`;
const Form = styled.form``;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const EmailInput = styled.input`
  margin-bottom: 10px;
  width: 280px;
  height: 50px;
`;
const PasswordInput = styled.input`
  margin-bottom: 10px;
  width: 280px;
  height: 50px;
`;
const LoginButton = styled.button`
  margin-bottom: 10px;
  width: 300px;
  height: 50px;
`;
