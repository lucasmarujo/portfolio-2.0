import React, { useContext, useState } from 'react'
import {
  Container,
  Wrapper,
  Title,
  Desc,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
  CardContainer
} from './ProjectsStyle'
import { LanguageContext } from '../../context/LanguageContext'
import ProjectCard from '../Cards/ProjectCards'

const Projects = () => {
  const { projects, isBrazilFlag } = useContext(LanguageContext)
  const [toggle, setToggle] = useState('all')

  return (
    <Container id="projects">
      <Wrapper>
        <Title>{isBrazilFlag ? "Projetos" : "Projects"}</Title>
        <Desc>
          {isBrazilFlag 
            ? "Trabalhei em uma ampla gama de projetos. De aplicativos da web a aplicativos Android. Aqui estão alguns dos meus projetos."
            : "I have worked on a wide range of projects. From web apps to Android apps. Here are some of my projects."
          }
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton active={toggle === 'all'} onClick={() => setToggle('all')}>
            All
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'frontend'} onClick={() => setToggle('frontend')}>
            FRONTEND
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'backend'} onClick={() => setToggle('backend')}>
            BACKEND
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'machine learning'} onClick={() => setToggle('machine learning')}>
            MACHINE LEARNING
          </ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {projects
            .filter(project => toggle === 'all' || project.category.toLowerCase() === toggle)
            .map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects