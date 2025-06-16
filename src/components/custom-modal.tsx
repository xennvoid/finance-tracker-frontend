import { Modal, ModalProps } from '@mui/material';
import { FC } from 'react';
import CustomCard from './custom-card';

interface CustomModalProps extends ModalProps {}

const CustomModal: FC<CustomModalProps> = (props) => {
  const { children, ...other } = props;

  return (
    <Modal {...other}>
      <CustomCard
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          px: 3,
          pt: 4,
          pb: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          backgroundColor: 'white',
        }}>
        {children}
      </CustomCard>
    </Modal>
  );
};

export default CustomModal;
