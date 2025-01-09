// src/context/LanguageContext.js
import React, { createContext, useState, useEffect } from 'react';
import { Bio as BioPT, skills as skillsPT, projects as projectsPT, education as educationPT, experiences as experiencesPT } from '../data/constants';
import { Bio as BioEN, skills as skillsEN, projects as projectsEN, education as educationEN, experiences as experiencesEN } from '../data/constants-us';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [isBrazilFlag, setIsBrazilFlag] = useState(true);
  const [bio, setBio] = useState(BioPT);
  const [skills, setSkills] = useState(skillsPT);
  const [projects, setProjects] = useState(projectsPT);
  const [education, setEducation] = useState(educationPT);
  const [experiences, setExperiences] = useState(experiencesPT);

  const toggleFlag = () => {
    setIsBrazilFlag(!isBrazilFlag);
  };

  useEffect(() => {
    if (isBrazilFlag) {
      setBio(BioPT);
      setSkills(skillsPT);
      setProjects([...projectsPT]);
      setEducation(educationPT);
      setExperiences(experiencesPT);
    } else {
      setBio(BioEN);
      setSkills(skillsEN);
      setProjects([...projectsEN]);
      setEducation(educationEN);
      setExperiences(experiencesEN);
    }
  }, [isBrazilFlag]);

  return (
    <LanguageContext.Provider value={{ 
      isBrazilFlag, 
      toggleFlag, 
      bio, 
      skills, 
      projects,
      education,
      experiences 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};