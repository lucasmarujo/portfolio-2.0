import React, { useContext } from 'react';
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, Title, SubTitle, ResumeButton, TextLoop, Span } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { LanguageContext } from '../../context/LanguageContext';

const HeroSection = () => {
    const { bio, isBrazilFlag } = useContext(LanguageContext);

    return (
        <div id="about">
             <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>{isBrazilFlag ? "Olá, eu sou" : "Hello, i'm"} <br /> {bio.name}</Title>
                        <TextLoop>
                            {isBrazilFlag ? "Atuo como" : "I am a"}
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{bio.description}</SubTitle>
                        <ResumeButton href={bio.resume} target='display'>Download CV</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection