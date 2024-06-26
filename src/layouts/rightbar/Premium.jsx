import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 1rem;
  border-radius: 2rem;
  border: 1px #2f3336 solid;
`;

const Content = styled.div`
  padding-top: 1rem;
  padding: 1px 12px 12px 12px;
 
`;

const Heading2 = styled.h2`
  font-weight: bold;
  
`;

const Paragraph = styled.p`
  line-height: 1.25rem;
  
`;

const Button = styled.button`
  background-color: #1d9bf0;
  color: white;
  font-size: 20px;
  font-weight: bold;
  width: 8rem;
  height: 3rem;
  border-radius: 40px;
  cursor: pointer;
`;

export default function Premium() {
  return (
    <Container>
      <Content>
        <Heading2>Premium'a Abone Ol</Heading2>
        <Paragraph>
          Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam
          geliri payı kazan.
        </Paragraph>
        <Button>Abone ol</Button>
      </Content>
    </Container>
  );
}
