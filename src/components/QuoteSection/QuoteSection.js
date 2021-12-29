import React, { useState, useEffect } from 'react';
import { QuoteContainer, QuoteText, QuoteStyledText, QuoteButton, PhraseContainer, Phrase, Author } from './QuoteSectionElements';
import phrases from '../../Assets/PhrasesData/PhrasesData.json'

const PhrasesDiv = (phrases) => {
    return (
        <>
            <Phrase> {phrases.phrase} </Phrase>
            <Author> {phrases.author} </Author>
        </>
    )
}

const QuoteSection = () => {
    const [quoteIndex, setQuoteIndex] = useState(0)
    const setNewQuote = () => {
        setQuoteIndex(Math.floor(Math.random() * phrases.length));
    }

    const Expire = props => {
        const [visible, setVisible] = useState(true);

        useEffect(() => {
            setTimeout(() => {
                setVisible(false);
            }, props.delay);
        }, [props.delay]);

        return visible ? <div>{props.children}</div> : <div />;
    };

    return (
        <>
            <QuoteContainer>
                <QuoteText>My mindset in pieces. ¿Which one align  <QuoteStyledText /></QuoteText>
                <QuoteButton onClick={setNewQuote}>Let me see</QuoteButton>
                <PhraseContainer>
                    <Expire delay="9000">
                        <PhrasesDiv {...phrases[quoteIndex]} />
                    </Expire>
                </PhraseContainer>

            </QuoteContainer>

        </>
    );
}

export default QuoteSection;
