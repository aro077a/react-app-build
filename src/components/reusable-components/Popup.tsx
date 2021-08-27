import { FC } from 'react';

import Modal from 'react-modal';

import { PopupProps } from './models';

const Popup: FC<PopupProps> = ({
  children,
  isPopupOpen,
  closePopup,
  className,
  bgColor
}) => {
  return (
    // @ts-ignore
    <Modal
      isOpen={isPopupOpen}
      onRequestClose={closePopup}
      className={className}
      ariaHideApp={false}
      style={{
        overlay: {
          width: '100%',
          height: '100%',
          position: 'fixed',
          zIndex: '5',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: bgColor ? bgColor :'rgb(0, 0, 0)',
        },
      }}
    >
      {children}
    </Modal>
  );
};

export default Popup;
