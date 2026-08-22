import React, { createContext, useContext, useState } from 'react';

const LightboxContext = createContext();

export const LightboxProvider = ({ children }) => {
  const [activeProject, setActiveProject] = useState(null);

  const openLightbox = (project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <LightboxContext.Provider value={{ activeProject, openLightbox, closeLightbox }}>
      {children}
    </LightboxContext.Provider>
  );
};

export const useLightbox = () => useContext(LightboxContext);
