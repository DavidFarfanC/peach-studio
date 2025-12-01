import { useEffect } from 'react';

const useRevealOnScroll = (selector = '.reveal') => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(selector));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);
};

export default useRevealOnScroll;
