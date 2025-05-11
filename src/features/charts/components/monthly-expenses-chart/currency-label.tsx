import { FC } from 'react';
import { useTheme } from '@mui/material';
import { LabelProps } from 'recharts';

type CurrencyLabelProps = { activeIndex: number } & LabelProps;

const CurrencyLabel: FC<CurrencyLabelProps> = ({
  x,
  y,
  width,
  value,
  index,
  activeIndex,
}: CurrencyLabelProps) => {
  const { palette } = useTheme();

  if (index !== activeIndex) return null;

  return (
    <text
      x={Number(x) + Number(width) / 2}
      y={Number(y) - 10}
      fill={palette.custom.titlePrimary}
      textAnchor="middle"
      fontSize={14}
      fontWeight="bold">
      ${value}
    </text>
  );
};

export default CurrencyLabel;
