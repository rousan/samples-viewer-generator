import React from 'react';
import PropTypes from 'prop-types';
import SampleTabView from './SampleTabView';
import SampleLoadError from '../components/SampleLoadError';
import SampleLoader from '../components/SampleLoader';

const SampleViewer = (props) => {
  let showSampleLoadError = false;
  let showSampleLoader = false;
  let showSampleTabView = false;

  if (props.error) {
    showSampleLoadError = true;
  } else if (props.loading) {
    showSampleLoader = true;
  } else if (props.sample) {
    showSampleTabView = true;
  }

  return (
    <div className="sample-viewer">
      <div className="sample-heading-container">
        <h2 className="sample-heading"> { props.sampleName } </h2>
        <p className="sample-desc"> {props.sampleDesc} </p>
      </div>
      <div className="sample-content-container">
        <SampleLoadError
          style={{ display: showSampleLoadError ? 'block' : 'none' }}
          reason={props.error}
        />
        <SampleLoader
          style={{ display: showSampleLoader ? 'block' : 'none' }}
        />
        <SampleTabView
          style={{ display: showSampleTabView ? 'flex' : 'none' }}
          sample={props.sample}
        />
      </div>
    </div>
  );
};

SampleViewer.defaultProps = {
  sample: undefined,
  loading: true,
  error: null,
  sampleName: '',
  sampleDesc: '',
};

SampleViewer.propTypes = {
  sample: PropTypes.instanceOf(Object),
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.instanceOf(Error),
    PropTypes.string,
  ]),
  sampleName: PropTypes.string,
  sampleDesc: PropTypes.string,
};

export default SampleViewer;
