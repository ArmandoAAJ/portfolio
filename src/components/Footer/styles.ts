import styled from "styled-components";

export const Container = styled.footer`
  margin-top: 70px;
  background: var(--backgroundHeader);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
  padding: 1.5rem 2rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  a {
    display: flex;
    background-color: var(--background);
    border-radius: 0.25rem;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
  }

  a + a {
    margin-left: 10px;
  }

  a:hover {
    background-color: #fff;
    svg {
      fill: var(--background);
    }
  }
`;
