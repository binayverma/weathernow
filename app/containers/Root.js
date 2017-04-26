import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../routes';
import { Router } from 'react-router';
import { getWeather, updateUnit} from '../actions';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Loader from './Loader';

export default class Root extends Component {
    handleGetWeather = (value) => {
        this.props.store.dispatch(getWeather(value));
    }

    handleUpdateUnit = (value) => {
        this.props.store.dispatch(updateUnit(value));
    }

    render() {
        const { store, history } = this.props;
        const state = store.getState();
        return (
            <Provider store={store}>
                <div className="main-wrapper">
                    <NavBar getWeather={this.handleGetWeather} updateUnit={this.handleUpdateUnit} unit={state.weather.unit}/>
                    <Router history={history} routes={routes} />
                    <Footer />
                    <Loader />
                </div>
            </Provider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};
