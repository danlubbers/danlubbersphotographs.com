import ReactGA from 'react-ga';

ReactGA.initialize(`UA-1733817-2`);

const recordEvent = (category: string, action: string) => {
  ReactGA.event({
    category,
    action,
  });
};

export default recordEvent;
