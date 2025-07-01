import { FC } from 'react';
import { Box, InputLabel, SxProps, TextField, TextFieldProps } from '@mui/material';
import { mergeSx } from '@utils/merge-sx';

export type CustomTextFieldProps = TextFieldProps & { containerSx?: SxProps };

const CustomTextField: FC<CustomTextFieldProps> = ({ sx, label, id, containerSx, ...other }) => {
  const inputId = id ?? other.name;
  const labelId = `${inputId}-label`;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, ...containerSx }}>
      {label && (
        <InputLabel
          id={labelId}
          htmlFor={inputId}
          sx={(theme) => ({
            color: theme.palette.custom.textPrimary,
          })}>
          {label}
        </InputLabel>
      )}
      <TextField
        id={other.select ? undefined : inputId}
        slotProps={{
          input: {
            id: inputId,
            'aria-hidden': other.select ? false : undefined,
          },
          htmlInput: {
            'aria-hidden': other.select ? false : undefined,
          },
        }}
        sx={mergeSx(
          (theme) => ({
            '& fieldset': {
              border: 'none',
            },
            '& .MuiInputBase-root': {
              color: theme.palette.custom.textPrimary,
              border: `1px solid #dfeaf2`,
              borderRadius: 4,
            },
            '& .MuiInputBase-input::placeholder': {
              opacity: 1,
              color: theme.palette.custom.titleSecondary,
            },
          }),
          sx,
        )}
        {...other}
      />
    </Box>
  );
};

export default CustomTextField;
