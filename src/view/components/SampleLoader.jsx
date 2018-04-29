import React from 'react';
import PropTypes from 'prop-types';

const SampleLoader = props => (
  <div className="sample-loader" style={props.style}>
    <div className="anim-holder">
      <img className="loader" src="images/loader.svg" alt="Sample is loading" />
    </div>
  </div>
);

SampleLoader.defaultProps = {
  style: {},
};

SampleLoader.propTypes = {
  style: PropTypes.instanceOf(Object),
};

export default SampleLoader;
