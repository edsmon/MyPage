import React from 'react';
import { AboutHomeContainer, TitleTxt, ImageBg, Txt, StyledHr, WordContainter, Word } from './AboutHomeElements';
import img1 from '../../Assets/imgs/abs2.png';
import img1hover from '../../Assets/imgs/abs1.png';

const AboutHomeSection = () => {

    return (
        <AboutHomeContainer>
            <StyledHr />
            <TitleTxt>
                An idea it's the only <br /> source of truth
            </TitleTxt>
            <ImageBg url={img1} position="center left" hover={img1hover} />
            <Txt>
                I follow those interested in creating, innovating and entrepreneurship.
                The birth, growth and materialization of <WordContainter>  <Word> ideas </Word></WordContainter>  is a beautiful chaos that captivates me.
            </Txt>
            <StyledHr />
            <TitleTxt>
                ¿What are you thinking?
            </TitleTxt>

        </AboutHomeContainer>
    )
}

export default AboutHomeSection;
