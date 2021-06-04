import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import useWindowDimensions from "../../hooks/dimenssions";

import { IoFilterOutline, IoCloseOutline } from "react-icons/io5";
import { Container, Content, Modal } from "./styles";

export const Header: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const { width, height } = useWindowDimensions();

  const handleOpenModal = () => {
    setOpenModal((oldState) => !oldState);
  };

  const handleOpenPage = () => {
    setOpenModal((oldState) => !oldState);
  };

  const modalSelect = () => {
    return (
      <Modal height={height}>
        <ul>
          <NavLink onClick={handleOpenPage} exact to="/">
            Sobre
          </NavLink>
          <NavLink onClick={handleOpenPage} to="/projects">
            Projetos
          </NavLink>
        </ul>
      </Modal>
    );
  };

  return (
    <Container>
      <Content>
        <p>Armando A. J</p>
        {width <= 720 && (
          <button onClick={handleOpenModal}>
            {openModal ? (
              <IoCloseOutline size={30} color="#838384" />
            ) : (
              <IoFilterOutline size={30} color="#838384" />
            )}
          </button>
        )}
        {width > 720 && (
          <ul>
            <NavLink exact to="/">
              Sobre
            </NavLink>
            <NavLink to="/projects">Projetos</NavLink>
          </ul>
        )}
      </Content>
      {openModal && width <= 720 && modalSelect()}
    </Container>
  );
};
