import styled from "styled-components";

export const Navbar = styled.header`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--grey-3);
  position: fixed;
  z-index: 999;
  background-color: var(--grey-4);

  @media(min-width:768px){
    justify-content: space-evenly;
  }

  h1 {
    margin: 3vw;
    font-family: var(--font);
    color: var(--color-primary);
    font-weight: 700;
    font-size: 1.3rem;
    text-align: center;
  }

  button {
    margin: 3vw;
    font-family: var(--font);
    color: var(--grey-0);
    border: none;
    background-color: var(--grey-3);
    width: 70px;
    height: 30px;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }

  @media(min-width:768px){
    display: flex;
    justify-content: space-evenly;
    gap: 15vw;
}
`;


