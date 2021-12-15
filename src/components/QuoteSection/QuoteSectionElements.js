import styled from 'styled-components';

export const QuoteContainer = styled.div`
    height: 50vh;
    background: black;
    position: relative;
    color: white;

`;

export const QuoteText = styled.div`
    font-size: clamp(1rem, 1vw, 1rem);
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-left:-40px;
    display:block;
`;

export const QuoteStyledText = styled.span`
    position: absolute;
    
    font-size:clamp(1rem, 1vw, 1rem) ;
    transform: translate(-50%, -50%);
    color: grey;
    margin-left: 5px;
    
    cursor: pointer;

    &::before {
      content: "yours?";
      position: absolute;
      color: white;
      background-image: repeating-linear-gradient(
        45deg,
        transparent 0,
        transparent 2px,
        white 2px,
        white 4px
      );
      -webkit-background-clip: text;
      top: 0px;
      left: 0;
      z-index: -1;
      transition: 1s;
    }

    &::after {
      content: "yours?";
      position: absolute;
      color: lightblue;
      background-image: repeating-linear-gradient(
        135deg,
        transparent 0,
        transparent 2px,
        white 2px,
        white 4px
      );
      -webkit-background-clip: text;
      top: 0px;
      left: 0px;
      transition: 1s;
    }

    &:hover:before {
      top: 8px;
      left: 8px;
    }

    &:hover:after {
      top: -10px;
      left: -10px;
    } 
`;

export const QuoteButton = styled.button`
    
    display: block;

    position: absolute;
    top: 40%;
    left:43%;
    
    width: 150px;
    height: 30px;
    font-size: 20px;
      
    background: linear-gradient(45deg, transparent 5%, #256ce1 5%);
    border: 0;
    color: #fff;
    letter-spacing: 3px;
    line-height: 30px;
    box-shadow: 6px 0px 0px #00E6F6;
    outline: transparent;

    cursor: pointer;
    
    
    &::after {
      --slice-0: inset(50% 50% 50% 50%);
      --slice-1: inset(80% -6px 0 0);
      --slice-2: inset(50% -6px 30% 0);
      --slice-3: inset(10% -6px 85% 0);
      --slice-4: inset(40% -6px 43% 0);
      --slice-5: inset(80% -6px 5% 0);
      
      content: 'Let me see';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, transparent 3%, #256ce1 3%, #256ce1 5%, #256ce1 5%);
      text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #00E6F6;
      clip-path: var(--slice-0);
    }
    
    &:hover::after {
      animation: 1s glitchbtn;
      animation-timing-function: steps(2, end);
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

export const PhraseContainer = styled.div`
  display: block;

  position: relative;
  top: 60%;
  
`
export const Phrase = styled.div`
  display: block;
  font-size:clamp(1.5rem, 1vw, 1rem);
  text-align:center;
  

  -webkit-animation: fadeout 5s linear forwards;
  animation: fadeout 5s linear forwards;

  @-webkit-keyframes fadeout {
    0% { opacity: 1; }
    100% { opacity: 0; }
}
    
@keyframes fadeout {
    0% { opacity: 1; }
    100% { opacity: 0; }
}
  `
export const Author = styled.div`
  display: block;
  font-size:clamp(1rem, 1vw, 1rem);
  font-style: italic;
  text-align:center;
  

  -webkit-animation: fadeout 7s linear forwards;
  animation: fadeout 7s linear forwards;

  @-webkit-keyframes fadeout {
    0% { opacity: 1; }
    100% { opacity: 0; }
}
    
@keyframes fadeout {
    0% { opacity: 1; }
    100% { opacity: 0; }
}
`
export const PhrasesDiv = styled.div`
  color: white;
  

`
