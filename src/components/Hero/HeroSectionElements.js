import styled from 'styled-components';
import HeroTemp from '../../Assets/imgs/HeroTemp.jpeg'

export const HeroTitle = styled.h1`
    font-size: clamp(4rem, 8vw, 8rem);
    font-weight: 900;
    letter-spacing: .5rem;
    line-height: 1.0;
    text-align: center;
    margin-left: -60px;
    
    color: white;

     @media only screen and (max-width:500px) {
      margin-left: 0px;
     }
`
export const HeroTitleTextLower = styled.div`
    margin-left: -70px;
    color: white;
    font-size: clamp(1rem, 2vw, 2rem);

    @media only screen and (max-width:500px) {
      margin-left: 0px;
     }
`
export const Words = styled.span`
    
    &::after{
      content:"";
      animation: spin 12s ease-in infinite;
    }

    &:hover{
      color: lightblue;
      text-decoration: wavy;
      animation: fadeIn 3s;
    }
    

    @keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
}
    @keyframes spin {

    0% { content:"Frontend Developer";  }
    50% { content:"Learning Specialist";  }
    100% { content:"Knowmad";  }
}
`

export const HeroTitleText = styled.span`
    display: flex;
    flex-direction: column;

    animation: glitch 5s linear infinite;
    
    text-shadow: 2px 2px 1px black;

    @keyframes glitch{
  2%,64%{
    transform: translate(2px,0) skew(0deg);
  }
  4%,60%{
    transform: translate(-2px,0) skew(0deg);
  }
  62%{
    transform: translate(0,0) skew(5deg); 
  }
}
&:before,
&:after{
  content: attr(title);
  position: absolute;
  left: 0;
}
&:before{
  animation: glitchTop 4s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

@keyframes glitchTop{
  2%,64%{
    transform: translate(2px,-2px);
  }
  4%,60%{
    transform: translate(-2px,2px);
  }
  62%{
    transform: translate(13px,-1px) skew(-13deg); 
  }
}

&:after{
  animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBotom{
  2%,64%{
    transform: translate(-2px,0);
  }
  4%,60%{
    transform: translate(-2px,0);
  }
  62%{
    transform: translate(-22px,5px) skew(21deg); 
  }
}

&:hover{transform: scale(1.1);}
`

export const HeroContainer = styled.div`

    height: 100vh;

    background-image:  linear-gradient( to top right, rgba(11, 10, 10, 0.38), rgba(11, 10, 10, 0.19)), url(${HeroTemp});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: -80px;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 

    box-shadow: 0 -30px 20px  black inset; 
  
    @media only screen and (max-width:1600px) {
    height: 110vh;
}
    
    `