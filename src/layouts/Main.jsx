import React, { useState } from "react";
import styled from "styled-components";
import StickyHeader from "../components/StickyHeader";
import ForYou from "./ForYou";
import TweetBox from "./TweetBox";

const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;

  @media (max-width: 688px) {
    border: none;
  }
`;

const Sticky = styled.header`
  position: sticky;
  top: 0;
  background-color: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(12px);
  z-index: 10;
  border-bottom: 1px solid #2f3336;
  width: 100%;
`;

const TabsContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #2f3336;
`;

const TabButton = styled.button`
  flex: 1;
  background: transparent;
  color: ${(props) => (props.$isActive ? "#e7e9ea" : "#71767b")};
  border: none;
  padding: 16px 0;
  font-weight: ${(props) => (props.$isActive ? "700" : "600")};
  font-size: 15px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;

  &:hover {
    background-color: rgba(239, 243, 244, 0.1);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${(props) => (props.$isActive ? "56px" : "0")};
    height: 4px;
    background-color: ${(props) =>
      props.$isActive ? "#1d9bf0" : "transparent"};
    border-radius: 4px;
    transition: width 0.2s;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 12px 0;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  width: 100%;

  @media (max-width: 500px) {
    margin-bottom: 50px; /* Space for mobile navigation */
  }
`;

const ScrollTopButton = styled.button`
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #1d9bf0;
  color: white;
  border: none;
  opacity: ${(props) => (props.$isVisible ? "1" : "0")};
  pointer-events: ${(props) => (props.$isVisible ? "all" : "none")};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: opacity 0.2s;
  display: flex;

  &:hover {
    background-color: #1a8cd8;
  }

  @media (max-width: 500px) {
    bottom: 60px;
    right: 16px;
    width: 40px;
    height: 40px;
  }
`;

export default function Main({ user }) {
  const [activeTab, setActiveTab] = useState("forYou");
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Handle scroll event to show/hide scroll to top button
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Sticky>
        <StickyHeader title="Home" />
        <TabsContainer>
          <TabButton
            $isActive={activeTab === "forYou"}
            onClick={() => setActiveTab("forYou")}
          >
            For you
          </TabButton>
          <TabButton
            $isActive={activeTab === "following"}
            onClick={() => setActiveTab("following")}
          >
            Following
          </TabButton>
        </TabsContainer>
      </Sticky>

      <TweetBox user={user} />

      <Content>
        {activeTab === "forYou" && <ForYou user={user} />}
        {activeTab === "following" && (
          <div
            style={{
              padding: "30px 20px",
              textAlign: "center",
              color: "#71767b",
            }}
          >
            Follow some accounts to see their Tweets here.
          </div>
        )}
      </Content>

      <ScrollTopButton
        $isVisible={showScrollButton}
        onClick={handleScrollToTop}
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path
            fill="currentColor"
            d="M12 4.75l-1.83 1.83 5.93 5.92H4.75v2.5h11.35l-5.93 5.92L12 22.75l8.75-8.75L12 4.75z"
            transform="rotate(-90 12 12)"
          />
        </svg>
      </ScrollTopButton>
    </Container>
  );
}
