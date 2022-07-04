/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.scss';
import ButtonSecondary from '../buttons/ButtonSecondary';


interface Props {
  modalActive: boolean,
  onClose: () => void,
  children: React.ReactNode,
  title?: string,
}

function Modal({
  modalActive, onClose, title, children,
}: Props) {
  const closeOnEscapeKeyDown = (e: KeyboardEvent): any => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!modalActive) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
        {title && (
          <div className={styles.modal__header}>
            <h4 className={styles.modal__title}>{title}</h4>
          </div>
        )}
        <div className={styles.modal__body}>{children}</div>
        <div className={styles.modal__footer}>
          <ButtonSecondary onClick={onClose} className="button">
            Close
          </ButtonSecondary>
        </div>
      </div>
    </div>,
    document.getElementById('root')!,
  );
}

export default Modal;
