import React from "react";
import styled from "styled-components";
import StickyHeader from "../components/StickyHeader";
import ForYou from "./ForYou";
import TweetBox from "./TweetBox";

const Sticky = styled.div`
  position: sticky;
  top: 0;
  background-color: black;
`;
const Container = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px #2f3336 solid;
  border-top: none;
  min-height: 100vh;
`;

const Title = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 10px 20px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: #2f3336;
`;

const Heading3 = styled.h3`
  flex: 1;
  text-align: center;
  cursor: pointer;
`;

const Content = styled.div`
  height: 200vh;
  padding: 20px;
  box-sizing: border-box;
`;

export default function Main({ user }) {
  return (
    <Container>
      <Sticky>
        <StickyHeader title="Anasayfa"></StickyHeader>
        <Title>
          <Heading3>Sana Özel</Heading3>
          <Heading3> Takip Edilenler</Heading3>
        </Title>
      </Sticky>
      <TweetBox user={user}></TweetBox>
      <Content>
        <ForYou user={user}></ForYou>
      </Content>
    </Container>
  );
}
