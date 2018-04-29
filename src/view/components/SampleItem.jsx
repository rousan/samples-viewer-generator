import React from 'react';
import PropTypes from 'prop-types';

const SampleItem = (props) => {
  const onClick = () => {
    props.onClick(props.id);
  };

  return (
    <li className={props.active ? 'active' : 'non-active'}>
      <div className="sample-item-container" role="button" onClick={onClick}>
        {props.data.icon ?
          <img
            className="sample-item-icon"
            src={props.data.icon}
            alt={props.data.name}
            width="20"
          />
          :
          <img
            className="sample-item-icon default"
            src={props.active ? 'images/default-sample-icon-active.svg' : 'images/default-sample-icon.svg'}
            alt={props.data.name}
            width="20"
          />
        }
        <span className="sample-item-title">
          { props.data.name }
        </span>
        <div className="active-sample-marker" />
      </div>
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
