import styled from "styled-components";

export const Section = styled.section`
  z-index: 9999;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(18, 18, 20, 0.5);
`;

export const Card = styled.div`
  width: 90vw;
  height: 20vh;
  background-color: var(--grey-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  border-radius: 4px;
  border: 3px solid var(--grey-2);

  @media (min-width: 768px) {
    width: 33vw;
  }

  h1 {
    font-family: var(--font);
    color: var(--grey-0);
    font-weight: 600;
  }

  div {
    display: flex;
    gap: 25px;
  }

  button {
    background-color: var(--color-primary);
    font-family: var(--font);
    color: var(--grey-0);
    font-weight: 600;
    border: none;
    width: 90px;
    height: 30px;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
  }
`;
