import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import SidebarToggler from './SidebarToggler';
import SampleViewer from './SampleViewer';

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSampleIdx: 0,
      sidebarStatus: 'open',
    };

    this.onClickSampleItem = this.onClickSampleItem.bind(this);
    this.onClickSidebarToggler = this.onClickSidebarToggler.bind(this);
  }

  onClickSampleItem(sampleIdx) {
    this.setState({
      activeSampleIdx: sampleIdx,
    });
  }

  onClickSidebarToggler(status) {
    this.setState({
      sidebarStatus: status,
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
        <SampleViewer sample={this.props.config.samples[this.state.activeSampleIdx]} />
      </div>
    );
  }
}

Content.propTypes = {
  config: PropTypes.instanceOf(Object).isRequired,
};

export default Content;
