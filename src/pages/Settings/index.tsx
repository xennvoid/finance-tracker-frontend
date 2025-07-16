import { FC } from 'react';
import Section from '@components/section';
import { Grid } from '@mui/material';
import UpdateProfileSection from './sections/update-profile-section';

interface SettingsPageProps {}

const SettingsPage: FC<SettingsPageProps> = ({}) => {
  return (
    <Grid container spacing={3}>
      <Section size={12}>
        <UpdateProfileSection />
      </Section>
    </Grid>
  );
};

export default SettingsPage;
