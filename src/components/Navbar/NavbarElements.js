import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo1 from '../../Assets/imgs/RW-edsLog.png';
import Logo2 from '../../Assets/imgs/RW-edsTxt.png';

export const Logo = styled.object`
  background-image: url(${Logo1});
  background-size: cover;
  background-repeat: no-repeat;

  width: 140px;
  height: 140px;

  color: transparent;

  animation: fadeIn 2s;

@keyframes fadeIn {
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
}
  
`
export const LogoScrolled = styled.object`
  background-image: url(${Logo2});
  background-size: cover;
  background-repeat: no-repeat;

  width: 140px;
  height: 30px;
  position: relative;

  color: transparent;

  animation: fadeIn 2s;

  @keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`

export const Nav = styled.nav`
  background: rgba(0,0,0,0.2);
 
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  position: sticky;
  top: 0;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;


  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;