import React from "react";
import styled from "styled-components";
import Search from "./Search";
import Premium from "./Premium";
import Agenda from "./Agenda";
import Follow from "./Follow";
import Footer from "./Footer";

const Container = styled.div`
  width: 450px;
  min-height: 100vh;
`;

export default function RightBar() {
  return (
    <Container>
      <Search />
      <Premium />
      <Agenda />
      <Follow/>
      <Footer/>
    </Container>
  );
}
