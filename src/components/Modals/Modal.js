import React from 'react';
import { ModalBg, ModalContainer, TitleClose, TitleCloseBtn, ModalTitle, TitleTxt, TitleTxtLink, ModalBody, ModalBodyTxt, ModalFooter, ModalFooterBtn } from './ModalElements'

function Modal({ setOpenModal }) {
    return (
        <>
            <ModalBg>
                <ModalContainer>
                    <TitleClose>
                        <TitleCloseBtn onClick={() => { setOpenModal(false); }}>X</TitleCloseBtn>
                    </TitleClose>
                    <ModalTitle>
                        <TitleTxtLink href="mailto:edward.m17@hotmail.com?Subject=Hi!%20Ed%20I%20need%20help%20with%20this">
                            <TitleTxt>edward.m17@hotmail.com</TitleTxt>
                        </TitleTxtLink>
                    </ModalTitle>
                    <ModalBody>
                        <ModalBodyTxt>Let me know what are you thinking</ModalBodyTxt>
                    </ModalBody>
                    <ModalFooter>
                        <ModalFooterBtn onClick={() => { setOpenModal(false); }}>Go back</ModalFooterBtn>
                    </ModalFooter>
                </ModalContainer>
            </ModalBg>
        </>
    )
}

export default Modal;
