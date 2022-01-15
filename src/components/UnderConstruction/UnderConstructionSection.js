import React from 'react';
import { HeroTitle, HeroTitleText } from '../Hero/HeroSectionElements';
import { UCContainer } from './UnderConstructionSectionElements';

const UnderConstructionSection = () => {
    return (
        <>
            <UCContainer>
                <HeroTitle>
                    <HeroTitleText title="Under Construction">Under Construction</HeroTitleText>
                </HeroTitle>
            </UCContainer>
        </>
    )
}

export default UnderConstructionSection;
