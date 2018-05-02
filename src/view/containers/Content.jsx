import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Popup from 'react-popup';
import Sidebar from './Sidebar';
import SidebarToggler from './SidebarToggler';
import SampleViewer from './SampleViewer';
import PopupHelp from '../components/PopupHelp';

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
    this.onClickHelpButton = this.onClickHelpButton.bind(this);
    this.onKeypress = this.onKeypress.bind(this);
    this.helpTitle = 'Keyboard Shortcuts';
  }

  componentDidMount() {
    document.addEventListener('keypress', this.onKeypress);
    this.loadSampleData(0);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.onKeypress);
  }

  onKeypress(evt) {
    evt = evt || window.event;
    if (evt.key === '?') {
      this.onClickHelpButton();
    }
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

  onClickHelpButton() {
    Popup.create({
      title: this.helpTitle,
      content: <PopupHelp />,
      className: 'alert',
      buttons: {
        right: ['ok'],
      },
    }, true);
  }

  loadSampleData(sampleIdx) {
    const sampleToLoad = this.props.config.samples[sampleIdx];
    const loadedSample = { ...sampleToLoad };
    const promises = [];
    const reqConfig = {
      transformResponse: undefined,
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
    if (sampleToLoad.notes) {
      promises.push(axios.get(sampleToLoad.notes, reqConfig));
    } else {
      promises.push(Promise.resolve(null));
    }

    axios.all(promises)
      .then(axios.spread((htmlRes, jsRes, dataRes, notesRes) => {
        loadedSample.html = htmlRes ? String(htmlRes.data) : null;
        loadedSample.js = jsRes ? String(jsRes.data) : null;
        loadedSample.data = dataRes ? String(dataRes.data) : null;
        loadedSample.notes = notesRes ? String(notesRes.data) : null;

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
          sampleName={this.props.config.samples[this.state.activeSampleIdx].name}
          sampleDesc={this.props.config.samples[this.state.activeSampleIdx].desc}
          sample={sampleDataCache[this.state.activeSampleIdx]}
          loading={this.state.sampleLoading}
          error={this.state.sampleLoadingError}
        />
        <div className="help-btn-container" role="button" onClick={this.onClickHelpButton}>
          <img
            className="sample-item-icon"
            src="images/help.png"
            alt="Keyboard Shortcuts"
            width="20"
          />
        </div>
        <Popup className="mm-popup" />
      </div>
    );
  }
}

Content.propTypes = {
  config: PropTypes.instanceOf(Object).isRequired,
};

export default Content;
