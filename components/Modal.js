// components/Modal.js

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import Cross from '@components/icons/Cross';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    const handleOutsideClick = (e) => {
      if (e.target.classList.contains(styles.modalOverlay) && isOpen) {
        onClose();
      }
    };

    const disableScroll = () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden';
      }
    };

    const enableScroll = () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'auto';
      }
    };

    if (isOpen) {
      disableScroll();
    } else {
      enableScroll();
    }

    if (typeof document !== 'undefined') {
      document.addEventListener('keydown', handleKeyPress);
      document.addEventListener('click', handleOutsideClick);

      return () => {
        document.removeEventListener('keydown', handleKeyPress);
        document.removeEventListener('click', handleOutsideClick);
        enableScroll();
      };
    }
  }, [isOpen, onClose]);

  const modalRoot = typeof document !== 'undefined' ? document.getElementById('modal-root') : null;

  return isOpen && modalRoot
    ? createPortal(
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <button 
            onClick={onClose}
            style={{
              display: 'block',
              top: '1rem',
              marginLeft: 'auto',
              border: 'none',
              cursor: 'pointer',
            }}
          ><Cross /></button>
          {children}
        </div>
      </div>,
      modalRoot
    )
    : null;
};

export default Modal;
