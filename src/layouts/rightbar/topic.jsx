import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 0.75rem; /* 12px */
  padding-bottom: 0.75rem; /* 12px */
  padding-right: 1rem;
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: white;
  position: relative;
`;

const Title = styled.div`
  color: #71767b;
  font-size: 13px;
`;

const Subject = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 0.125rem;
`;

const Post = styled.div`
  font-size: 13px;
  line-height: 1rem;
  color: #71767b;
  margin-top: 0.25rem;
`;
const Button = styled.button`
  display: flex;
  width: 34px;
  height: 34px;
  position: absolute;
  align-items: center;
  right: 0;
  justify-content: center;
  top: 0;
  border-radius: 9999px;
`;

export default function Topic({ item }) {
  return (
    <Container>
      <StyledNavLink to="/">
        <Title>{item.title}</Title>
        <Subject>{item.topic.value}</Subject>
        <Post>{item.postCount} posts</Post>
        <Button>
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            ></path>
          </svg>
        </Button>
      </StyledNavLink>
    </Container>
  );
}
