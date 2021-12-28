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
  
  background: #256ce1;
  padding: 5px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  position: relative;

  &::after {
      --slice-0: inset(50% 50% 50% 50%);
      --slice-1: inset(80% -6px 0 0);
      --slice-2: inset(50% -6px 30% 0);
      --slice-3: inset(10% -6px 85% 0);
      --slice-4: inset(40% -6px 43% 0);
      --slice-5: inset(80% -6px 5% 0);
      
      content: 'Contact';

      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, transparent 3%, #256ce1 3%, #256ce1 5%, #256ce1 5%);
      text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #00E6F6;
      clip-path: var(--slice-0);
    }

    &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
    
    &:hover::after {
      animation: 1s glitchbtn;
      animation-timing-function: steps(2, end);
      background: #fff;
      color: #010606;
    }
    
    @keyframes glitchbtn {
      0% {
        clip-path: var(--slice-1);
        transform: translate(-20px, -10px);
      }
      10% {
        clip-path: var(--slice-3);
        transform: translate(10px, 10px);
      }
      20% {
        clip-path: var(--slice-1);
        transform: translate(-10px, 10px);
      }
      30% {
        clip-path: var(--slice-3);
        transform: translate(0px, 5px);
      }
      40% {
        clip-path: var(--slice-2);
        transform: translate(-5px, 0px);
      }
      50% {
        clip-path: var(--slice-3);
        transform: translate(5px, 0px);
      }
      60% {
        clip-path: var(--slice-4);
        transform: translate(5px, 10px);
      }
      70% {
        clip-path: var(--slice-2);
        transform: translate(-10px, 10px);
      }
      80% {
        clip-path: var(--slice-5);
        transform: translate(20px, -10px);
      }
      90% {
        clip-path: var(--slice-1);
        transform: translate(-10px, 0px);
      }
      100% {
        clip-path: var(--slice-1);
        transform: translate(0);
      }
    }
`;