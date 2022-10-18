import styled from "styled-components";

export const Main = styled.main`
  position: relative;
  top: 100px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin: 3vw;
    font-family: var(--font);
    color: var(--grey-0);
    font-weight: 700;
    font-size: 1rem;
    text-align: left;
  }

  button {
    margin: 3vw;
    background-color: var(--grey-3);
    border: none;
    color: var(--grey-0);
    width: 25px;
    height: 25px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items:center ;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    gap: 19vw;
  }
`;
export const Apoio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const AllCards = styled.div`
  margin-top: 20px;
  width: 95vw;
  min-height: 40vh;
  background-color: var(--grey-3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  margin-bottom: 100px;

  @media (min-width: 768px) {
    margin: 0px;
    width: 54vw;
    min-height: 35vh;
    margin-bottom: 50px;
  }
`;

export const Card = styled.div`
  .individual_card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    background-color: var(--grey-4);
    width: 92vw;
    height: 40px;
    gap: 20px;
    border-radius: 4px;
  }

  @media (min-width: 768px) {

    .individual_card{
        width: 52vw;
    }
    
  }

  h1 {
    font-family: var(--font);
    color: var(--grey-0);
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
  }

  h4 {
    font-family: var(--font);
    color: var(--grey-0);
    font-weight: 500;
    font-size: 0.9rem;
    margin: 10px;
  }


  .status_trash{
    display: flex;
    align-items: center;
    gap: 8px;
  }

  p{
    font-family: var(--font);
    color: var(--grey-1);
    font-weight: 300;
    font-size: 0.8rem;
    margin: 10px;
  }

  button{
    margin: 10px;
    display: flex;
    align-items: center;
    color: var(--grey-1);
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
