import { useEffect } from 'react';
import ReactDOM from 'react-dom';

// Use a ternary operator to make sure that the document object is defined
const portalRoot =
  typeof document !== `undefined` ? document.getElementById(`portal`) : null;

const Portal: React.FC = (props) => {
  const { children } = props;

  // Use a ternary operator to make sure that the document object is defined
  const element =
    typeof document !== `undefined` ? document.createElement(`div`) : null;

  useEffect(() => {
    portalRoot.appendChild(element);
    document.body.style.overflow = `hidden`; // Disables scrolling when modal is present

    return () => {
      portalRoot.removeChild(element);
      document.body.style.overflow = `unset`;
    };
  }, [element]);

  // Check that element is not null before using ReactDOM.createPortal
  if (element) {
    return ReactDOM.createPortal(children, element);
  }
  return null;
};

export default Portal;
