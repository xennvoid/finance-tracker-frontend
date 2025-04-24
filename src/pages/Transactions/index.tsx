import { FC } from 'react';
import CommonTitleHeader from '@components/common-title-header';
import Section from '@components/section';
import PaymentCards from '@features/payment-card/components/payment-cards';
import { useGetCardsQuery } from '@features/payment-card/hooks/use-get-cards-query';
import TransactionsTable from '@features/transactions/components/transactions-table';
import { Grid } from '@mui/material';
import { ROUTES } from '@routes/routes';
import TransactionsTableTabs from '@features/transactions/components/transactions-table/transactions-table-tabs';
import { useTransactionsTableData } from '@features/transactions/hooks/use-transactions-table-data';
import { useTransactionsTableFilter } from '@features/transactions/hooks/use-transactions-table-filter';
import TransactionsTablePaginations from '@features/transactions/components/transactions-table/transactions-table-pagination';
import { usePagination } from '@hooks/use-pagination';

interface TransactionsPageProps {}

const CARDS_AMOUNT = 2;

const TransactionsPage: FC<TransactionsPageProps> = ({}) => {
  const { data, isLoading } = useGetCardsQuery(CARDS_AMOUNT);
  const cards = data?.data || [];

  const { transactionsTypeFilter, handleTransactionsTypeFilterChange } =
    useTransactionsTableFilter();

  const { page, setPage, handlePageChange } = usePagination();

  const { transactions, pagination } = useTransactionsTableData(transactionsTypeFilter, page);

  return (
    <Grid container spacing={3}>
      <Section size={{ xs: 12, md: 6, lg: 8 }}>
        <CommonTitleHeader titleText="My Cards" linkText="+ Add Card" linkTo={ROUTES.CARDS} />
        <PaymentCards isLoading={isLoading} cards={cards} cardsAmount={CARDS_AMOUNT} />
      </Section>
      <Section size={{ xs: 12, md: 6, lg: 4 }}>
        <CommonTitleHeader titleText="My expenses" />
      </Section>
      <Section size={12} sx={{ '& > :nth-of-type(2)': { mb: 3 } }}>
        <CommonTitleHeader titleText="Transactions" />
        <TransactionsTableTabs
          filterValue={transactionsTypeFilter}
          handleFilterChange={(e, v) => {
            handleTransactionsTypeFilterChange(e, v);
            setPage(1);
          }}
        />
        <TransactionsTable transactions={transactions} />
        {pagination && (
          <TransactionsTablePaginations
            page={pagination.page}
            count={pagination.totalPages}
            onChange={handlePageChange}
          />
        )}
      </Section>
    </Grid>
  );
};

export default TransactionsPage;
