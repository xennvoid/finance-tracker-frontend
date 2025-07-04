import { FC } from 'react';
import CustomTextField from '@components/custom-text-field';
import { useCreateTransactionForm } from '@features/transactions/hooks/use-create-transaction-form';
import { Box, MenuItem } from '@mui/material';
import { Controller } from 'react-hook-form';
import CustomButton from '@components/custom-button';
import CreateTransactionModalDetails from './create-transaction-modal-details';
import { ICard } from '@features/payment-card/types/card.types';
import SpriteSvg from '@components/sprite-svg';
import { useAIReceiptScan } from '@features/transactions/hooks/use-ai-receipt-scan';

interface CreateTransactionFormProps {
  card: ICard;
}

const CreateTransactionForm: FC<CreateTransactionFormProps> = ({ card }) => {
  const { control, handleSubmit, onSubmit, watch, setValue } = useCreateTransactionForm();

  const { fileRef, handleScanClick, scanReceiptWithAI, isScanningReceipt } =
    useAIReceiptScan(setValue);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit((data) => onSubmit(data, card._id))}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        gap: { xs: 2, md: 3 },
      }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 2, md: 3 },
        }}>
        <Controller
          name="description"
          control={control}
          rules={{
            required: 'Title is required',
          }}
          render={({ field, fieldState }) => (
            <CustomTextField
              {...field}
              containerSx={{ gridColumn: 'span 2' }}
              onChange={(e) => field.onChange(e.target.value)}
              placeholder="Laptop"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              label="Title"
            />
          )}
        />
        <Controller
          name="amount"
          control={control}
          rules={{
            required: 'Amount is required',
          }}
          render={({ field, fieldState }) => (
            <CustomTextField
              {...field}
              type="number"
              onChange={(e) => field.onChange(e.target.value)}
              placeholder="Enter amount"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              label="Amount"
              sx={{
                '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                  display: 'none',
                },
                '& input[type=number]': {
                  MozAppearance: 'textfield',
                },
              }}
            />
          )}
        />
        <Controller
          name="type"
          control={control}
          render={({ field, fieldState }) => (
            <CustomTextField
              {...field}
              select
              onChange={(e) => field.onChange(e.target.value)}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              label="Transaction type">
              {[
                { value: 'income', label: 'Income' },
                { value: 'expense', label: 'Expense' },
              ].map(({ value, label }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </CustomTextField>
          )}
        />
        <Controller
          name="text"
          control={control}
          render={({ field, fieldState }) => (
            <CustomTextField
              {...field}
              sx={{ overflowY: 'auto' }}
              containerSx={{ gridColumn: 'span 2' }}
              onChange={(e) => field.onChange(e.target.value)}
              placeholder="Bought MacBook Air from Apple Store..."
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              label="Additional info"
              multiline
              minRows={5}
              maxRows={5}
            />
          )}
        />
        <input
          ref={fileRef}
          type="file"
          style={{ display: 'none' }}
          accept="image/*"
          onChange={scanReceiptWithAI}
        />
      </Box>
      <CustomButton
        disabled={isScanningReceipt}
        sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#000' }}
        onClick={handleScanClick}>
        Scan receipt with AI
        <SpriteSvg id="magicpen" spritePath="/transaction-sprite" fill="#fff" />
      </CustomButton>
      {card && (
        <CreateTransactionModalDetails
          card={card}
          amount={Number(watch('amount'))}
          transactionType={watch('type')}
        />
      )}
      <CustomButton type="submit" fullWidth>
        Create Transaction
      </CustomButton>
    </Box>
  );
};

export default CreateTransactionForm;
