import React from 'react';
import PropTypes from 'prop-types';
import SampleItem from '../components/SampleItem';

class SampleItemList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSampleId: 0,
    };

    this.onClickSampleItem = this.onClickSampleItem.bind(this);
    this.onKeydown = this.onKeydown.bind(this);
  }

  componentDidMount() {
    document.onkeydown = this.onKeydown;
  }

  onKeydown(evt) {
    evt = evt || window.event;
    switch (+evt.keyCode) {
      case 38:
        this.onUpArrowKeydown();
        break;
      case 40:
        this.onDownArrowKeydown();
        break;
      default:
    }
  }

  onUpArrowKeydown() {
    let prevSampleId = this.state.activeSampleId - 1;
    if (prevSampleId < 0) {
      prevSampleId = this.props.samples.length - 1;
    }
    this.setState({
      activeSampleId: prevSampleId,
    });
  }

  onDownArrowKeydown() {
    let nextSampleId = this.state.activeSampleId + 1;
    if (nextSampleId >= this.props.samples.length) {
      nextSampleId = 0;
    }
    this.setState({
      activeSampleId: nextSampleId,
    });
  }

  onClickSampleItem(sampleIdx) {
    this.setState({
      activeSampleId: sampleIdx,
    });
    this.props.onClickSampleItem(sampleIdx);
  }

  render() {
    return (
      <div className="sample-item-list">
        <ul>
          {this.props.samples.map((sample, idx) => (
            <SampleItem
              key={idx}
              id={idx}
              data={sample}
              active={this.state.activeSampleId === idx}
              onClick={this.onClickSampleItem}
            />
        ))}
        </ul>
      </div>
    );
  }
}

SampleItemList.propTypes = {
  samples: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  onClickSampleItem: PropTypes.func.isRequired,
};

export default SampleItemList;
