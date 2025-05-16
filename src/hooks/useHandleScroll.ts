import { useCallback } from 'react';

export const useHandleScroll = () => {
  const handleScroll = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section instanceof HTMLElement) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return handleScroll;
}; 