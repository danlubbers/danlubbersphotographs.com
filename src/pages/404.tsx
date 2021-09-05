import React from 'react';
import { PageProps } from 'gatsby';
import recordEvent from 'utilities/recordEvents';

const NotFound: React.FC<PageProps> = () => (
  <main>
    {recordEvent(`Photo: 404 Page`, `User found the 404 Page!!!`)}
    <p>Sorry, page not found!</p>
  </main>
);

export default NotFound;
