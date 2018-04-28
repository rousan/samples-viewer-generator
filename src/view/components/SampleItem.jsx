import React from 'react';
import PropTypes from 'prop-types';

const SampleItem = (props) => {
  const onClick = () => {
    props.onClick(props.id);
  };

  return (
    <li className={props.active ? 'active' : 'non-active'} onClick={onClick}>
      <img
        className="sample-item-icon"
        src={props.data.icon}
        alt={props.data.name}
        width="20"
      />
      <span className="sample-item-title">
        { props.data.name }
      </span>
      <div className="active-sample-marker" />
    </li>
  );
};

SampleItem.propTypes = {
  id: PropTypes.number.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default SampleItem;
