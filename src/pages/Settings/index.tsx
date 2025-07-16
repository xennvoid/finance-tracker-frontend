import { FC } from 'react';
import Section from '@components/section';
import { Grid } from '@mui/material';

interface SettingsPageProps {}

const SettingsPage: FC<SettingsPageProps> = ({}) => {
  return (
    <Grid container spacing={3}>
      <Section size={12}></Section>
    </Grid>
  );
};

export default SettingsPage;
