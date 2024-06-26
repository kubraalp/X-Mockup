import Main from "../layouts/Main";
import styled from "styled-components";
import SideBar from "../layouts/SideBar";
import RightBar from "../layouts/rightbar/RightBar";

const Container = styled.div`
  width: 1265px;
  margin: auto;
  display: flex;
  border: 1px black solid;
`;

export default function Home({ user }) {
  return (
    <Container>
      <SideBar user={user} />
      <Main />
      <RightBar />
    </Container>
  );
}
