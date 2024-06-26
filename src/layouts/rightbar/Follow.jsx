import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin-bottom: 1rem;
  border-radius: 2rem;
  border: 1px #2f3336 solid;
`;

const Content = styled.div`
  padding-top: 1rem;
  padding: 12px 12px 12px 12px;
`;
const Heading2 = styled.h2`
  font-weight: bold;
`;

const StyedLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 17px;
  color: #1d9bf0;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding-top: 0.75rem; /* 12px */
  padding-bottom: 0.75rem; /* 12px */
  padding-right: 1rem; /* 16px */
  display: flex;
  gap: 0.75rem; /* 12px */
  border: none;
  background-color: black;
  justify-content: space-between;
  width: 320px;
`;

const Image = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  object-fit: cover;
`;

const Content2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FullName = styled.div`
  color: #e7e9ea;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
`;

const Name = styled.div`
  color: #71767b;
  font-size: 15px;
`;

const Button2 = styled.button`
  background-color: #ffffff;
  color: black;
  font-size: 15px;
  font-weight: bold;
  width: 6rem;
  height: 2.5rem;
  border-radius: 40px;
`;

export const whoFolllow = [
  {
    id: 3,
    username: "mutlakagidilmeli",
    fullName: "Mutlaka Gidilmeli",
    avatar:
      "https://pbs.twimg.com/profile_images/1664287603326345218/v7cmrLsF_bigger.jpg",
  },

  {
    id: 4,
    username: "belgeseIdunyasi",
    fullName: "Belgesel Dünyası",
    avatar:
      "https://pbs.twimg.com/profile_images/1513989346810028040/Yao0W5j4_bigger.jpg",
  },

  {
    id: 5,
    username: "ReactDersleri",
    fullName: "React Dersleri",
    avatar:
      "https://pbs.twimg.com/profile_images/1226759973863997440/-2bAL4yc_bigger.jpg",
  },
];

export default function Follow() {
  return (
    <Container>
      <Content>
        <Heading2>Kimi takip etmeli</Heading2>
        {whoFolllow.map((user, index) => (
          <Button>
            <Image src={user.avatar} />
            <Content2>
              <FullName>{user.fullName}</FullName>
              <Name>{user.username}</Name>
            </Content2>

            <Button2>Takip et</Button2>
          </Button>
        ))}
        <StyedLink>Daha fazla göster</StyedLink>
      </Content>
    </Container>
  );
}
