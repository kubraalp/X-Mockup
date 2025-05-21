import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
  padding: 0.75rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 1.25rem;
  display: inline-flex;
`;

const Container = styled.div`
  margin-top: 0.125rem;
  margin-bottom: 0.25rem;

  z-index: 1;
  background-color: black;
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  text-decoration: none;
  color: white;
`;

const Text = styled.div`
  padding-right: 1rem;
  font-size: 1.25rem;
`;

export default function Menu() {
  return (
    <Container>
      <StyledNavLink to="/home">
        <Content>
          <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
            <path
              fill="#fff"
              d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"
            ></path>
          </svg>
          <Text>Anasayfa</Text>
        </Content>
      </StyledNavLink>
      <StyledNavLink to="/home">
        <Content>
          <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
            <path
              fill="#fff"
              d="M10.25 4.25c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.971 0-9-4.029-9-9z"
            ></path>
          </svg>
          <Text>Keşfet</Text>
        </Content>
      </StyledNavLink>
      <StyledNavLink to="/home">
        <Content>
          <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
            <path
              fill="#fff"
              d="M11.996 2c-4.062 0-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958C19.48 5.017 16.054 2 11.996 2zM9.171 18h5.658c-.412 1.165-1.523 2-2.829 2s-2.417-.835-2.829-2z"
            ></path>
          </svg>
          <Text>Bildirimler</Text>
        </Content>
      </StyledNavLink>
      <StyledNavLink to="/home">
        <Content>
          <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
            <path
              fill="#fff"
              d="M1.998 4.499c0-.828.671-1.499 1.5-1.499h17c.828 0 1.5.671 1.5 1.499v2.858l-10 4.545-10-4.547V4.499zm0 5.053V19.5c0 .828.671 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5V9.554l-10 4.545-10-4.547z"
            ></path>
          </svg>
          <Text>Mesajlar</Text>
        </Content>
      </StyledNavLink>
      <StyledNavLink to="/home">
        <Content>
          <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
            <path
              fill="#fff"
              d="M6 2h12c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4zm.643 15.8l8.109-11.58h2.515L9.158 17.8H6.643z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <Text>Grok</Text>
        </Content>
      </StyledNavLink>
      <StyledNavLink to="/home">
        <Content>
          <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
            <path
              fill="#fff"
              d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"
            ></path>
          </svg>
          <Text>Topluluklar</Text>
        </Content>
      </StyledNavLink>
      <StyledNavLink to="/home">
        <Content>
          <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
            <path
              fill="#fff"
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            ></path>
          </svg>
          <Text>Premium</Text>
        </Content>
      </StyledNavLink>
      <StyledNavLink to="/home">
        <Content>
          <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
            <path
              fill="#fff"
              d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"
            ></path>
          </svg>
          <Text>Profil</Text>
        </Content>
      </StyledNavLink>
      <StyledNavLink to="/home">
        <Content>
          <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
            <path
              fill="#fff"
              d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
            ></path>
          </svg>
          <Text>Daha Fazla</Text>
        </Content>
      </StyledNavLink>
    </Container>
  );
}
