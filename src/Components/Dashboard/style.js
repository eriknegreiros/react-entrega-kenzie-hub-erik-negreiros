import styled from "styled-components";

export const Header = styled.header`
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid var(--grey-3);
  position: relative;
  top: 85px;

  h1 {
    margin: 30px;
    font-family: var(--font);
    color: var(--grey-0);
    font-weight: 700;
    font-size: 1rem;
    text-align: center;
  }

  span {
    margin: 30px;
    color: var(--grey-1);
    font-family: var(--font);
    font-size: 0.8rem;
    text-align: center;
  }
`;
