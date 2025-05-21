import React, { useState, useRef } from "react";
import styled from "styled-components";
import Post from "../components/Post";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: none;
  border-bottom: 1px solid #2f3336;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const ComposerContainer = styled.div`
  display: flex;
  padding: 12px 16px;
  border-bottom: 1px solid #2f3336;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  object-fit: cover;
  height: 48px;
  width: 48px;
  margin-right: 12px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    height: 40px;
    width: 40px;
    margin-right: 8px;
  }
`;

const ComposerContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: calc(100% - 60px);

  @media (max-width: 480px) {
    width: calc(100% - 48px);
  }
`;

const TextareaWrapper = styled.div`
  margin-bottom: 12px;
  min-height: 80px;
  width: 100%;
`;

const Textarea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  color: #e7e9ea;
  font-size: 20px;
  resize: none;
  font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  padding: 12px 0;
  min-height: 80px;
  box-sizing: border-box;

  &::placeholder {
    color: #71767b;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 8px 0;
  }
`;

const AudienceSelector = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 12px;
  color: #1d9bf0;
  border: 1px solid #536471;
  border-radius: 16px;
  padding: 0 12px;
  height: 32px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: rgba(29, 155, 240, 0.1);
  }

  @media (max-width: 480px) {
    height: 28px;
    padding: 0 10px;
    font-size: 13px;
  }
`;

const BottomControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 1px solid #2f3336;
  padding-top: 12px;

  @media (max-width: 480px) {
    padding-top: 8px;
  }
`;

const MediaOptions = styled.div`
  display: flex;
  gap: 4px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 400px) {
    gap: 2px;
  }
`;

const IconButton = styled.button`
  background: transparent;
  border: none;
  color: #1d9bf0;
  cursor: pointer;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  flex-shrink: 0;

  &:hover {
    background-color: rgba(29, 155, 240, 0.1);
  }

  &:disabled {
    color: #536471;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 380px) {
    width: 30px;
    height: 30px;
  }
`;

const CharacterCount = styled.div`
  color: ${(props) =>
    props.$isNearLimit
      ? "#fc9819"
      : props.$isOverLimit
      ? "#f4212e"
      : "#71767b"};
  margin-right: 12px;
  font-size: 14px;
  display: ${(props) => (props.$show ? "block" : "none")};

  @media (max-width: 480px) {
    margin-right: 8px;
    font-size: 13px;
  }
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.$disabled ? "rgba(29, 155, 240, 0.5)" : "#1d9bf0"};
  color: white;
  font-weight: 700;
  padding: 0 16px;
  border-radius: 24px;
  height: 36px;
  border: none;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s;
  font-size: 15px;

  &:hover {
    background-color: ${(props) =>
      props.$disabled ? "rgba(29, 155, 240, 0.5)" : "#1a8cd8"};
  }

  @media (max-width: 480px) {
    padding: 0 12px;
    height: 34px;
    font-size: 14px;
  }
`;

const FeedSeparator = styled.div`
  height: 12px;
  background-color: #212327;
  border-top: 1px solid #2f3336;
  border-bottom: 1px solid #2f3336;
  width: 100%;
`;

const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
`;

const TweetList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TweetBox = ({ user }) => {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);
  const textareaRef = useRef(null);
  const MAX_CHARS = 280;

  const handleTweetChange = (e) => {
    setTweet(e.target.value);
  };

  const handleTweetSubmit = () => {
    if (tweet.trim() && tweet.length <= MAX_CHARS) {
      const newTweet = {
        id: Date.now().toString(),
        account: {
          avatar: "https://picsum.photos/200/300",
          fullName: user?.isim || "User",
          username: user?.user || "username",
        },
        content: tweet,
        createdAt: new Date().toISOString(),
        status: {
          comments: 0,
          repost: 0,
          like: 0,
          view: Math.floor(Math.random() * 1000),
        },
      };

      setTweets([newTweet, ...tweets]);
      setTweet("");

      // Focus back on textarea after posting
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }
  };

  const remainingChars = MAX_CHARS - tweet.length;
  const isNearLimit = remainingChars <= 20 && remainingChars > 0;
  const isOverLimit = remainingChars < 0;

  return (
    <>
      <Container>
        <ComposerContainer>
          <Avatar src="https://picsum.photos/200/300" alt="Profile" />
          <ComposerContent>
            <AudienceSelector>
              <span>Everyone</span>
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                style={{ marginLeft: 4 }}
              >
                <path
                  fill="currentColor"
                  d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
                ></path>
              </svg>
            </AudienceSelector>

            <TextareaWrapper>
              <Textarea
                ref={textareaRef}
                onChange={handleTweetChange}
                value={tweet}
                placeholder="What's happening?"
                maxLength={MAX_CHARS * 2} // Allow typing over limit but prevent posting
              />
            </TextareaWrapper>

            <BottomControls>
              <MediaOptions>
                <IconButton title="Media">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path
                      fill="currentColor"
                      d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"
                    ></path>
                  </svg>
                </IconButton>
                <IconButton title="GIF">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path
                      fill="currentColor"
                      d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"
                    ></path>
                  </svg>
                </IconButton>
                <IconButton title="Poll">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path
                      fill="currentColor"
                      d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"
                    ></path>
                  </svg>
                </IconButton>
                <IconButton title="Emoji">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path
                      fill="currentColor"
                      d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"
                    ></path>
                  </svg>
                </IconButton>
                <IconButton title="Schedule">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path
                      fill="currentColor"
                      d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"
                    ></path>
                  </svg>
                </IconButton>
                <IconButton title="Location" disabled>
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path
                      fill="currentColor"
                      d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"
                    ></path>
                  </svg>
                </IconButton>
              </MediaOptions>

              <ButtonsGroup>
                {tweet.length > 0 && (
                  <CharacterCount
                    $show={true}
                    $isNearLimit={isNearLimit}
                    $isOverLimit={isOverLimit}
                  >
                    {remainingChars}
                  </CharacterCount>
                )}
                <Button
                  onClick={handleTweetSubmit}
                  $disabled={!tweet.trim() || isOverLimit}
                >
                  Post
                </Button>
              </ButtonsGroup>
            </BottomControls>
          </ComposerContent>
        </ComposerContainer>
      </Container>

      {tweets.length > 0 && <FeedSeparator />}

      <TweetList>
        {tweets.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </TweetList>
    </>
  );
};

export default TweetBox;
