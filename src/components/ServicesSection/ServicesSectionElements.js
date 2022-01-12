import styled from 'styled-components';
import ServicesBg from '../../Assets/imgs/servicesSection.png';
import ServiceBg1 from '../../Assets/imgs/BgService1.png'
import ServiceBg2 from '../../Assets/imgs/BgService2.png'
import { TitleTxt } from '../AboutHome/AboutHomeElements';

export const ServicesContainer = styled.div`
    height: 110vh;
    background-image: url(${ServicesBg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 30% 40% 60px;

    gap: 1rem;
    padding-top: 9rem;
    padding-bottom: 4rem;

    justify-content: center;
    align-items: center; 
    position: relative;

    @media only screen and (max-width:950px) {
        background-size: 110% 100%;
        grid-template-rows: 25% 40% 40% 70px;
        height: 90vh;
    }
    
    @media only screen and (max-width:650px) {
        grid-template-rows: 20% 35% 35% 50px;
    }

`
export const Title = styled(TitleTxt)`
    color: black;
    grid-column: 1/3;
    grid-row: 1/2;
    padding-top:1em;
    padding-bottom:0em;
    letter-spacing: .1rem;

`
export const Service1 = styled.div`
    background-image: url(${ServiceBg1});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 60% 50% ;
    text-align:right;
    margin-right:2em;
    
    grid-row: 2/2;
    grid-column: 1/2;
    @media only screen and (max-width:650px) {
        grid-row: 2/3;
        grid-column: 1/3;

        text-align:center;
        margin-right:0em;
    }
`
export const Service2 = styled.div`
    background-image: url(${ServiceBg2});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 60% 50%;

    text-align:left;
    margin-left:2em;

    grid-row: 2/2;
    grid-column: 2/2;

    @media only screen and (max-width:650px) {
        grid-row: 3/3;
        grid-column: 1/3;
        
        text-align:center;
        margin-left:0em;
    }
`
export const Subtitle = styled.h2`
    display:block;
    font-size:clamp(1.9rem, 1.6vw, 1.6rem);
    color: black;
    text-decoration: underline #256ce1 1px;
`
export const StyledList = styled.li`
    font-size:clamp(1rem, 1vw, 1rem);
    font-style: italic;
    color: black;
    list-style-type: none;

`
export const CtaServices = styled.button`
   font-size:clamp(.7rem, 1vw, 1rem);
    background: #256ce1;
    margin-top: 2em;
    padding: 5px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    width: 15%;
    left:42.5%;
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
      
      content: 'Im interested';

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
    background: #000;
    color: #fff;
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
    
    grid-row: 3/3;
    grid-column: 1/3;

    @media only screen and (max-width:650px) {
        grid-row: 4/4;
        grid-column: 1/4;
        
        text-align:center;
        margin-left:0em;

        width: 25%;
        left:37.5%;
`
