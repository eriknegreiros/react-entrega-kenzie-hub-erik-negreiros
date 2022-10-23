import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 10vw;
  }
`;

export const ContainerInfo = styled.div`
  margin: 45px;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 50px;

  h1 {
    font-family: var(--font);
    color: var(--color-primary);
    font-weight: 700;
    font-size: 2rem;
    overflow: hidden;
    animation: typewriter 3s steps(15) infinite alternate,
      blink 800ms steps(13) infinite normal;
    border-right: 5px solid white;
  }

  @keyframes typewriter {
    from {
      width: 0%;
    }
    to {
      width: 35%;
    }
  }
  @keyframes blink {
    from {
      border-color: white;
    }
    to {
      border-color: white;
    }
  }

  p {
    font-family: var(--font);
    color: var(--grey-0);
    line-height: 1.5;
  }

  button {
    font-family: var(--font);
    font-size: 1rem;
    color: var(--grey-0);
    border: none;
    background-color: var(--grey-3);
    margin-right: 20px;
    width: 200px;
    height: 55px;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--grey-2);
    transition: 2s;
  }

  @media (min-width: 768px) {
    margin: 40px;
    width: 40vw;
    margin-left: 100px;
  }
`;

export const ContainerImg = styled.div`
  margin: 20px;

  img {
    display: none;
  }

  @media (min-width: 768px) {
    img {
      display: inline;
      width: 450px;
    }
  }
`;
