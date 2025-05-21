import logo from "../assets/logo.png";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  background-color: #000;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr; /* İki sütun oluşturuyor */
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Logo = styled.img`
  max-height: 380px;
  margin-top: 10rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 80%; /* Mobil cihazlar için */
  display: block;

  @media (max-width: 768px) {
    margin-top: 3rem;
    max-height: 200px;
  }
`;

const Content = styled.div`
  margin-top: 2rem;
  margin-left: 6rem;
  text-align: left;
  padding: 10px 20px; /* Kenar boşlukları */

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 20px;
    text-align: center;
  }
`;

const Heading1 = styled.h1`
  color: #e7e9ea;
  font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  font-size: 76px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 40px;
    margin-bottom: 30px;
  }
`;

const Heading2 = styled.h2`
  font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  color: #e7e9ea;
  font-size: 35px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const Paragraph1 = styled.p`
  text-align: center;
  font-size: 20px;
  margin-bottom: 1px;
  margin-top: 1px;
  margin-left: 5rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Paragraph2 = styled.p`
  text-align: left;
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 100px;

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 40px;
  }
`;

const Button = styled.button`
  width: 120%;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 50px;

  @media (max-width: 768px) {
    width: 100%;
  }

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
    font-weight: 700;

    &:hover {
      background-color: #1a8cd8;
    }
  }

  &.sign-in {
    background-color: black;
    border: solid 1px white;
    color: #1da1f2;
    cursor: pointer;

    &:hover {
      background-color: rgba(29, 155, 240, 0.1);
    }
  }
`;

const Footer = styled.footer`
  font-size: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -26px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
    margin-top: 20px;
  }
`;

const FooterLink = styled.a`
  color: #666;
  text-decoration: none;
  margin: 0 15px;
  margin: 0 10px 10px;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    margin: 0 8px 8px;
  }

  @media (max-width: 480px) {
    margin: 0 5px 5px;
  }
`;

export default function Welcome() {
  const history = useHistory();

  const handleSignIn = () => {
    history.push("/signup");
  };

  return (
    <>
      <Container>
        <Logo src={logo} />
        <Content>
          <Heading1>Happening now</Heading1>
          <Heading2>Join today.</Heading2>
          <ButtonContainer>
            <Button className="google" onClick={handleSignIn}>
              Sign in with Google
            </Button>
            <Button className="apple" onClick={handleSignIn}>
              Sign in with Apple
            </Button>
            <Paragraph1>or</Paragraph1>
            <Button className="create-account" onClick={handleSignIn}>
              Sign in
            </Button>

            <Paragraph2>New to X?</Paragraph2>
            <Button className="sign-in" onClick={handleSignIn}>
              Create account
            </Button>
          </ButtonContainer>
        </Content>
      </Container>
      <Footer>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Download the X app</FooterLink>
        <FooterLink href="#">Help Center</FooterLink>
        <FooterLink href="#">Terms of Service</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Cookie Policy</FooterLink>
        <FooterLink href="#">Imprint</FooterLink>
        <FooterLink href="#">Accessibility</FooterLink>
        <FooterLink href="#">Ads info</FooterLink>
        <FooterLink href="#">Blog</FooterLink>
        <FooterLink href="#">Careers</FooterLink>
        <FooterLink href="#">Brand Resources</FooterLink>
        <FooterLink href="#">Advertising</FooterLink>
        <FooterLink href="#">Marketing</FooterLink>
        <FooterLink href="#">X for Business</FooterLink>
        <FooterLink href="#">Developers</FooterLink>
        <FooterLink href="#">Directory</FooterLink>
        <FooterLink href="#">Settings</FooterLink>
        <FooterLink href="#">© 2024 X Corp.</FooterLink>
      </Footer>
    </>
  );
}
