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
  flex-direction: row;
  padding: 1.5rem 2rem 0;
  max-width: 1024px;
  margin: 0 auto;

  h1 {
    font-size: 3.5rem;
    margin-top: 2rem;
    line-height: 4rem;
    color: var(--primary);
  }

  button {
    background-color: var(--tertiary);
    border-radius: 5px;
    border: none;
    width: 100%;
    padding: 0.75rem;
    margin-top: 4rem;
    color: var(--primary);
    font-size: 1.2rem;
    transition: filter 0.5s;
  }

  button:hover {
    filter: opacity(0.8);
  }

  a {
    text-decoration: none;
  }

  .about {
    max-width: 50%;
    .profile-picture {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }

    img {
      width: 10rem;
      height: 10rem;
      border: 0.02rem solid transparent;
      border-radius: 0.25rem;
    }

    h3 {
      padding-top: 2rem;
      padding-left: 3rem;
      text-align: justify;
      color: var(--secundary);
      font-size: 1rem;
      line-height: 2rem;

      a {
        color: #fff;
      }
    }
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;

    div {
      align-items: center;
      justify-content: center;
    }

    h1 {
      text-align: center;
      font-size: 2rem;
      line-height: 3rem;
    }

    .about {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      margin-top: 2rem;
      max-width: none;

      .profile-picture {
        justify-content: start;
      }

      h3 {
        padding-top: 0;
        padding-left: 0;
        margin: 0 2rem;
        text-align: justify;
        color: var(--secundary);
        font-size: 1rem;
        line-height: 2rem;
      }
    }
  }

  @media (max-width: 720px) {
    .about {
      display: flex;
      flex-direction: column;

      .profile-picture {
        justify-content: center;
      }

      h3 {
        font-size: 1.2rem;
        margin: 2rem 0;
        text-align: center;
      }
    }
  }
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
