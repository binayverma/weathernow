import request from '../services/request';

export function getWeather(text) {
    return (dispatch) => {
        dispatch({
            type: 'Loading'
        });
        request({
            url: `/data/2.5/forecast?q=${text}&appid=ac24a7211b9c5e9951bafb9bf742e305`,
            method: 'get'
        })
        .then((res) => {
            dispatch( {
                type: 'FETCH_WEATHER',
                payload: res
            });
            dispatch({
                type: 'Loaded'
            });
        }, (error) => {
            console.log('error', error);
            dispatch( {
                type: 'FETCH_WEATHER_ERROR',
                payload: 'Error: asd'
            });
            dispatch({
                type: 'Error'
            });
        });
    };
}

export function updateUnit(unit) {
    return (dispatch) => {
        dispatch({
            type: 'UPDATE_UNIT',
            payload: unit
        });
    };
}
