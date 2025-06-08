import { FC } from 'react';
import CommonTitleHeader from '@components/common-title-header';
import SectionContent from '@components/section-content';
import CustomCard from '@components/custom-card';
import WeeklyActivityChart from '@features/charts/components/weekly-activity-chart';
import { useWeeklyActivityChartData } from '@features/charts/hooks/use-weekly-activity-chart-data';
import { useActiveCardContext } from '@contexts/active-card-context';
import EmptyWeeklyActivityChart from '@features/charts/components/weekly-activity-chart/empty-weekly-activity-chart';

interface WeeklyActivityChartSectionProps {}

const WeeklyActivityChartSection: FC<WeeklyActivityChartSectionProps> = ({}) => {
  const { activeCard } = useActiveCardContext();
  const { weeklyActivityChartData } = useWeeklyActivityChartData({ cardId: activeCard?._id || '' });

  return (
    <>
      <CommonTitleHeader titleText="Weekly activity" />
      <SectionContent
        component={CustomCard}
        sx={{
          padding: 2,
        }}>
        {weeklyActivityChartData.length > 0 ? (
          <WeeklyActivityChart data={weeklyActivityChartData} />
        ) : (
          <EmptyWeeklyActivityChart />
        )}
      </SectionContent>
    </>
  );
};

export default WeeklyActivityChartSection;
