import { FC } from 'react';
import SectionContent from '@components/section-content';
import CustomCard from '@components/custom-card';
import MonthlyExpensesChart from '@features/charts/components/monthly-expenses-chart/monthly-expenses-chart';
import CommonTitleHeader from '@components/common-title-header';
import { useMonthlyExpensesChartData } from '@features/charts/hooks/use-monthly-expenses-chart-data';
import { useChartActiveIndex } from '@features/charts/hooks/use-chart-active-index';
import { useActiveCardContext } from '@contexts/active-card-context';
import EmptyMonthlyExpensesChart from '@features/charts/components/monthly-expenses-chart/empty-monthly-expenses-chart';

interface ExpensesSectionProps {}

const MonthlyExpensesChartSection: FC<ExpensesSectionProps> = ({}) => {
  const { activeCard } = useActiveCardContext();

  const { expensesChartData } = useMonthlyExpensesChartData({
    previousMonthsAmount: 5,
    cardId: activeCard?._id || '',
  });

  const { activeIndex, handleActiveIndexChange } = useChartActiveIndex(
    expensesChartData.length - 1,
  );

  const noChartData = expensesChartData.length === 0;

  return (
    <>
      <CommonTitleHeader titleText="My expenses" />
      <SectionContent
        component={CustomCard}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: noChartData ? 'unset' : 'center',
          padding: 2,
          overflowY: 'hidden',
          ...(noChartData ? { flexGrow: 0 } : {}),
        }}>
        {noChartData ? (
          <EmptyMonthlyExpensesChart />
        ) : (
          <MonthlyExpensesChart
            chartData={expensesChartData}
            activeIndex={activeIndex}
            handleActiveIndexChange={handleActiveIndexChange}
          />
        )}
      </SectionContent>
    </>
  );
};

export default MonthlyExpensesChartSection;
