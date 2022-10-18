import { createContext, useState } from "react";
export const TechContext = createContext({});

const TechProvider = ({ children }) => {
 
    const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <>
      <TechContext.Provider value={{openModal, closeModal, modal }}>
        {children}
        </TechContext.Provider>
    </>
  );
};

export default TechProvider;
