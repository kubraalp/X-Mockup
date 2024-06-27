import React, { useState } from "react";
import styled from "styled-components";
import Post from "../components/Post";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px #2f3336 solid;
`;

const Image = styled.img`
  border-radius: 50%;
  object-fit: cover;
  height: 50px;
  width: 50px;
  margin-right: 10px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Text = styled.div`
  border-radius: 10px;
  padding: 10px;
  color: #fff;
  flex-grow: 1;
`;

const Textarea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  resize: none;
`;

const Button = styled.button`
  background-color: #1da1f2;
  border: none;
  border-radius: 30px;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  align-self: flex-end;
`;

const TweetBox = ({ user }) => {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);

  const handleTweetChange = (e) => {
    setTweet(e.target.value);
  };

  const handleTweetSubmit = () => {
    if (tweet.trim()) {
      const newTweet = {
        id: Date.now().toString(),
        account: {
          avatar: "https://picsum.photos/200/300",
          fullName: user.isim,
          username: user.user,
        },
        content: tweet,
        status: {
          comments: 0,
          repost: 0,
          like: 0,
          view: 0,
        },
      };

      console.log("Tweet gönderildi:", tweet);
      setTweets([...tweets, newTweet]);
      setTweet("");
    }
  };

  return (
    <Container>
      <Profile>
        <Image src="https://picsum.photos/200/300" className="circle-img" />

        <Text>
          <Textarea
            onChange={handleTweetChange}
            value={tweet}
            placeholder="Neler oluyor?"
          />
        </Text>
      </Profile>
      <Button onClick={handleTweetSubmit}>Gönder</Button>
      {tweets.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Container>
  );
};

export default TweetBox;
