import React from 'react';
import PropTypes from 'prop-types';

const AppLoadError = (props) => {
  const errorMessage = props.reason instanceof Error ? props.reason.message : props.reason;
  return (
    <div className="app-loading-error">
      <h2>App could not be loaded, refresh to reload</h2>
      <p>{String(errorMessage)}</p>
    </div>
  );
};

AppLoadError.propTypes = {
  reason: PropTypes.oneOfType([
    PropTypes.instanceOf(Error),
    PropTypes.string,
  ]).isRequired,
};

export default AppLoadError;
