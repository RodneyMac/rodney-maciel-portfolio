import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  height: 70px;
  background-color: var(--darkGray);
  position: fixed;
`;

export const Wrapper = styled.div `
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div `
  margin-left: 1.2rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  
  img {
    cursor: pointer;
  }
`;

export const Menu = styled.ul `
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;

  @media screen and (max-width: 960px) {
    position: absolute;
    background-color: var(--darkGray);
    top: 70px;
    left: ${({open}) => open ? "0" : "-100%"};
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const MenuItem = styled.li `
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .link {
    text-decoration: none;
    width: 100%;
  }
`;

export const MenuItemLink = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  color: var(--white);
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    color: var(--dark);
    background-color: var(--waterGreen);
    color: var(--dark);
    transition: 0.5s all ease;
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const MobileIcon = styled.div `
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      fill: var(--white);
      margin-right: 0.5rem;
    }
  }
`;