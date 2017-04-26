import React, { PropTypes, Component } from 'react';
import { formatTemp } from '../utils/index';
import { connect } from 'react-redux';
import { getWeather } from '../actions';
import Welcome from '../components/Welcome';
import '../styles/weather.scss';
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
                    <h2 className="text-center"> {data.cityName} </h2>
                    <h3>
                      {formatTemp(firstDay.main.temp, unit)}
                    </h3>
                    <p className="pull-left col-md-4 col-sm-4">
                      Low: <span>{formatTemp(firstDay.main.temp_min, unit)}</span>
                    </p>
                    <p className="text-center col-md-4 col-sm-4 cap">
                      <span>{firstDay.weather[0].description}</span>
                      <span>
                        <img className="text-center" src={`http://openweathermap.org/img/w/${firstDay.weather[0].icon}.png`} />
                      </span>
                    </p>
                    <p className="pull-right">
                      High: <span>{formatTemp(firstDay.main.temp_max, unit)}</span>
                    </p>
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
                                    const date = new Date(day.dt_txt);
                                    const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                                    const icon = `http://openweathermap.org/img/w/${day.weather[0].icon}.png`;
                                    return (
                                      <tr>
                                        <td>
                                          <div style={{ width: '90%' }} className="pull-left ">
                                            <strong>{date.getHours()}h</strong>
                                            <div>
                                              <small className="text-nowrap">{key} {weekday[date.getDay()]}</small>
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
