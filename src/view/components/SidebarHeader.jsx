import React from 'react';
import PropTypes from 'prop-types';

const SidebarHeader = props => (
  <div className="sidebar-header">
    <a className="heading-link" href="/">
      {props.logo &&
        <img
          className="logo"
          src={props.logo}
          alt={props.heading}
          width="40"
          height="40"
        />
      }
      <span>{ props.heading }</span>
    </a>
  </div>
);

SidebarHeader.defaultProps = {
  logo: undefined,
};

SidebarHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  logo: PropTypes.string,
};

export default SidebarHeader;
