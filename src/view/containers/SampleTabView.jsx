import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import TabViewLabel from '../components/TabViewLabel';
import TabViewContent from './TabViewContent';

class SampleTabView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTabId: 'chart',
    };

    this.onClickSampleLabel = this.onClickSampleLabel.bind(this);
    this.onKeydown = this.onKeydown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onkeydown);
  }

  onKeydown(evt) {
    evt = evt || window.event;
    switch (+evt.keyCode) {
      case 37:
        this.onLeftArrowKeydown();
        break;
      case 39:
        this.onRightArrowKeydown();
        break;
      default:
    }
  }

  onLeftArrowKeydown() {
    const tabIds = this.tabIds();
    let prevTabId = tabIds[tabIds.indexOf(this.state.activeTabId) - 1];
    if (_.isUndefined(prevTabId)) {
      prevTabId = tabIds[tabIds.length - 1];
    }
    this.onClickSampleLabel(prevTabId);
  }

  onRightArrowKeydown() {
    const tabIds = this.tabIds();
    let nextTabId = tabIds[tabIds.indexOf(this.state.activeTabId) + 1];
    if (_.isUndefined(nextTabId)) {
      [nextTabId] = tabIds;
    }
    this.onClickSampleLabel(nextTabId);
  }

  onClickSampleLabel(tabId) {
    this.setState({
      activeTabId: tabId,
    });
  }

  sampleTabs() {
    const { sample } = this.props;
    return {
      chart: { name: 'Chart', value: sample.chart },
      js: { name: 'JavaScript', value: sample.js },
      html: { name: 'HTML', value: sample.html },
      data: { name: 'Data', value: sample.data },
      notes: { name: 'Notes', value: sample.notes },
    };
  }

  tabIds() {
    const tabs = this.sampleTabs();
    return Object.keys(tabs).reduce((acc, curr) => {
      const val = tabs[curr].value;
      if (!_.isUndefined(val) && !_.isNull(val)) {
        acc.push(curr);
      }
      return acc;
    }, []);
  }

  render() {
    const tabs = this.sampleTabs();
    return (
      <div className="sample-tabview" style={this.props.style}>
        <div className="tab-labels-container">
          { Object.keys(tabs).map((tabId) => {
              const val = tabs[tabId].value;
              if (_.isUndefined(val) || _.isNull(val)) {
                return null;
              }
              return (
                <TabViewLabel
                  key={tabId}
                  id={tabId}
                  name={tabs[tabId].name}
                  onClick={this.onClickSampleLabel}
                  active={tabId === this.state.activeTabId}
                />
              );
            })
          }
        </div>
        <div className="tab-contents-container">
          { Object.keys(tabs).map((tabId) => {
              const val = tabs[tabId].value;
              if (_.isUndefined(val) || _.isNull(val)) {
                return null;
              }
              return (
                <TabViewContent
                  key={tabId}
                  content={String(tabs[tabId].value)}
                  id={tabId}
                  active={tabId === this.state.activeTabId}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

SampleTabView.defaultProps = {
  sample: {},
  style: {},
};


SampleTabView.propTypes = {
  style: PropTypes.instanceOf(Object),
  sample: PropTypes.instanceOf(Object),
};

export default SampleTabView;
