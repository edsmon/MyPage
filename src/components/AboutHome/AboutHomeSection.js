import React from 'react';
import { AboutHomeContainer, TitleTxt, ImageBg, Txt, StyledHr, WordContainter, Word, LowerTxt, GalleryContainer, GalleryCard, CardHead, ImgCard } from './AboutHomeElements';
import img1 from '../../Assets/imgs/abs2.png';
import img1hover from '../../Assets/imgs/abs1.png';
import ideasImg from '../../Assets/imgs/Gallery1.png';
import analyzeImg from '../../Assets/imgs/Gallery2.png';
import divideImg from '../../Assets/imgs/Gallery3.png';
import PlanImg from '../../Assets/imgs/Gallery4.png';
import ImplementImg from '../../Assets/imgs/Gallery5.png';
import FollowUpImg from '../../Assets/imgs/Gallery6.png';

const AboutHomeSection = () => {

    return (
        <AboutHomeContainer>
            <StyledHr />
            <TitleTxt>
                An idea it's the only <br /> source of truth
            </TitleTxt>
            <ImageBg url={img1} position="center left" hover={img1hover} />
            <Txt>
                Hello, I'm Edward Stanley Monzon. I follow those interested in creating, innovating and entrepreneurship.
                The birth, growth and materialization of <WordContainter>  <Word> ideas </Word></WordContainter>  is a beautiful chaos that captivates me.
            </Txt>
            <StyledHr />
            <TitleTxt>
                Know my process
            </TitleTxt>
            <LowerTxt>
                Working with web projects requires a structured process that brings people together in a constructive, creative and organized way.
            </LowerTxt>
            <GalleryContainer>
                <GalleryCard>
                    <ImgCard src={ideasImg} />
                    <CardHead>Idea</CardHead>
                </GalleryCard>
                <GalleryCard>
                    <ImgCard src={analyzeImg} />
                    <CardHead>Analize</CardHead>
                </GalleryCard>
                <GalleryCard>
                    <ImgCard src={divideImg} />
                    <CardHead>Divide</CardHead>
                </GalleryCard>
                <GalleryCard>
                    <ImgCard src={PlanImg} />
                    <CardHead>Plan</CardHead>
                </GalleryCard>
                <GalleryCard>
                    <ImgCard src={ImplementImg} />
                    <CardHead>Implement</CardHead>
                </GalleryCard>
                <GalleryCard>
                    <ImgCard src={FollowUpImg} />
                    <CardHead>Follow-up</CardHead>
                </GalleryCard>
            </GalleryContainer>

        </AboutHomeContainer>
    )
}

export default AboutHomeSection;
