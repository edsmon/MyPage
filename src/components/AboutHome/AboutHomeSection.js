import React, { useEffect, useState } from 'react';
import { AboutHomeContainer, TitleTxt, ImageBg, Txt } from './AboutHomeElements';
import img1 from '../../Assets/imgs/abs2.png';
import img1hover from '../../Assets/imgs/abs1.png';

import img2 from '../../Assets/imgs/abs3.png';
import img2hover from '../../Assets/imgs/abs4.png';



const AboutHomeSection = () => {

    return (
        <AboutHomeContainer>

            <TitleTxt>
                Hello Motherf
            </TitleTxt>
            <ImageBg url={img1} position="center left" hover={img1hover} />
            <Txt>Here i am, piece of content for testing the position of information.</Txt>
            <TitleTxt>
                Hello Motherf
            </TitleTxt>

        </AboutHomeContainer>
    )
}

export default AboutHomeSection;
