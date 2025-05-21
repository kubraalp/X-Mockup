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

  @media (max-width: 988px) {
    width: 88px;
    padding-left: 4px;
    padding-right: 4px;
  }
`;

const Heading1 = styled.h4`
  margin: 0;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 988px) {
    font-size: 0;
  }
`;

const Heading2 = styled.h5`
  margin: 0;
  color: #71767b;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 988px) {
    font-size: 0;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  object-fit: cover;
  height: 50px;
  width: 50px;
  margin-right: 10px;

  @media (max-width: 988px) {
    margin-right: 0;
    height: 40px;
    width: 40px;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  cursor: pointer;
  border-radius: 50px;
  transition: background-color 0.2s;
  padding: 10px;

  &:hover {
    background-color: rgba(231, 233, 234, 0.1);
  }
`;

const ProfileDetail = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 988px) {
    display: none;
  }
`;

const TweetButton = styled.button`
  background-color: #1d9bf0;
  color: white;
  font-size: 17px;
  font-weight: bold;
  width: 90%;
  height: 52px;
  border-radius: 50px;
  border: none;
  margin: 16px 0;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1a8cd8;
  }

  @media (max-width: 988px) {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 0;
    margin: 16px auto;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      content: "+";
      font-size: 24px;
    }
  }
`;

export default function SideBar({ user }) {
  return (
    <Container>
      <KucukLogo />
      <Menu />
      <TweetButton>Tweet</TweetButton>
      <Profile>
        <Avatar src="https://picsum.photos/200/300" alt="Profile" />
        <ProfileDetail>
          <Heading1>{user?.isim || "User"}</Heading1>
          <Heading2>@{user?.user || "username"}</Heading2>
        </ProfileDetail>
      </Profile>
    </Container>
  );
}
