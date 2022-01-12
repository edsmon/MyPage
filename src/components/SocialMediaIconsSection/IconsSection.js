import React from 'react';

import { IconsContainer, Icons, TitleIcons, LinkIcon } from './IconsSectionElements';
import './IconsSection.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';

const IconsSection = () => {
    return (
        <IconsContainer>
            <TitleIcons>Find me being and creating over here: </TitleIcons>
            <Icons>
                <LinkIcon href="https://github.com/edsmon" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="3x" transform="left-4" />
                </LinkIcon>
                <LinkIcon href="https://www.linkedin.com/in/edsmon" target="_blank">
                    <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
                </LinkIcon>
                <LinkIcon href="https://www.instagram.com/edsmon.ed/?hl=es-la" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} size="3x" transform="right-4" />
                </LinkIcon>
                <LinkIcon href="#">
                    <FontAwesomeIcon icon={faGoogle} size="3x" transform="right-7" />
                </LinkIcon>
            </Icons>
        </IconsContainer>
    )
}

export default IconsSection
