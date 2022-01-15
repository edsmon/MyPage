import styled from 'styled-components';
import { HeroContainer } from '../Hero/HeroSectionElements';
import UCBG from '../../Assets/imgs/UnderConstruction.jpeg'

export const UCContainer = styled(HeroContainer)`
    background-image:  linear-gradient( to top right, rgba(11, 10, 10, 0.70), rgba(11, 10, 10, 0.40)), url(${UCBG});
    height: 100vh;
`