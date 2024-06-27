import styled from "styled-components";

const Container = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  border-bottom: 1px solid;
  border-color: #2f3336;
  display: flex;
  padding-top: 0.75rem; /* 12px */
  padding-bottom: 0.75rem;
  gap: 0.75rem;
`;

const Image = styled.img`
  width: 2.5rem; /* 40px */
  height: 2.5rem; /* 40px */
  border-radius: 50%;
  object-fit: cover;
`;

const FullName = styled.div`
  line-height: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.125rem;
`;
const AccountInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const Account = styled.div`
  line-height: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.125rem;
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;

const Content = styled.div`
  margin-top: 0.5rem;
`;

const Icons = styled.div`
  display: flex;
  margin-left: 0.375rem;
  margin-top: 0.375rem;
`;

const IconInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1px;
`;

const Emoji = styled.div`
  width: 2.172rem;
  height: 2.172rem;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
const EmojiEnd = styled.div`
  margin-left: 4rem;
  width: 2.172rem;
  height: 2.172rem;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const Number = styled.div`
  font-size: 0.813rem;
  transition: color 0.3s;
`;
export default function Post({ post }) {
  return (
    <Container>
      <Image src={post.account.avatar} />
      <AccountInfo>
        <Account>
          <FullName>{post.account.fullName}</FullName>
          <UserName>{post.account.username}</UserName>
        </Account>
        <Content>{post.content}</Content>
      
					
        <Icons>
          <IconInfo>
            <Emoji>
              <svg viewBox="0 0 24 24" height={15}>
                <path
                  fill="currentColor"
                  d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
                />
              </svg>
            </Emoji>
            <Number> {post.status.comments}</Number>
          </IconInfo>
          <IconInfo>
            <Emoji>
              <svg viewBox="0 0 24 24" height={15}>
                <path
                  fill="currentColor"
                  d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
                />
              </svg>
            </Emoji>
            <Number> {post.status.repost}</Number>
          </IconInfo>
          <IconInfo>
            <Emoji>
              <svg viewBox="0 0 24 24" height={15}>
                <path
                  fill="currentColor"
                  d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                />
              </svg>
            </Emoji>
            <Number> {post.status.like}</Number>
          </IconInfo>
          <IconInfo>
            <Emoji>
              <svg viewBox="0 0 24 24" height={15}>
                <path
                  fill="currentColor"
                  d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
                />
              </svg>
            </Emoji>
            <Number> {post.status.view}</Number>
          </IconInfo>

          <IconInfo>
            <EmojiEnd>
              <svg viewBox="0 0 24 24" height={15}>
                <path
                  fill="currentColor"
                  d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
                />
              </svg>
            </EmojiEnd>
          </IconInfo>
        </Icons>
      </AccountInfo>
    </Container>
  );
}
