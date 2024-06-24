import React from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";

const Container = styled.div`
  background-color: #000;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr; /* İki sütun oluşturuyor */
  height: 100vh;
`;

const Logo = styled.img`
  margin-top: 10rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 80%; /* Mobil cihazlar için */
  display: block;
`;
const Content = styled.div`
  text-align: left;
  padding: 0 20px; /* Kenar boşlukları */
`;

const Heading1 = styled.h1`
  font-size: 70px;
  margin-bottom: 60px;
`;

const Heading2 = styled.h2`
  font-size: 35px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  gap: 10px;
  margin-bottom: 20px;
`;

const Paragraph1 = styled.p`
  text-align: center;
  font-size: 20px;
  margin-bottom: 1px;
  margin-top: 1px;
`;

const Paragraph2 = styled.p`
  text-align: left;
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 100px;
`;

const Button = styled.button`
  width: 270px;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 20px;

  &.google {
    background-color: white;
    color: black;
  }

  &.apple {
    background-color: white;
    color: black;
    border: 1px solid #fff;
  }

  &.create-account {
    background-color: #1da1f2;
    color: #fff;
  }

  &.sign-in {
    background-color: black;
    border: solid 1px white;
    color: #1da1f2;
    cursor: pointer;
  }
`;

export default function Welcome() {
  return (
    <Container>
      <Logo src={logo} />
      <Content>
        <Heading1>Happening now</Heading1>
        <Heading2>Join today.</Heading2>
        <ButtonContainer>
          <Button className="google">Sign up with Google</Button>
          <Button className="apple">Sign up with Apple</Button>
          <Paragraph1>or</Paragraph1>
          <Button className="create-account">Create account</Button>

          <Paragraph2>Already have an account?</Paragraph2>
          <Button className="sign-in">Sign in</Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
}
