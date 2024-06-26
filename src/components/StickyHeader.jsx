import styled from "styled-components";

const Header = styled.div`
  position: sticky;
  top: 0;
 
`;

const Heading3 = styled.h3`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: -0.1rem;
  margin-bottom: -0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

export default function StickyHeader({ title }) {
  return (
    <Header>
      <Heading3>{title}</Heading3>
    </Header>
  );
}
