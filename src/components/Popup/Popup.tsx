import React, { useEffect } from 'react';

import notSuccessIco from './images/Failed.svg';
import successIco from './images/Success.svg';
import {
  PopupCloseButton,
  PopupContainer,
  PopupDescription,
  PopupIcon,
  PopupStyled,
} from './styled';

export const Popup: React.FC<{
  isOpen: () => void;
  onClose: () => void;
  text: string;
  isSuccess: boolean;
  opened: () => void;
}> = ({ isOpen, onClose, text, isSuccess }): JSX.Element => {
  useEffect(() => {
    if (!isOpen) return;

    const closeByEscape = (e: { key: string }) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeByEscape);
    // return () => document.removeEventListener('keydown', closeByEscape);
  }, [isOpen, onClose]);

  const handleOverlay = (e: { target: any; currentTarget: any }) => {
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
};
