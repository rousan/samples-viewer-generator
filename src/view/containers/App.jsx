import React from 'react';
import axios from 'axios';
import _ from 'lodash';
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
        const { data } = res;
        if (_.isObject(data)) {
          this.setState({
            loaded: true,
            config: data,
          });
        } else {
          try {
            const parsedData = JSON.parse(String(data));
            this.setState({
              loaded: true,
              config: parsedData,
            });
          } catch (err) {
            this.setState({
              loadingError: true,
              loadingErrorMessage: err,
            });
          }
        }
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
