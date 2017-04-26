import _ from 'underscore';
export function processResponse(payload) {
    const res = {
        cityName: payload.city.name
    };
    let list = payload.list;
    list = list.map((item) => {
        return {
            ...item,
            date: new Date(item.dt_txt)
        };
    });
    list = _.groupBy(list, (item) => {
        return (item.date.getMonth() + 1) + '-' + item.date.getDate()  + '-' + item.date.getFullYear();
    });
    res.days = list;
    return res;
}

export function kelvinToCelsius(temp) {
    return (temp - 273.15).toFixed(0);
}

export function kelvinToFahrenheit(temp) {
    return (9 / 5 * (temp - 273.15) + 32 ).toFixed(0);
}

export function formatTemp(value, unit) {
    if(unit === 'f') {
        return kelvinToFahrenheit(value) + '°';
    }
    return kelvinToCelsius(value) + '°';
}
