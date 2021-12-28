import styled from 'styled-components';

export const AboutHomeContainer = styled.div`
    height: 200vh;
    background: rgba(2,2,2,1);

    position: relative;

    box-shadow: 0px 20px  20px  black inset; 

  
    @media only screen and (max-width:1600px) {
        height: 200vh;
    }
`
export const ImageBg = styled.div`
    background-image: url(${props => props.url});
    background-position: ${props => props.position};
    background-repeat: no-repeat;
    z-index:0;
    display: flex;
    margin-top:-15px;
    height: 80vh;
    width: 30vw;

    background-size:cover;

    @media (max-width: 1000px) {
        
        background-position: center center;
        background-size:cover;
        width: 100%;
        opacity: 0.2;
        animation: fadeOut 2s;

        @keyframes fadeOut { 0% {opacity: 1;} 100% {opacity: 0.2;}}
    }

    &:hover {

    background-image: url(${props => props.hover});
    animation: fadeOut 10s;

    @keyframes fadeOut { 0% {opacity: 1;} 100% {opacity: 0.3;}}

`

export const TitleTxt = styled.h1`
    font-size: clamp(5rem, 8vw, 8rem);
    font-weight: 900;
    letter-spacing: .5rem;
    line-height: 1.0;
    text-align: center;
    
    color: white;
`;

export const Txt = styled.p`
  display: block;
  font-size:clamp(2rem, 1vw, 1rem);
  color:white;
  position: absolute;
  top:15%;
  left: 35%;
  right: 35%;

`