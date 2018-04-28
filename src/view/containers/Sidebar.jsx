import React from 'react';
import PropTypes from 'prop-types';
import SidebarHeader from '../components/SidebarHeader';
import SampleItemList from './SampleItemList';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.onClickSampleItem = this.onClickSampleItem.bind(this);
  }

  onClickSampleItem(sampleIdx) {
    this.props.onClickSampleItem(sampleIdx);
  }

  render() {
    return (
      <div className={`sidebar ${this.props.status}`}>
        <SidebarHeader
          logo={this.props.config.logo}
          heading={this.props.config.heading}
        />
        <SampleItemList
          samples={this.props.config.samples}
          onClickSampleItem={this.onClickSampleItem}
        />
      </div>
    );
  }
}

Sidebar.propTypes = {
  config: PropTypes.instanceOf(Object).isRequired,
  onClickSampleItem: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default Sidebar;
