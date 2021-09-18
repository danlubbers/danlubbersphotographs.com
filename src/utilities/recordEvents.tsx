const recordEvent = (category: string, action: string) => {
  if (typeof window !== `undefined`) {
    // UNCOMMENT BELOW for Production
    // window.gtag(`event`, action, {
    //   event_category: category,
    //   event_action: action,
    // });
  }
};

export default recordEvent;
