import React from 'react';
import PropTypes from 'prop-types';

class SampleViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="sample-viewer">
      SamplesViewer
        { String(this.props.sample) }
      </div>
    );
  }
}

SampleViewer.propTypes = {
  sample: PropTypes.instanceOf(Object).isRequired,
};

export default SampleViewer;
