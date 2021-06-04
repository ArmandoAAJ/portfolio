import styled from "styled-components";

interface ModalProps {
  height: number;
}

export const Container = styled.header`
  background: var(--backgroundHeader);
  height: 70px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem 2rem 0;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 3rem;
    height: 3rem;
    border: 0;
    background-color: var(--backgroundHeader);
  }

  p {
    font-size: 2rem;
    color: #ffffff;
    font-family: "Pattaya", sans-serif;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;

    list-style-type: none;
    list-style: none;

    .active {
      border-bottom: 0.2rem solid var(--tertiary);
      padding: 1rem 0.75rem;
    }
  }

  a {
    font-size: 0.9rem;
    color: var(--secundary);
    text-decoration: none;
    border-bottom: 0.2rem solid var(--backgroundHeader);
    padding: 1rem 0.75rem;
  }
`;

export const Modal = styled.header<ModalProps>`
  background-color: var(--background);
  position: absolute;
  right: 0;
  left: 0;
  top: 4rem;
  bottom: 0;
  padding: 1rem 2rem;

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
    background-color: var(--background);
    list-style-type: none;
    list-style: none;
  }

  a {
    width: 100%;
    padding: 1.5rem 0 1.5rem 2rem;
    border-radius: 0.25rem;
    font-size: 0.9rem;
    color: var(--secundary);
    text-decoration: none;
    background-color: var(--backgroundHeader);
    transition: filter 0.2s;

    & + a {
      margin-top: 1rem;
    }
  }

  .active {
    background-color: var(--background);
    border: 1px solid var(--backgroundHeader);
    border-left: 1px solid var(--tertiary);
  }

  a:hover {
    filter: opacity(0.5);
  }
`;
