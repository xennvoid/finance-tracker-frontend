import { FC } from 'react';
import CommonTitleHeader from '@components/common-title-header';
import CustomCard from '@components/custom-card';
import SectionContent from '@components/section-content';
import MonthlySummaryChart from '@features/charts/components/monthly-summary-chart';
import { useMonthlySummaryChartData } from '@features/charts/hooks/use-monthly-summary-chart-data';
import { useActiveCardContext } from '@contexts/active-card-context';
import EmptyMonthlySummaryChart from '@features/charts/components/monthly-summary-chart/empty-monthly-summary-chart';

interface MonthlySummaryChartSectionProps {}

const MonthlySummaryChartSection: FC<MonthlySummaryChartSectionProps> = ({}) => {
  const { activeCard } = useActiveCardContext();

  const { summaryChartData } = useMonthlySummaryChartData({
    cardId: activeCard?._id || '',
  });

  return (
    <>
      <CommonTitleHeader titleText="Monthly Summary" />
      <SectionContent
        component={CustomCard}
        sx={{
          padding: 2,
        }}>
        {summaryChartData.length === 0 ? (
          <EmptyMonthlySummaryChart />
        ) : (
          activeCard && (
            <MonthlySummaryChart chartData={summaryChartData} currency={activeCard.currency} />
          )
        )}
      </SectionContent>
    </>
  );
};

export default MonthlySummaryChartSection;
