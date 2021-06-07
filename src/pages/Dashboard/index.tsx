import React from "react";
import { NavLink } from "react-router-dom";
import { Footer } from "../../components/Footer";
import useWindowDimensions from "../../hooks/dimenssions";
import { Container, Content, Emoji } from "./styles";

export const Dashboard: React.FC = () => {
  const { height } = useWindowDimensions();
  const age = new Date().getFullYear() - 1995;

  const hendleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container height={height}>
      <Content>
        <div>
          <Emoji>
            <span>👊</span>
            <span>Olá seja muito bem vindo!</span>
          </Emoji>
          <h1>
            É uma honra ter você aqui e apresentar minha história de
            aprendizado.
          </h1>
          <NavLink to="/projects">
            <button>PROJETOS</button>
          </NavLink>
        </div>
        <div className="about">
          <div className="profile-picture">
            <img
              src="https://avatars.githubusercontent.com/u/7575325?s=400&u=6132f4cecdec70106c554b01418c86dac53131e4&v=4"
              alt=""
            />
          </div>
          <h3>
            Olá, sou <a href="/">Armando Arlan Joergensen</a>, {age} anos,
            formado em Ciencia da Computação pela UNOESC-SC em 2018, São Miguel
            do Oeste - SC. Criei esse portfólio com o intúito de apresentar um
            pouco do que venho estudando pelo Bootcamp da Rocketseat e
            principalmente colocar em prática todo o conhecimento adquirido.
            Atualmente trabalho na{" "}
            <a href="https://9bits.com.br/">9Bist Soluções Web e Mobile</a>{" "}
            gerenciando e atuando no suporte além de participar no
            desenvolvimento tendo como biblioteca base o React.
          </h3>
        </div>
      </Content>
      <Footer hendleScrollTop={hendleScrollTop} />
    </Container>
  );
};
