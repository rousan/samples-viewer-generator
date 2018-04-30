import React from 'react';
import PropTypes from 'prop-types';
import SampleTabView from './SampleTabView';
import SampleLoadError from '../components/SampleLoadError';
import SampleLoader from '../components/SampleLoader';

class SampleViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {

  }

  render() {
    let showSampleLoadError = false;
    let showSampleLoader = false;
    let showSampleTabView = false;
    if (this.props.error) {
      showSampleLoadError = true;
    } else if (this.props.loading) {
      showSampleLoader = true;
    } else if (this.props.sample) {
      showSampleTabView = true;
    }

    return (
      <div className="sample-viewer">
        <div className="sample-heading-container">
          <h2 className="sample-heading"> { this.props.sampleName } </h2>
        </div>
        <div className="sample-content-container">
          <SampleLoadError
            style={{ display: showSampleLoadError ? 'block' : 'none' }}
            reason={this.props.error}
          />
          <SampleLoader
            style={{ display: showSampleLoader ? 'block' : 'none' }}
          />
          <SampleTabView
            style={{ display: showSampleTabView ? 'flex' : 'none' }}
            sample={this.props.sample}
          />
        </div>
      </div>
    );
  }
}

SampleViewer.defaultProps = {
  sample: undefined,
  loading: true,
  error: null,
  sampleName: '',
};

SampleViewer.propTypes = {
  sample: PropTypes.instanceOf(Object),
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.instanceOf(Error),
    PropTypes.string,
  ]),
  sampleName: PropTypes.string,
};

export default SampleViewer;
