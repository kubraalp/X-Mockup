import React from "react";
import styled from "styled-components";
import KucukLogo from "./KucukLogo";
import Menu from "./Menu";

const Container = styled.div`
  width: 275px;
  min-height: 100vh;
  padding-left: 8px;
  padding-right: 8px;
  color: white;
  
`;

const Heading1 = styled.h4`
  margin: 0;
`;

const Heading2 = styled.h5`
  margin: 0;
  color: gray;
`;

const Image = styled.img`
  border-radius: 50%;
  object-fit: cover;
  height: 50px;
  width: 50px;
  margin-right: 10px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: center;
`;

const ProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: #1da1f2;
  color: white;
  font-size: 20px;
  font-weight: bold;
  width: 15rem;
  height: 3.5rem;
  border-radius: 40px;
  
  margin-bottom: 2rem;
`;

export default function SideBar({ user }) {
  return (
    <Container>
      <KucukLogo />
      <Menu />
      <Button>Gönder</Button>
      <Profile>
        <Image
          src="https://picsum.photos/200/300"
          className="circle-img"
        ></Image>
        <ProfileDetail>
          <Heading1>{user.isim}</Heading1>
          <Heading2>@{user.user}</Heading2>
        </ProfileDetail>
      </Profile>
    </Container>
  );
}
