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

    this.iframeRef = React.createRef();
    this.onIframeLoad = this.onIframeLoad.bind(this);
    this.onClickRefreshBtn = this.onClickRefreshBtn.bind(this);
    this.onKeypress = this.onKeypress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.onKeypress);
  }

  componentDidUpdate() {
    const iWidth = +this.iframeRef.current.contentWindow.innerWidth;
    const iHeight = +this.iframeRef.current.contentWindow.innerHeight;

    if (iWidth === 0 || iHeight === 0) {
      this.onClickRefreshBtn();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.onKeypress);
  }

  onKeypress(evt) {
    evt = evt || window.event;
    if (evt.key === 'r' || evt.key === 'R') {
      this.onClickRefreshBtn();
    }
  }

  onIframeLoad() {
    this.setState({
      loaded: true,
    });
  }

  onClickRefreshBtn() {
    this.iframeRef.current.contentWindow.location.reload(true);
  }

  render() {
    return (
      <div className="frameview" style={this.props.style}>
        <div className="chart-refresh" role="button" onClick={this.onClickRefreshBtn}>
          <img width="20" src="images/refresh.png" alt="Refresh the chart" />
        </div>
        <iframe
          ref={this.iframeRef}
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

