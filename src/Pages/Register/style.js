import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  gap: 20px;
`;

export const LogoAndBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  gap: 25vw;

  @media (min-width: 768px) {
    gap: 10.8vw;
  }

  h1 {
    font-family: var(--font);
    color: var(--color-primary);
    font-weight: 700;
    font-size: 1.3rem;
    margin-left: 20px;
    text-align: center;
  }

  button {
    font-family: var(--font);
    color: var(--grey-0);
    border: none;
    background-color: var(--grey-3);
    margin-right: 20px;
    width: 80px;
    height: 30px;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }
`;

export const BackgroundForm = styled.div`
  background-color: var(--grey-3);
  border-radius: 3.2px;
  width: 85vw;
  height: 85vh;

  @media (min-width: 768px) {
    width: 340px;
    height: 88vh;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 12px;
  gap: 10px;

  h2 {
    font-family: var(--font);
    color: var(--grey-0);
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
  }

  p {
    font-family: var(--font);
    font-size: 0.8rem;
    color: var(--grey-1);
    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 7px;
  text-align: left;
  margin-top: 10px;
  height: 70vh;
  margin-left: 2vw;

  @media (min-width: 768px) {
    margin-left: 14px;
    margin-right: 1vw;
    height: 75vh;
  }

  label {
    font-family: var(--font);
    font-size: 0.7rem;
    color: var(--grey-0);
  }

  input {
    width: 79vw;
    background-color: var(--grey-2);
    height: 45px;
    border: none;
    border-radius: 3.2px;
    padding-left: 7px;
    color: white;
  }

  input::placeholder {
    font-family: var(--font);
    font-weight: 500;
  }

  @media (min-width: 768px) {
    input {
      width: 303px;
    }
  }

  select {
    width: 81vw;
    background-color: var(--grey-2);
    height: 55px;
    border: none;
    border-radius: 3.2px;
    font-family: var(--font);
    color: var(--grey-50);
    padding-left: 6px;
  }
  @media (min-width: 768px) {
    select {
      width: 310px;
    }
  }

  option {
    font-family: var(--font);
    color: var(--grey-50);
  }

  button {
    margin-top: 20px;
    background-color: var(--color-primary);
    border: none;
    height: 60px;
    border-radius: 4px;
    width: 80vw;
    color: #ffffff;
    font-family: var(--font);
    text-align: center;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    button {
      width: 307px;
    }
  }
`;
