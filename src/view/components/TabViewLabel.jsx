import React from 'react';
import PropTypes from 'prop-types';

const TabViewLabel = (props) => {
  const onClick = () => {
    props.onClick(props.id);
  };

  return (
    <div
      className={`tabview-label ${props.active ? 'active' : 'non-active'}`}
      role="button"
      onClick={onClick}
    >
      <span> { props.name } </span>
    </div>
  );
};

TabViewLabel.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default TabViewLabel;
