import React from 'react';
import PropTypes from 'prop-types';

let preventCacheRendering = 0;
const FrameView = (props) => {
  console.log('Frame view', props.url);
  // Here create iframe node every time instead of changing src attribute
  // so then, some problems on safari or chrome will be resolved.
  const iframeHTML = `<iframe width="100%" height="100%" src="${props.url}" frameBorder="0">
                          Chart could not be loaded due to your browser does not support iframe
                      </iframe>
                      <span style="display: none">
                          ${preventCacheRendering += 1}
                      </span>`;
  return (
    <div style={props.style} dangerouslySetInnerHTML={{ __html: iframeHTML }} />
  );
};

FrameView.propTypes = {
  url: PropTypes.string.isRequired,
  style: PropTypes.instanceOf(Object).isRequired,
};

export default FrameView;
