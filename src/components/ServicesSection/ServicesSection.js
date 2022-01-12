import React from 'react';
import { ServicesContainer, Title, Subtitle, StyledList, Service1, Service2, CtaServices } from './ServicesSectionElements'


const ServicesSection = () => {
    return (
        <>
            <ServicesContainer>
                <Title>Development and Education. My tools. </Title>
                <Service1>
                    <Subtitle>Web Desing</Subtitle>
                    <StyledList>HTML5</StyledList>
                    <StyledList>Css3</StyledList>
                    <StyledList>JavaScript (ES6)</StyledList>
                    <StyledList>ReactJS</StyledList>
                    <StyledList>Wordpress</StyledList>
                </Service1>
                <Service2>
                    <Subtitle>Vocational guide</Subtitle>
                    <StyledList>Learning difficulties. Discipline. Goal setting.</StyledList>
                    <Subtitle>Instructional designs</Subtitle>
                    <StyledList>Architecture of learning experiences.</StyledList>
                    <Subtitle>Academic research</Subtitle>
                    <StyledList>Thesis format, sections, research techniques. </StyledList>
                </Service2>
                <CtaServices>I'm interested</CtaServices>
            </ServicesContainer>
        </>
    )
}

export default ServicesSection;
