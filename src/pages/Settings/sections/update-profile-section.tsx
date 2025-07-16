import { FC } from 'react';
import SectionContent from '@components/section-content';
import CustomCard from '@components/custom-card';
import UpdateUserForm from '@features/user/components/update-user-form';

interface UpdateProfileSectionProps {}

const UpdateProfileSection: FC<UpdateProfileSectionProps> = ({}) => {
  return (
    <SectionContent component={CustomCard} sx={{ p: { xs: 3, md: 4 } }}>
      <UpdateUserForm />
    </SectionContent>
  );
};

export default UpdateProfileSection;
