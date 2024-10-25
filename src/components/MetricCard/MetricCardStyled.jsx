import styled from "styled-components";

export const MetricCardStyled = styled.article`
  height: 80px;
  max-width: 200px;
  width: 100%;
  position: relative;
  border-radius: 100px;
  background: var(--linear);
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    background-color: var(--dark);
    height: 70px;
    width: 100%;
    max-width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    text-align: center;
    font-size: 1.25rem;
  }
  span {
    position: absolute;
    height: 40px;
    width: 40px;
    background-color: var(--dark);
    color: var(--light);
    transform: translateY(50%);
    bottom: 50%;
    border-radius: 50px;
    padding-left: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    &#minus {
      left: 6px;
    }
    &#plus {
      right: 6px;
    }
  }
`;
