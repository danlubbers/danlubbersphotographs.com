import ReactGA from 'react-ga';
import config from '../../gatsby-config';

ReactGA.initialize(config.plugins[3].options.trackingIds[0]);

const recordEvent = (category: string, action: string) => {
  ReactGA.event({
    category,
    action,
  });
};

export default recordEvent;
