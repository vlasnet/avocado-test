import React from 'react';
import DynamicImport from 'components/Common/DynamicImport';

/**
 * Asynchronous component loading function
 *
 * @param {function} loader
 * @param {component} loading
 */
const LoadableComponent = ({ loader, loading: Loading }) => props => (
  <DynamicImport load={loader}>
    {Component => (Component ? <Component {...props} /> : <Loading />)}
  </DynamicImport>
);

export default LoadableComponent;
