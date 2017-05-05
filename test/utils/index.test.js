import { kelvinToCelsius, kelvinToFahrenheit, processResponse, formatTemp } from '../../app/utils/index';


test('kelvin To Celsius', () => {
  expect(kelvinToCelsius(300.15)).toBe("27");
});

test('kelvin To Fahrenheit', () => {
  expect(kelvinToFahrenheit(300.15)).toBe("81");
});

test('process Response', () => {
  const payload = {
    city: {
      name: 'cityName'
    },
    list: [{
      dt_txt: '2017-02-16 12:00:00'
    }]
  };

  const result = {
    cityName: 'cityName',
    days: {
      '02-16-2017': [
        {
          dt_txt: '2017-02-16 12:00:00'
        }
      ]
    }
  };
  expect(processResponse(payload)).toEqual(result);
});

test('Format degree', () => {
  expect(formatTemp(300.15, 'c')).toBe("27°");
  expect(formatTemp(300.15, 'f')).toBe("81°");
});

