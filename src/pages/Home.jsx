import Main from "../layouts/Main";
import styled from "styled-components";
import SideBar from "../layouts/SideBar";
import RightBar from "../layouts/rightbar/RightBar";

const Container = styled.div`
  width: 100%;
  max-width: 1265px;
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  position: relative;

  @media (max-width: 1200px) {
    max-width: 1000px;
  }

  @media (max-width: 988px) {
    max-width: 688px;
  }

  @media (max-width: 688px) {
    max-width: 100%;
    padding: 0;
  }
`;

const SideBarWrapper = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;

  @media (max-width: 988px) {
    width: 88px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const MainWrapper = styled.div`
  flex: 1;
  border-left: 1px solid #2f3336;
  border-right: 1px solid #2f3336;

  @media (max-width: 688px) {
    max-width: 100%;
    border: none;
  }
`;

const RightBarWrapper = styled.div`
  width: 350px;

  @media (max-width: 1200px) {
    width: 290px;
  }

  @media (max-width: 988px) {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: black;
  border-top: 1px solid #2f3336;
  z-index: 1000;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 500px) {
    display: flex;
  }
`;

const MobileNavItem = styled.div`
  color: #e7e9ea;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 20%;
  height: 100%;
`;

export default function Home({ user }) {
  return (
    <>
      <Container>
        <SideBarWrapper>
          <SideBar user={user} />
        </SideBarWrapper>
        <MainWrapper>
          <Main user={user} />
        </MainWrapper>
        <RightBarWrapper>
          <RightBar />
        </RightBarWrapper>
      </Container>

      <MobileNav>
        <MobileNavItem>
          <svg viewBox="0 0 24 24" width="26" height="26">
            <path
              fill="currentColor"
              d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"
            />
          </svg>
        </MobileNavItem>
        <MobileNavItem>
          <svg viewBox="0 0 24 24" width="26" height="26">
            <path
              fill="currentColor"
              d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
            />
          </svg>
        </MobileNavItem>
        <MobileNavItem>
          <svg viewBox="0 0 24 24" width="26" height="26">
            <path
              fill="currentColor"
              d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"
            />
          </svg>
        </MobileNavItem>
        <MobileNavItem>
          <svg viewBox="0 0 24 24" width="26" height="26">
            <path
              fill="currentColor"
              d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"
            />
          </svg>
        </MobileNavItem>
      </MobileNav>
    </>
  );
}
