import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components/macro';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ children, isModalOpen, handleOnClose }) => {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }
    const { current: modal } = modalRef;

    if (isModalOpen) {
      previousActiveElement.current = document.activeElement;
      modal.showModal();
    } else if (previousActiveElement.current) {
      modal.close();
      previousActiveElement.current.focus();
    }
  }, [isModalOpen]);

  useEffect(() => {
    const { current: modal } = modalRef;

    const handleCancel = (event) => {
      event.preventDefault();
      handleOnClose();
    };

    modal.addEventListener('cancel', handleCancel);

    return () => {
      modal.removeEventListener('cancel', handleCancel);
    };
  }, [handleOnClose]);

  return ReactDOM.createPortal(
    <ModalStyled ref={modalRef}>
      <CloseButton onClick={handleOnClose}>
        <AiOutlineClose />
      </CloseButton>
      {children}
    </ModalStyled>,
    document.body,
  );
};

const ModalStyled = styled.dialog`
  border: none;
  position: fixed;
  width: 95%;
  max-width: 600px;
  left: 50%;
  padding: 24px;
  border-radius: 8px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary};
  transform: translateX(-50%);
  z-index: 100;

  &::backdrop {
    backdrop-filter: blur(2px);
  }
`;

const CloseButton = styled.button`
  cursor: pointer;
  margin-left: auto;
  display: block;
  width: 28px;
  height: 28px;
  background: none;
  outline: 0;
  border: 0;

  svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.color.white};
  }
`;

export default Modal;
