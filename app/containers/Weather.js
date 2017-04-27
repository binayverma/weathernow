import React, { PropTypes, Component } from 'react';
import { formatTemp } from '../utils/index';
import { connect } from 'react-redux';
import { getWeather } from '../actions';
import Welcome from '../components/Welcome';
import '../styles/weather.scss';
import moment from 'moment';

class Weather extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { data, error, status, unit } = this.props.weather;
        let firstDay;
        if (status === 'content') {
            firstDay = data.days[Object.keys(data.days)[0]][0];
        }
        return (
          <div className="weather-container container-full">
          <div>
            {
              status === 'content' ?
                <div>
                  <div className="jumbotron">
                    <h1 className="text-center city"> {data.cityName} </h1>
                    <h3>
                      {formatTemp(firstDay.main.temp, unit)}
                    </h3>
                    <div className="row status-content">
                      <div className="col col-xs-3">
                        Low: <span>{formatTemp(firstDay.main.temp_min, unit)}</span>
                      </div>
                      <div className="col col-xs-6 current-desc">
                        <span>{firstDay.weather[0].description}</span>
                        <span>
                          <img className="text-center" src={`http://openweathermap.org/img/w/${firstDay.weather[0].icon}.png`} />
                        </span>
                      </div>
                      <div className="col col-xs-3">
                        High: <span>{formatTemp(firstDay.main.temp_max, unit)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="table-conatiner content-rotate">
                    <table className="table table-responsive content-rotate">
                      <thead>
                        <tr>
                          <th className="time-icon">Time</th>
                          <th>Description</th>
                          <th>Temp</th>
                          <th>High/Low</th>
                          <th>Pressure</th>
                          <th>Sea level</th>
                          <th>Ground level</th>
                          <th>Humidity</th>
                          <th>Wind</th>
                        </tr>
                      </thead>
                      {
                        Object.keys(data.days).map((key) => {
                            return (<tbody>
                            {
                                data.days[key].map((day) => {
                                    const icon = `http://openweathermap.org/img/w/${day.weather[0].icon}.png`;
                                    return (
                                      <tr>
                                        <td>
                                          <div style={{ width: '90%' }} className="pull-left ">
                                            <strong>{moment(day.dt_txt).format('HH')}h</strong>
                                            <div>
                                              <small className="text-nowrap">{moment(day.dt_txt).format('MM-DD-YYYY ddd')}</small>
                                            </div>
                                          </div>
                                          <div style={{ width: '10%' }} className="pull-right">
                                            <span className="pull-right"><img src={icon} /></span>
                                          </div>
                                        </td>
                                        <td className="cap">{day.weather[0].description}</td>
                                        <td>{formatTemp(day.main.temp, unit)}</td>
                                        <td>
                                          {formatTemp(day.main.temp_max, unit)}
                                          /
                                          {formatTemp(day.main.temp_min, unit)}
                                        </td>
                                        <td>{day.main.pressure} mb</td>
                                        <td>{day.main.sea_level} m</td>
                                        <td>{day.main.grnd_level} m</td>
                                        <td>{day.main.humidity} %</td>
                                        <td>{day.wind.speed} kmph</td>
                                      </tr>
                                    );
                                })
                            }
                          </tbody>
                          );
                        })
                      }
                    </table>
                  </div>
                </div>
                : null
            }
            {
              status === 'error' ?
                <div className="alert alert-danger">
                  {error}
                </div> :
                null
            }
            {
              status === 'welcome' ?
                <Welcome /> :
                null
            }
          </div>

        </div>
      );
    }
}

Weather.propTypes = {
    weather: PropTypes.object,
    getWeather: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        weather: state.weather
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getWeather: () => dispatch(getWeather())
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);
