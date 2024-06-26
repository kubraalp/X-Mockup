import styled from "styled-components";

const Container = styled.div`
  min-height: 2rem;
  height: 3.313rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Label = styled.label`
  height: 2.688rem;
  border-radius: 9999px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #202327; /* Örnek arka plan rengi */
  padding: 0 12px; /* Örnek padding */
`;

const Image = styled.div`
  width: 30px;
  margin-right: 12px; /* Örnek sağ boşluk */
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  border-radius: 40rem;
  outline: none;
`;

export default function Search() {
  return (
    <Container>
      <Label>
        <Image>
          <svg viewBox="0 0 24 24">
            <path
              fill="gray"
              d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
            />
          </svg>
        </Image>
        <Input type="text" placeholder="Ara" />
      </Label>
    </Container>
  );
}
