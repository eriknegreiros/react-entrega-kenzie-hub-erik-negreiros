import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 97vh;
`;

export const Bio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  h1 {
    font-family: var(--font);
    color: var(--color-primary);
    font-weight: 700;
    font-size: 1.3rem;
   
    text-align: center;
  }
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: var(--grey-3);
  border-radius: 3.2px;
  width: 300px;
  height: 400px;
  width: 85vw;

  
  @media (min-width: 768px) {
    width: 340px;
  }

  h1 {
    margin-top: 15px;
    font-family: var(--font);
    color: var(--grey-0);
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
  }

  p{
    font-family: var(--font);
    font-size: 0.7rem;
    color: var(--grey-1);
  }

  button {
    background-color: var(--grey-1);
    border: none;
    height: 50px;
    border-radius: 4px;
    width: 80vw;
    color: #FFFFFF;
    font-family: var(--font);
    text-align: center;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    button {
      width: 312px;
    } 
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 15px;


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

  button {
    background-color: var(--color-primary);
    border: none;
    height: 50px;
    border-radius: 4px;
    width: 80vw;
    color: #FFFFFF;
    font-family: var(--font);
    text-align: center;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    button {
      width: 312px;
    } 
  }

`;