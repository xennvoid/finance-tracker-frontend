import { FC } from 'react';
import SectionContent from '@components/section-content';
import CustomCard from '@components/custom-card';
import MonthlyExpensesChart from '@features/charts/components/monthly-expenses-chart/monthly-expenses-chart';
import CommonTitleHeader from '@components/common-title-header';
import { useMonthlyExpensesChartData } from '@features/charts/hooks/use-monthly-expenses-chart-data';
import { useChartActiveIndex } from '@features/charts/hooks/use-chart-active-index';

interface ExpensesSectionProps {}

const MonthlyExpensesChartSection: FC<ExpensesSectionProps> = ({}) => {
  const { expensesChartData } = useMonthlyExpensesChartData();

  const { activeIndex, handleActiveIndexChange } = useChartActiveIndex(
    expensesChartData.length - 1,
  );

  return (
    <>
      <CommonTitleHeader titleText="My expenses" />
      <SectionContent
        component={CustomCard}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 2,
          overflowY: 'hidden',
        }}>
        <MonthlyExpensesChart
          chartData={expensesChartData}
          activeIndex={activeIndex}
          handleActiveIndexChange={handleActiveIndexChange}
        />
      </SectionContent>
    </>
  );
};

export default MonthlyExpensesChartSection;
