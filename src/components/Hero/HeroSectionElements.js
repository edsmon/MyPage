import styled from 'styled-components';
import HeroTemp from '../../Assets/imgs/HeroTemp.jpeg'

export const MainTitle = styled.h1`
    color: white;

    `
export const HeroContainer = styled.div`

    height: 100vh;

    background-image:  linear-gradient( to top right, rgba(11, 10, 10, 0.38), rgba(11, 10, 10, 0.19)), url(${HeroTemp});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: -80px;

    display: flex;
    justify-content: center;
    align-items: center; 
  
    @media only screen and (max-width:1600px) {
    height: 110vh;
}
    
    `