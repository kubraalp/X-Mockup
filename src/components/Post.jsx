import styled from "styled-components";
import { useState } from "react";

const Container = styled.article`
  border-bottom: 1px solid #2f3336;
  padding: 12px 16px;
  display: flex;
  gap: 12px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }

  @media (max-width: 768px) {
    padding: 10px;
    gap: 8px;
  }
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
  width: 100%;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  max-width: calc(100% - 34px);
`;

const FullName = styled.span`
  font-weight: 700;
  color: #e7e9ea;
  font-size: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 120px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    max-width: 100px;
  }
`;

const UserName = styled.span`
  color: #71767b;
  font-size: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 120px;

  @media (max-width: 480px) {
    font-size: 14px;
    max-width: 100px;
  }
`;

const Dot = styled.span`
  color: #71767b;
  font-size: 15px;
  margin: 0 4px;
  flex-shrink: 0;
`;

const TimeStamp = styled.span`
  color: #71767b;
  font-size: 15px;
  flex-shrink: 0;
`;

const MoreButton = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #71767b;
  margin-left: auto;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  flex-shrink: 0;

  &:hover {
    background-color: rgba(29, 155, 240, 0.1);
    color: #1d9bf0;
  }
`;

const TweetContent = styled.div`
  margin-top: 4px;
  color: #e7e9ea;
  font-size: 15px;
  line-height: 1.3125;
  overflow-wrap: break-word;
  word-break: break-word;

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

const ActionsContainer = styled.div`
  margin-top: 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    justify-content: space-around;
  }
`;

const ActionButton = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${(props) => (props.$isActive ? props.$activeColor : "#71767b")};
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.$hoverColor || "inherit"};
  }

  svg {
    width: 18px;
    height: 18px;
    padding: 8px;
    border-radius: 50%;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${(props) => props.$hoverBg || "transparent"};
    }
  }

  @media (max-width: 480px) {
    svg {
      padding: 6px;
    }
  }

  @media (max-width: 400px) {
    svg {
      padding: 5px;
    }
  }
`;

const ActionCount = styled.span`
  color: inherit;
  font-size: 13px;

  @media (max-width: 380px) {
    font-size: 12px;
  }
`;

const VerifiedBadge = styled.span`
  color: #1d9bf0;
  margin-left: 2px;
  display: inline-flex;
  flex-shrink: 0;
`;

const formatTimeAgo = (dateString) => {
  const now = new Date();
  const date = new Date(dateString || now);
  const diffInSeconds = Math.floor((now - date) / 1000);

  if (diffInSeconds < 60) return `${diffInSeconds}s`;
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h`;

  // Format to "MMM D" (e.g., "May 21")
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
};

export default function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);
  const [likeCount, setLikeCount] = useState(post.status.like);
  const [retweetCount, setRetweetCount] = useState(post.status.repost);

  const handleLike = (e) => {
    e.stopPropagation();
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const handleRetweet = (e) => {
    e.stopPropagation();
    if (retweeted) {
      setRetweetCount(retweetCount - 1);
    } else {
      setRetweetCount(retweetCount + 1);
    }
    setRetweeted(!retweeted);
  };

  return (
    <Container>
      <Avatar src={post.account.avatar} alt={post.account.fullName} />
      <Content>
        <Header>
          <UserInfo>
            <FullName>{post.account.fullName}</FullName>
            {post.account.verified && (
              <VerifiedBadge>
                <svg
                  viewBox="0 0 24 24"
                  aria-label="Verified account"
                  width="18"
                  height="18"
                >
                  <path
                    fill="currentColor"
                    d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"
                  />
                </svg>
              </VerifiedBadge>
            )}
            <UserName>@{post.account.username}</UserName>
            <Dot>·</Dot>
            <TimeStamp>{formatTimeAgo(post.createdAt)}</TimeStamp>
          </UserInfo>
          <MoreButton>
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                fill="currentColor"
                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
              />
            </svg>
          </MoreButton>
        </Header>

        <TweetContent>{post.content}</TweetContent>

        <ActionsContainer>
          <ActionButton
            $hoverColor="#1d9bf0"
            $hoverBg="rgba(29, 155, 240, 0.1)"
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
              />
            </svg>
            <ActionCount>{post.status.comments}</ActionCount>
          </ActionButton>

          <ActionButton
            $hoverColor="#00ba7c"
            $hoverBg="rgba(0, 186, 124, 0.1)"
            $isActive={retweeted}
            $activeColor="#00ba7c"
            onClick={handleRetweet}
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d={
                  retweeted
                    ? "M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
                    : "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
                }
              />
            </svg>
            <ActionCount>{retweetCount}</ActionCount>
          </ActionButton>

          <ActionButton
            $hoverColor="#f91880"
            $hoverBg="rgba(249, 24, 128, 0.1)"
            $isActive={liked}
            $activeColor="#f91880"
            onClick={handleLike}
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d={
                  liked
                    ? "M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                    : "M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                }
              />
            </svg>
            <ActionCount>{likeCount}</ActionCount>
          </ActionButton>

          <ActionButton
            $hoverColor="#1d9bf0"
            $hoverBg="rgba(29, 155, 240, 0.1)"
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
              />
            </svg>
            <ActionCount>{post.status.view}</ActionCount>
          </ActionButton>

          <ActionButton
            $hoverColor="#1d9bf0"
            $hoverBg="rgba(29, 155, 240, 0.1)"
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
              />
            </svg>
          </ActionButton>
        </ActionsContainer>
      </Content>
    </Container>
  );
}
