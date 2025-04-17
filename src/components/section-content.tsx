import { FC, ReactNode } from 'react';
import { Box, BoxProps } from '@mui/material';

interface SectionContentProps extends BoxProps {
  children: ReactNode;
}

const SectionContent: FC<SectionContentProps> = ({ children, sx, ...rest }) => (
  <Box
    sx={{
      flexGrow: 1,
      ...sx,
    }}
    {...rest}>
    {children}
  </Box>
);

export default SectionContent;
