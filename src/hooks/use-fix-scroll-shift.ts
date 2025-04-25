import { useLayoutEffect } from 'react';

export const useFixScrollShift = () => {
  useLayoutEffect(() => {
    document.body.style.overflowY = 'scroll';
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);
};
