import { FC } from 'react';
import { Grid, GridProps } from '@mui/material';

interface SectionProps extends GridProps {}

const Section: FC<SectionProps> = ({ children, sx, ...rest }) => (
  <Grid
    sx={{
      display: 'flex',
      flexDirection: 'column',
      ...sx,
    }}
    {...rest}>
    {children}
  </Grid>
);

export default Section;
