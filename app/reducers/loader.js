const loader = (state = '', action) => {
    switch (action.type) {
        case 'Loading':
            return 'loading';
        case 'Loaded':
            return 'loaded';
        case 'Error':
            return 'error';
        default:
            return state;
    }
};

export default loader;
