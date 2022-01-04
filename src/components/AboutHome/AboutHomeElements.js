import styled from 'styled-components';


export const AboutHomeContainer = styled.div`
    height: 220vh;
    background: rgba(2,2,2,1);

    position: relative;

    box-shadow: 0px 20px  20px  black inset; 

  
    @media only screen and (max-width:1600px) {
        height: 220vh;
    }
`
export const ImageBg = styled.div`
    background-image: url(${props => props.url});
    background-position: ${props => props.position};
    background-repeat: no-repeat;
    z-index:0;
    display: flex;
    margin-top:-60px;
    height: 80vh;
    width: 25vw;

    background-size:cover;

    @media (max-width: 1200px) {
        
        background-position: center center;
        background-size:cover;
        width: 100%;
        opacity: 0.2;
        animation: fadeOut 2s;
        margin-top:-10px;
        

        @keyframes fadeOut { 0% {opacity: 1;} 100% {opacity: 0.2;}}
    }

    &:hover {
        
    background-image: url(${props => props.hover});
    animation: fadeOut 10s;

    @keyframes fadeOut { 0% {opacity: 1;} 100% {opacity: 0.1;}
    }

`

export const TitleTxt = styled.h1`
    font-size: clamp(3rem, 5.3vw, 5.3rem);
    font-weight: 900;
    letter-spacing: .5rem;
    line-height: 1.0;
    text-align: center;
    z-index:1;
    
    color: white;
`;

export const Txt = styled.p`
  display: block;
  font-size:clamp(1.9rem, 1.6vw, 1.6rem);
  color:white;
  text-align: center;

  position: absolute;
  top:22%;
  left: 30%;
  right: 30%;
  
  @media (max-width: 1200px) {
    top:20%;
    text-align: center;
    left: 20%;
    right: 20%;
    }
`
export const StyledHr = styled.hr`
  display: block;
  position: relative;
  margin-bottom: 3rem;

  background-image: linear-gradient(
    to right,
    #000000,
    #000000,
    #256ce1,
    #256ce1,
    #000000,
    #000000
  );
  border: 0;
  height: 1px;
`
export const WordContainter = styled.span`
  display: inline-block;
  &:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: transparent;
  bottom: 14px;
  transition: all 0.2s ease-out;
}
&:hover:before {
  transform: translateY(20px);
  background: #256ce1;
}
`

export const Word = styled.p`
    
    position: relative;
        
    background: linear-gradient(to bottom, #fff, #fff 60%, #256ce1 70%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-repeat: no-repeat;
    transition: background 0.2s ease-out;
    white-space: nowrap;

    &:hover {
        background-position: 0 11px;
        text-decoration: overline #256ce1 2px;   
    }
   
`
export const LowerTxt = styled.p`
    font-size:clamp(1rem, 1.2vw, 1.2rem);
    margin-top:10px;
    display: block;
    text-align: center;
    color: white;
`
export const GalleryContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15vmin;
    margin-top: 5vmin;
    overflow: hidden;
    transform: skew(5deg);
`
export const GalleryCard = styled.div`
    flex: 1;
    transition: all 1s ease-in-out;
    height: 60vmin;
    position: relative;

    &:hover {
      flex-grow: 10;
      img {
        filter: grayscale(0);
      }
    }
    &:not(:nth-child(6)) {
      margin-right: 1em;
    }
`
export const CardHead = styled.div`
    font-family: "Unica One", sans-serif;
    color: white;
    background: rgba(37, 108, 225, 0.85);
    padding: 0.5em;
    transform: rotate(-90deg);
    transform-origin: 0% 0%;
    transition: all 0.5s ease-in-out;
    min-width: 50%;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 1.3em;
    white-space: nowrap;

    &:hover {
        text-align: center;
        font-size: 2.5em;
        
      }
  @media (max-width: 600px) {
    padding: 0.3em;
    }
    
`
export const ImgCard = styled.img`
    src:${props => props.src};
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 1s ease-in-out;
    filter: grayscale(100%);
    

`