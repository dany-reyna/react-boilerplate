import React, { Suspense, lazy } from 'react';
import './Section.css';

const Section = () => {
  const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

  const LazyOtherComponent = lazy(() =>
    timeout(3000)
      .then(() => {
        return import('./OtherComponent');
      })
      .catch(error => {
        throw error;
      }),
  );

  return (
    <div className="section">
      <h1>Section</h1>
      <Suspense fallback={<h3>Loading...</h3>}>
        <LazyOtherComponent />
      </Suspense>
    </div>
  );
};

export default Section;
