import styled from 'styled-components';

export const ModalBg = styled.div`
  width: 65%;
  height: 90%;
  background-color: rgba(2, 2, 2, 0.55);
  position: fixed;
  margin: 5% auto; /* Will not center vertically and won't work in IE6/7. */
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalContainer = styled.div`
  width: 60%;
  height: 45%;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`
export const TitleClose = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const TitleCloseBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`
export const ModalTitle = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
`
export const TitleTxt = styled.button`
  font-size:clamp(1rem, 2vw, 2rem);
  color: black;
  background: none;
  border: none;
  padding: 0; 
  cursor: pointer;
  outline: inherit;
`
export const TitleTxtLink = styled.a`
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
    background: #256ce1;
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

export const ModalBody = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const ModalBodyTxt = styled.p`
  font-size:clamp(1rem, 1vw, 1rem);
  color: black;
`
export const ModalFooter = styled.div`
  font-size:clamp(1rem, 2vw, 2rem);
  width: 25%;
  height: 45px;
  margin: 5% auto; /* Will not center vertically and won't work in IE6/7. */
  left: 0;
  right: 0;
  border: none;
  background-color: #ffcccb;
  color: white;
  border-radius: 8px;
  text-align:center;

  cursor: pointer;
`
export const ModalFooterBtn = styled.div`
  background-color: crimson;
`