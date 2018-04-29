import React from 'react';
import PropTypes from 'prop-types';
import IFrameLoader from '../components/IFrameLoader';

class FrameView extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.url === nextProps.url) { return null; }
    return {
      loaded: false,
      url: nextProps.url,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      url: props.url,
    };

    this.onIframeLoad = this.onIframeLoad.bind(this);
  }

  onIframeLoad() {
    this.setState({
      loaded: true,
    });
  }

  render() {
    return (
      <div className="frameview" style={this.props.style}>
        <iframe
          width="100%"
          height="100%"
          src={this.state.url}
          frameBorder="0"
          title="Sample Chart"
          onLoad={this.onIframeLoad}
        >Chart could not be loaded due to your browser does not support iframe
        </iframe>
        <IFrameLoader
          style={{ display: this.state.loaded ? 'none' : 'block' }}
        />
      </div>
    );
  }
}

FrameView.propTypes = {
  url: PropTypes.string.isRequired,
  style: PropTypes.instanceOf(Object).isRequired,
};

export default FrameView;

