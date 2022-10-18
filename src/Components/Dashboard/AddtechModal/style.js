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
  background-color: var(--grey-3);
  width: 90vw;
  height: 56vh;
  border-radius: 4px;

  @media (min-width: 768px) {
    width: 30vw;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: var(--grey-2);
  border-radius: 4px 4px 0px 0px;

  h3 {
    font-family: var(--font);
    color: var(--grey-0);
    margin: 10px;
    margin-left: 30px;
    font-size: 0.9rem;
    font-weight: 400;
  }

  button {
    display: flex;
    align-items: center;
    background-color: transparent;
    color: white;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export const Form = styled.form`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  gap: 20px;
  height: 40vh;

  label {
    font-family: var(--font);
    color: var(--grey-0);
    font-size: 0.8rem;
  }

  input {
    background-color: var(--grey-2);
    font-family: var(--font);
    color: var(--grey-0);
    height: 45px;
    border: none;
    border-radius: 4px;
    padding-left: 7px;
  }

  select {
    background-color: var(--grey-2);
    font-family: var(--font);
    color: var(--grey-0);
    height: 48px;
    border: none;
    border-radius: 4px;
    padding-left: 2px;
  }

  button {
    margin-top: 2vh;
    background-color: var(--color-primary);
    height: 45px;
    font-family: var(--font);
    color: var(--grey-0);
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;
