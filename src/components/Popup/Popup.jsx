import React, { useContext, useEffect } from 'react';

import { AuthContext } from '../../contexts';

import notSuccessIco from './images/Failed.svg';
import successIco from './images/Success.svg';
import {
  PopupCloseButton,
  PopupContainer,
  PopupDescription,
  PopupIcon,
  PopupStyled,
} from './styled';

export function Popup() {
  const { isOpen, onClose, isSuccess, text } = useContext(AuthContext);

  useEffect(() => {
    if (!isOpen) return;

    const closeByEscape = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeByEscape);
    // return () => document.removeEventListener('keydown', closeByEscape);
  }, [isOpen, onClose]);

  const handleOverlay = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <PopupStyled onClick={onClose} opened={isOpen}>
      <PopupContainer onClick={handleOverlay}>
        <PopupCloseButton type="button" onClick={onClose} />
        <PopupIcon
          src={isSuccess ? successIco : notSuccessIco}
          alt={
            isSuccess ? 'Иконка - всё успешно' : 'Иконка - что-то пошло не так'
          }
        />
        <PopupDescription>{text}</PopupDescription>
      </PopupContainer>
    </PopupStyled>
  );
}
