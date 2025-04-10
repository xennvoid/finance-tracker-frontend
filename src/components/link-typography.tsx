import { FC, ReactNode } from 'react';
import TitleTypography from './title-typography';
import { Link, LinkProps } from 'react-router';

interface LinkTypographyProps extends LinkProps {
  children?: ReactNode;
}

const LinkTypography: FC<LinkTypographyProps> = ({ children, ...props }) => {
  return (
    <Link style={{ textDecoration: 'none' }} {...props}>
      <TitleTypography variant="subtitle1">{children}</TitleTypography>
    </Link>
  );
};

export default LinkTypography;
