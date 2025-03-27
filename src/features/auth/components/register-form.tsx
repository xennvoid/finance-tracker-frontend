import { FC } from 'react';
import AuthFormWrapper from './auth-form-wrapper';
import AuthInput from './auth-input';
import { Typography } from '@mui/material';
import FormError from './form-error';
import AuthFormButton from './auth-form-button';
import AuthFormFooter from './auth-form-footer';
import { ROUTES } from '@routes/routes';
import { useRegisterMutation } from '../hooks/use-register-mutation';

interface RegisterFormProps {}

const RegisterForm: FC<RegisterFormProps> = ({}) => {
  const { mutate, isError, error } = useRegisterMutation();

  return (
    <AuthFormWrapper action={mutate}>
      <Typography variant="h5" fontWeight={700}>
        Create an account
      </Typography>
      <AuthInput name="firstName" inputTitle="First Name" placeholder="Enter your first name" />
      <AuthInput name="lastName" inputTitle="Last Name" placeholder="Enter your last name" />
      <AuthInput name="email" inputTitle="Email" type="email" placeholder="Enter your email" />
      <AuthInput
        name="password"
        inputTitle="Password"
        type="password"
        placeholder="Enter your password"
        autoComplete="off"
      />
      <FormError isError={isError} message={error?.message || ''} />
      <AuthFormButton>Create account</AuthFormButton>
      <AuthFormFooter
        textBelow="Already have an account ?"
        linkText="Log in"
        linkPath={ROUTES.LOGIN}
      />
    </AuthFormWrapper>
  );
};

export default RegisterForm;
