import { FC } from 'react';
import CommonTitleHeader from '@components/common-title-header';
import SectionContent from '@components/section-content';
import PaymentCardsPreviewList from '@features/payment-card/components/payment-card-preview/payment-card-preview-list';
import { usePagination } from '@hooks/use-pagination';
import { useCardsData } from '@features/payment-card/hooks/use-cards-data';
import CustomPagination from '@components/custom-pagination';
import { CardListPaginationProvider } from '@features/payment-card/context/card-list-pagination-context';

interface CardListSectionProps {}

const CardListSection: FC<CardListSectionProps> = ({}) => {
  const { page, setPage, handlePageChange } = usePagination();

  const { data, pagination } = useCardsData({ page });

  return (
    <>
      <CommonTitleHeader titleText="Card List" />
      <SectionContent
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <CardListPaginationProvider setPage={setPage}>
          <PaymentCardsPreviewList data={data} />
        </CardListPaginationProvider>
        {pagination && (
          <CustomPagination page={page} count={pagination.totalPages} onChange={handlePageChange} />
        )}
      </SectionContent>
    </>
  );
};

export default CardListSection;
