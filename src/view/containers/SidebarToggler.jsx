import React from 'react';
import PropTypes from 'prop-types';

class SidebarToggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
    };

    this.onClickToggler = this.onClickToggler.bind(this);
    this.onKeypress = this.onKeypress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.onKeypress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.onKeypress);
  }

  onKeypress(evt) {
    evt = evt || window.event;
    if (evt.key === 'x' || evt.key === 'X') {
      this.onClickToggler();
    }
  }

  onClickToggler() {
    const isOpen = !this.state.isOpen;
    this.props.onClick(isOpen ? 'open' : 'close');
    this.setState({
      isOpen,
    });
  }

  render() {
    return (
      <div className={`sidebar-toggler ${this.state.isOpen ? 'open' : 'close'}`}>
        <button onClick={this.onClickToggler}> { this.state.isOpen ? 'close' : 'open' } </button>
      </div>
    );
  }
}

SidebarToggler.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SidebarToggler;
