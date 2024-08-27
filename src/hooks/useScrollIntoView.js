// src/hooks/useScrollIntoView.js
import { useEffect } from 'react';

const useScrollIntoView = (selectors) => {
  useEffect(() => {
    const handleScroll = (sectionId) => {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const addEventListeners = (elements, eventHandler) => {
      return elements.map((selector) => {
        const element = document.querySelector(selector);
        if (element) {
          const href = element.getAttribute('href');
          if (href) {
            const sectionId = href;
            const listener = () => eventHandler(sectionId);
            element.addEventListener('click', listener);
            return { element, listener };
          }
        }
        return null;
      }).filter(item => item !== null);
    };

    const sidebarLinks = addEventListeners(selectors.sidebar, handleScroll);
    const headerLinks = addEventListeners(selectors.header, handleScroll);

    return () => {
      const removeEventListeners = (listeners) => {
        listeners.forEach(({ element, listener }) => {
          element.removeEventListener('click', listener);
        });
      };

      removeEventListeners(sidebarLinks);
      removeEventListeners(headerLinks);
    };
  }, [selectors]);
};

export default useScrollIntoView;
