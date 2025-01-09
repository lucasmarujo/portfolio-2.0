import React, { useContext } from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import brazilFlag from '../../images/brazil.png';
import usaFlag from '../../images/united-states.png';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import { useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const Navbar = () => {
  const { isBrazilFlag, toggleFlag, bio } = useContext(LanguageContext);
  const theme = useTheme()

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <button onClick={toggleFlag} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', fontSize: '1.5rem', marginLeft: '10px', marginRight: '20px' }}>
          <img src={isBrazilFlag ? brazilFlag : usaFlag} alt="Flag" style={{ width: '30px', height: '30px' }} />
        </button>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">{isBrazilFlag ? "Sobre" : "About"}</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>{isBrazilFlag ? "Experiência" : "Experience"}</NavLink>
          <NavLink href='#projects'>{isBrazilFlag ? "Projetos" : "Projects"}</NavLink>
          <NavLink href='#education'>{isBrazilFlag ? "Formação" : "Education"}</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={bio.github} target="_blank">Github</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>{isBrazilFlag ? "Sobre" : "About"}</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>{isBrazilFlag ? "Experiência" : "Experience"}</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>{isBrazilFlag ? "Projetos" : "Projects"}</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>{isBrazilFlag ? "Formação" : "Education"}</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={bio.github} target="_blank">Github</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar