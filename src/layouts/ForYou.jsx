import styled from "styled-components";
import Post from "../components/Post";
import { posts } from "../components/posts";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

export default function ForYou() {
  return (
    <Container>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </Container>
  );
}
