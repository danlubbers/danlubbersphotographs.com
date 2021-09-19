const recordEvent = (category: string, action: string) => {
  if (typeof window !== `undefined`) {
    window.gtag(`event`, action, {
      event_category: category,
      event_action: action,
    });
  }
};

export default recordEvent;
