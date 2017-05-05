import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import '../styles/loader.scss';
export class LoaderComponent extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const { loader } = this.props;
        return (
            <div className={`loader-wrapper  ${loader === 'loading' ? '' : 'hide-loader' }`}>
                <div className="app-loader">Loading...</div>
            </div>
        );
    }
}

LoaderComponent.propTypes = {
    loader: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        loader: state.loader
    };
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoaderComponent);
