import React, { useEffect, useState } from 'react';

import {
  BackDropModalShadow,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalWrapper,
} from './GenericModal.styles';

const timer = (time: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, time);
  });

const GenericModalComponent = (props: {
  width: string;
  minHeight: string;
  title: string;
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}) => {
  const [isRendered, setIsRendered] = useState<boolean>(false);
  const [isOpenAnimation, setIsOpenAnimation] = useState<boolean>(false);

  useEffect(() => {
    if (props.isOpen !== isRendered) changeAnimation(props.isOpen);
  }, [props.isOpen]);

  const changeAnimation = async (isOpen: boolean) => {
    if (isOpen) {
      setIsRendered(true);
      process.env.NODE_ENV !== 'test' && (await timer(100));
      setIsOpenAnimation(true);
    } else {
      setIsOpenAnimation(false);
      process.env.NODE_ENV !== 'test' && (await timer(600));
      setIsRendered(false);
    }
  };

  const onClickHandler = () => {
    props.onClose();
  };

  return (
    <div>
      {isRendered ? (
        <BackDropModalShadow $isOpen={isOpenAnimation}>
          <ModalWrapper width={props.width} $minHeight={props.minHeight}>
            <ModalHeader>
              <ModalCloseButton onClick={onClickHandler} data-testid="modalCloseButton"></ModalCloseButton>
              <ModalTitle
                style={{ color: '#333', marginLeft: '20px', textAlign: 'center', width: '100%', fontSize: '23px' }}
              >
                {props.title}
              </ModalTitle>
            </ModalHeader>
            <ModalContent>{props.children}</ModalContent>
          </ModalWrapper>
        </BackDropModalShadow>
      ) : null}
    </div>
  );
};

export default GenericModalComponent;
