import React from 'react'
import { HeroTitle, HeroContainer, HeroTitleText, HeroTitleTextLower, Words } from './HeroSectionElements'

const HeroSection = () => {
    return (
        <>
            <HeroContainer>
                <HeroTitle>
                    <HeroTitleText title="Creative">Creative</HeroTitleText>
                </HeroTitle>
                <HeroTitleTextLower>
                    <Words />
                </HeroTitleTextLower>
            </HeroContainer>
        </>
    )
}

export default HeroSection
