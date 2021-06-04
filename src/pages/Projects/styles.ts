import styled from "styled-components";

interface propsContainer {
  height: number;
}

export const Container = styled.div<propsContainer>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${(props) => (props.height ? props.height - 70 : "auto")}px;
`;

export const Content = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1024px;
  flex-direction: column;
  padding: 1.5rem 2rem 0;
`;

export const Emoji = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--tertiary);

  span:first-child {
    font-size: 1.5rem;
  }

  span + span {
    margin-left: 1rem;
  }
`;

export const Cards = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 5rem;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 2rem;
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
  }
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 400px;
  border-radius: 0.25rem;
  background-color: #202024;
  padding: 1rem;
  transition: border 0.3s;

  &:hover {
    border: 1px solid ${(props) => (props.color ? props.color : "#202024")};
  }

  span {
    color: ${(props) => (props.color ? props.color : "#A8A8B3")};
  }

  img {
    width: 50px;
    height: 50px;
  }

  h4 {
    font-size: 0.75rem;
    color: var(--secundary);
    text-align: justify;
    line-height: 1.25rem;
  }
`;

export const Techs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: auto;
  max-height: 100px;
`;
