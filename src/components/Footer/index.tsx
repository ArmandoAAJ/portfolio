/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import {
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillGithub,
  AiOutlineUp,
} from "react-icons/ai";
import { Container, Content } from "./styles";

interface FooterProps {
  hendleScrollTop: () => void;
}

export const Footer = ({ hendleScrollTop }: FooterProps) => {
  return (
    <Container>
      <Content>
        <div>
          <a href="https://www.linkedin.com/in/armandoaaj/" target="_blank">
            <AiFillLinkedin size={30} color="#FFF" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5549991967878"
            target="_blank"
          >
            <AiOutlineWhatsApp size={30} color="#FFF" />
          </a>
          <a href="https://github.com/ArmandoAAJ" target="_blank">
            <AiFillGithub size={30} color="#FFF" />
          </a>
        </div>
        <div>
          <a onClick={hendleScrollTop}>
            <AiOutlineUp size={30} color="#FFF" />
          </a>
        </div>
      </Content>
    </Container>
  );
};
