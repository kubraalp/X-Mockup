import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom/";

const Image = styled.div`
  width: 30px;
  height: 30px;
  fill: white;
`;
const Linkk = styled.a`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
`;

export default function KucukLogo() {
  return (
    <Linkk>
      <Link to="/home">
        <Image>
          <svg viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </Image>
      </Link>
    </Linkk>
  );
}
