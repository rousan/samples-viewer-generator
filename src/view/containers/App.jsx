import React from 'react';
import axios from 'axios';
import Content from './Content';
import AppLoader from '../components/AppLoader';
import AppLoadError from '../components/AppLoadError';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      config: null,
      loadingError: false,
      loadingErrorMessage: null,
    };
  }

  componentDidMount() {
    axios.get(`config.json?_=${Date.now()}`)
      .then((res) => {
        this.setState({
          loaded: true,
          config: res.data,
        });
      })
      .catch((err) => {
        this.setState({
          loadingError: true,
          loadingErrorMessage: err,
        });
      });
  }

  render() {
    if (this.state.loadingError) {
      return (
        <AppLoadError
          reason={this.state.loadingErrorMessage}
        />
      );
    } else if (this.state.loaded) {
      return (
        <Content config={this.state.config} />
      );
    }
    return (
      <AppLoader />
    );
  }
}

export default App;
