const recordEvent = (event: string, category: string, action: string) => {
  if (typeof window !== `undefined`) {
    window.gtag(event, action, { category });
  }
};

export default recordEvent;
