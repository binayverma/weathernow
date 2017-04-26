import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export class NavBar extends Component {
    constructor(props) {
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleTempUnit = this.handleTempUnit.bind(this);
        this.state = {
            unit: 'c'
        };
    }
    handleOnSubmit(e) {
        e.preventDefault();
        if(!this.searchInput.value) {
            alert('Enter the city name..');
            return;
        }
        this.props.getWeather(this.searchInput.value);
        return;
    }
    handleTempUnit(e) {
        this.setState({
            unit: e.target.getAttribute('data-unit')
        });
        this.props.updateUnit(e.target.getAttribute('data-unit'));
    }
    render() {
        return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                    <a className="navbar-brand" href="#">Weather Now</a>
                </div>
                <div id="navbarCollapse" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">5 Days</a></li>
                </ul>
                <form className="navbar-form navbar-right form-inline">
                    <div className="form-group">
                        <input type="text" ref={(input) => { this.searchInput = input; }} className="form-control" placeholder="City name" />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleOnSubmit}>Submit</button>
                </form>
                <label className={classnames('degree', {
                    'degree-selected': this.state.unit === 'c'
                })} onClick={this.handleTempUnit} data-unit="c">°C</label>
                <span className="degree">|</span>
                <label className={classnames('degree', {
                    'degree-selected': this.state.unit === 'f'
                })} onClick={this.handleTempUnit} data-unit="f">°F</label>
                </div>
            </div>
        </nav>);
    }
}

NavBar.propTypes = {
    getWeather: PropTypes.func,
    updateUnit: PropTypes.func
};

export default NavBar;
