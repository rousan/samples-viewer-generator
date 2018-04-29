import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Sidebar from './Sidebar';
import SidebarToggler from './SidebarToggler';
import SampleViewer from './SampleViewer';

const sampleDataCache = {};

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSampleIdx: 0,
      sampleLoading: true,
      sampleLoadingError: null,
      sidebarStatus: 'open',
    };

    this.onClickSampleItem = this.onClickSampleItem.bind(this);
    this.onClickSidebarToggler = this.onClickSidebarToggler.bind(this);
  }

  componentDidMount() {
    this.loadSampleData(0);
  }

  onClickSampleItem(sampleIdx) {
    if (sampleIdx === this.activeSampleIdx) { return; }

    if (sampleDataCache[sampleIdx]) {
      this.setState({
        activeSampleIdx: sampleIdx,
        sampleLoading: false,
        sampleLoadingError: null,
      });
    } else {
      this.setState({
        activeSampleIdx: sampleIdx,
        sampleLoading: true,
        sampleLoadingError: null,
      });
      this.loadSampleData(sampleIdx);
    }
  }

  onClickSidebarToggler(status) {
    this.setState({
      sidebarStatus: status,
    });
  }

  loadSampleData(sampleIdx) {
    const sampleToLoad = this.props.config.samples[sampleIdx];
    const loadedSample = { ...sampleToLoad };
    const promises = [];
    const reqConfig = {
      responseType: 'text',
      params: {
        _: Date.now(),
      },
    };

    if (sampleToLoad.html) {
      promises.push(axios.get(sampleToLoad.html, reqConfig));
    } else {
      promises.push(Promise.resolve(null));
    }
    if (sampleToLoad.js) {
      promises.push(axios.get(sampleToLoad.js, reqConfig));
    } else {
      promises.push(Promise.resolve(null));
    }
    if (sampleToLoad.data) {
      promises.push(axios.get(sampleToLoad.data, reqConfig));
    } else {
      promises.push(Promise.resolve(null));
    }

    axios.all(promises)
      .then(axios.spread((htmlRes, jsRes, dataRes) => {
        loadedSample.html = htmlRes ? htmlRes.data : null;
        loadedSample.js = jsRes ? jsRes.data : null;
        loadedSample.data = dataRes ? dataRes.data : null;

        sampleDataCache[sampleIdx] = loadedSample;
        if (sampleIdx === this.state.activeSampleIdx) {
          this.setState({
            sampleLoading: false,
            sampleLoadingError: null,
          });
        }
      }))
      .catch((err) => {
        if (sampleIdx === this.state.activeSampleIdx) {
          this.setState({
            sampleLoading: false,
            sampleLoadingError: err,
          });
        }
      });
  }


  render() {
    return (
      <div className="content">
        <Sidebar
          config={this.props.config}
          onClickSampleItem={this.onClickSampleItem}
          status={this.state.sidebarStatus}
        />
        <SidebarToggler onClick={this.onClickSidebarToggler} />
        <SampleViewer
          sample={sampleDataCache[this.state.activeSampleIdx]}
          loading={this.state.sampleLoading}
          error={this.state.sampleLoadingError}
        />
      </div>
    );
  }
}

Content.propTypes = {
  config: PropTypes.instanceOf(Object).isRequired,
};

export default Content;
