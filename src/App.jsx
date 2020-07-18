import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { GoodsList } from './components/GoodsList/GoodsList';
import { fetchGoods } from './api/api';
import { setGoods, setError } from './store';

class App extends React.Component {
  getAllGoods = () => {
    fetchGoods()
      .then(({ data }) => {
        this.props.setGoods(data);
      })
      .catch(error => {
        this.props.setError(error.message);
      });
  };

  getFiveGoods = () => {
    fetchGoods()
      .then(response => {
        this.setState({
          goods: [...response.data].sort((a, b) => (
            a.name.localeCompare(b.name))).slice(0, 5),
        });
      })
      .catch(error => {
        this.setState({
          error,
        });
      });
  };

  getRedGoods = () => {
    fetchGoods()
      .then(response => {
        this.setState({
          goods: response.data.filter(item => item.color === 'red'),
        });
      })
      .catch(error => {
        this.setState({
          error,
        });
      });
  };

  render() {
    const { error } = this.props;

    return (
      <div className="container">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.getAllGoods}
        >
          Get all goods
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.getFiveGoods}
        >
          Get 5 goods
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.getRedGoods}
        >
          Get only red
        </button>
        {error
          ? (
            <div className="alert alert-primary" role="alert">
              Ooops! Something went wrong, maybe try later
            </div>
          )
          : <GoodsList />}
      </div>
    );
  }
}

const mapState2Props = (globalState) => {
  const { error, goods } = globalState;

  return {
    error,
    goods,
  };
};

// NOTE: may be a function
const mapDispatchToProps = {
  setGoods,
  setError,
};

export default connect(mapState2Props, mapDispatchToProps)(App);
