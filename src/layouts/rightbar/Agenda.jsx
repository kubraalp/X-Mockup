import styled from "styled-components";
import Topic from "./topic";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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

const Subject = styled.div`
  display: grid;
`;

const StyedLink = styled(Link)`
  display: flex;
  
  text-decoration: none;
  font-size: 17px;
  color: #1d9bf0;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const topics = [
  {
    title: "Türkiye tarihinde gündemde",
    topic: {
      type: "tag",
      value: "enginpolat",
    },
    postCount: 9.859,
  },
  {
    title: "Gündemdekiler",
    topic: {
      type: "tag",
      value: "Ayşe",
    },
    postCount: 5.859,
  },

  {
    title: "Gündemdekiler",
    topic: {
      type: "",
      value: "asgariücret",
    },
    postCount: 1.254,
  },

  {
    title: "Türkiye Tarihinde gündemde",
    topic: {
      type: "",
      value: "#deprem",
    },
    postCount: 18.547,
  },

  {
    title: "Gündemdekiler",
    topic: {
      type: "",
      value: "Sigara",
    },
    postCount: 6.284,
  },

  {
    title: "Türkiye Tarihinde gündemde",
    topic: {
      type: "",
      value: "#öğretmen",
    },
    postCount: 1.514,
  },

  {
    title: "Haberler",
    topic: {
      type: "",
      value: "#SONDAKİKA",
    },
    postCount: 1.514,
  },

  {
    title: "Türkiye Tarihinde gündemde",
    topic: {
      type: "",
      value: "Dünya Savaşı",
    },
    postCount: 1.514,
  },

  {
    title: "Gündemdekiler",
    topic: {
      type: "",
      value: "Türkiye Yüzyılı Maarif Modeli",
    },
    postCount: 1.514,
  },
];

export default function Agenda() {
  return (
    <Container>
      <Content>
        <Heading2>İlgini çekebilecek gündemler</Heading2>
        <Subject>
          {topics.map((topic, index) => (
            <Topic item={topic} key={index} />
          ))}
        </Subject>
        <StyedLink>Daha fazla göster</StyedLink>
      </Content>
    </Container>
  );
}
