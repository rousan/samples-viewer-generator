import React from 'react';
import PropTypes from 'prop-types';

const IFrameLoader = props => (
  <div className="iframe-loader" style={props.style}>
    <div className="anim-holder">
      <img className="loader" width="40" src="images/loader.svg" alt="IFrame is loading" />
    </div>
  </div>
);

IFrameLoader.defaultProps = {
  style: {},
};

IFrameLoader.propTypes = {
  style: PropTypes.instanceOf(Object),
};

export default IFrameLoader;
