export const trackPageView = (tab) => {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_path: tab === 'home' ? '/' : `/#${tab}`,
    page_title: tab,
  });
};
