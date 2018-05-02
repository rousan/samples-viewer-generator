import React from 'react';
import PropTypes from 'prop-types';

const SampleLoadError = (props) => {
  const errorMessage = props.reason instanceof Error ? props.reason.message : props.reason;
  return (
    <div className="sample-load-error" style={props.style}>
      <h2>Sample could not be loaded</h2>
      <p>{String(errorMessage)}</p>
    </div>
  );
};

SampleLoadError.defaultProps = {
  reason: '',
  style: {},
};

SampleLoadError.propTypes = {
  style: PropTypes.instanceOf(Object),
  reason: PropTypes.oneOfType([
    PropTypes.instanceOf(Error),
    PropTypes.string,
  ]),
};

export default SampleLoadError;
