import ReactGA from 'react-ga4';

ReactGA.initialize(`G-0GS0GXHCBM`);

const recordEvent = (category: string, action: string) =>
  ReactGA.event({
    category,
    action,
  });

export default recordEvent;
