import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 1rem;
  border-radius: 2rem;
  
`;

const Content = styled.div`
  padding-top: 1rem;
  padding: 12px 12px 12px 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.1rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #666;
  text-decoration: none;
  margin: 0 19px 10px;
  font-size: 15px;
`;

const Cop = styled.p`
color: #666;
font-size: 15px;
margin-top: -0.0rem;
`

export default function Footer() {
  return (
    <Container>
      <Content>
        <StyledLink> Hizmet Şartları</StyledLink>
        <StyledLink>Gizlilik Politikası</StyledLink>
        <StyledLink>Çerez Politikası</StyledLink>
        <StyledLink>Imprint</StyledLink>
        <StyledLink>Erişilebilirlik</StyledLink>
        <StyledLink>Reklam bilgisi</StyledLink>
        <StyledLink>Daha fazla</StyledLink>
        <Cop>© 2024 X Corp.</Cop>
      </Content>
    </Container>
  );
}
