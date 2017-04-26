import { processResponse } from '../utils/index';
const initialState = {
    data: null,
    status: 'welcome',
    unit: 'c'
};
const weather = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_WEATHER':
            const payload = action.payload;
            const data = processResponse(payload);
            return {
                ...state,
                error: '',
                data,
                status: 'content'
            };
        case 'FETCH_WEATHER_ERROR':
            action.payload = action.payload || {};
            return {
                error: action.payload.message || 'Error in API or City not found',
                status: 'error'
            };
        case 'UPDATE_UNIT':
            return {
                ...state,
                unit: action.payload
            };
        default:
            return state;
    }
};

export default weather;
