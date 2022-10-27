import React from 'react';
import * as styles from './ErrorBoundary.module.scss';

function ErrorBoundary({ url }) {
  return (
    <div className={styles.errorBoundaryWrapper}>
      <h1>
        Sorry, the page &ldquo;<em>{url}</em> &ldquo; you are looking for does
        not exist!
      </h1>
      <h2>Please Navigate from the list above.</h2>
    </div>
  );
}

export default ErrorBoundary;
