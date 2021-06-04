import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { AiFillGithub } from "react-icons/ai";
import useWindowDimensions from "../../hooks/dimenssions";
import {
  Container,
  Content,
  Emoji,
  Cards,
  Techs,
  Box,
  CardItem,
} from "./styles";

import nodeJS from "../../assets/nodejs-icon.svg";
import next from "../../assets/next.svg";
import api from "../../hooks/api";

interface ProjectsProps {
  description: string;
  techs: string[];
  title: string[] | string;
  repository: string;
}

export const Projects: React.FC = () => {
  const { height } = useWindowDimensions();
  const [projects, setProjects] = useState<ProjectsProps[]>([]);

  useEffect(() => {
    const data = api();
    setProjects(data);
  }, []);

  const hendleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container height={height}>
      <Content>
        <Emoji>
          <div>
            <span>👨🏻‍💻</span>
            <span>Projetos para estudos!</span>
          </div>
        </Emoji>
        <Cards>
          <Box>
            {projects.map((project) => (
              <CardItem key={project.title[0]} color={project.title[1]}>
                <span>{project.title[0]}</span>
                {project.techs.length > 0 && (
                  <Techs>
                    {project.techs[0].length > 0 && (
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                        alt="Logo ReactJS"
                      />
                    )}
                    {project.techs[1].length > 0 && (
                      <img
                        src={nodeJS}
                        alt="LogoNodeJS"
                        style={{ width: 30, height: 30 }}
                      />
                    )}
                    {project.techs[2].length > 0 && (
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                        alt="Logo React Native"
                      />
                    )}
                    {project.techs[3].length > 0 && (
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                        alt="Logo TypeScript"
                        style={{ width: 30, height: 30 }}
                      />
                    )}
                    {project.techs[4].length > 0 && (
                      <img
                        src={next}
                        alt="Logo NextJS"
                        style={{
                          width: 60,
                          height: 40,
                        }}
                      />
                    )}
                  </Techs>
                )}
                <h4>{project.description}</h4>
                <a href={project.repository} target="blank">
                  <AiFillGithub size={25} color="#FFF" />
                </a>
              </CardItem>
            ))}
          </Box>
        </Cards>
      </Content>
      <Footer hendleScrollTop={hendleScrollTop} />
    </Container>
  );
};
