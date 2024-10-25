/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  & > div {
    margin: 30px auto;
    max-width: 1200px;
    border-radius: 12px;
    padding: 1px;
    background: linear-gradient(
      to right,
      #c5c3ff 0%,
      #a3a0f8 50%,
      #4441c8 100%
    );
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 30px;
  background-color: var(--dark);
  z-index: 1;
  border-radius: 12px;
  color: var(--light);
  button {
    font-size: 1.25rem;
    letter-spacing: 1px;
    font-weight: 500;
    &::after {
      height: 2px;
      margin: 0 auto;
      width: 0;
      background-color: var(--sec);
      content: "";
      display: block;
      transition: 0.3s;
    }
    &:hover,
    &.active {
      color: var(--sec);
      &::after {
        width: 100%;
      }
    }
  }
`;
