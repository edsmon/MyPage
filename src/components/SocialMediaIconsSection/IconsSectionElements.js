import styled from 'styled-components';
import IconsBg from '../../Assets/imgs/IconsSect.png';

export const IconsContainer = styled.div`
    height: 50vh;

    display: grid;
    grid-template-columns: 1fr ;
    grid-template-rows: 100px 100px;

    justify-content: center;
    align-items: center;

    background-image: url(${IconsBg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size:100% 120%;

    box-sizing: border-box;
    gap:1em;

     @media only screen and (max-width:950px) {
        background-size: 110% 100%;
     }

`
export const TitleIcons = styled.h1`
    font-size: clamp(2rem, 3vw, 3rem);
    padding: 0 1em 0 1em;
    letter-spacing: .1rem;
    line-height: 1.0;
    text-align: center;
    color: black;

    grid-column: 1/2;
    grid-row: 1/2;

`

export const Icons = styled.div`
    text-align:center;
    
    grid-row: 2/2;
    grid-column: 1/2;

    padding-bottom:4em;
  
`
export const LinkIcon = styled.a`
    href: ${props => props.href};
    outline: none;
    text-decoration: none;
    color: #000000;
    &:link {
        color: #000000;
    }
    &:visited{
        outline: none;
        text-decoration: none;
        color: #000000;
    }
    &:hover{
        color:#256ce1;
    }
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
      
      content: '';

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
    background: #0000;
    
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
`