import { useEffect, useState } from 'react';

export const useChartActiveIndex = (index: number) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndexChange = (_: unknown, index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    setActiveIndex(index);
  }, [index]);

  return { activeIndex, setActiveIndex, handleActiveIndexChange };
};
