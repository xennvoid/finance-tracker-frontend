import { useState } from 'react';

export const useToggle = () => {
  const [opened, setOpened] = useState(false);

  const toggleOpened = () => {
    setOpened(!opened);
  };

  return { opened, toggleOpened };
};
