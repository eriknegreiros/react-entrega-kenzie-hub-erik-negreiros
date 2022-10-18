import styled from "styled-components";

export const Header = styled.header`
  width: 100vw;
  height: 100px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: space-evenly;
  border-bottom: 1px solid var(--grey-3);
  position: relative;
  top: 85px;
  @media(min-width:768px) {
    display: flex;
    top: 85px;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    gap: 22vw;
  }

  h1 {
    margin: 3vw;
    font-family: var(--font);
    color: var(--grey-0);
    font-weight: 700;
    font-size: 1rem;
    text-align: left;
  }

  span {
    margin: 3vw;
    color: var(--grey-1);
    font-family: var(--font);
    font-size: 0.8rem;
    text-align: left;
  }

  @media(min-width:768px) {
    h1{
      text-align: center;
    }

    span{
      text-align:center;
    }
  }


 
`;
