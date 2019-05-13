import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isSignedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isSignedIn === true ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { referrer: props.location } }} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.shape({}),
  }).isRequired,
  isSignedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({ isSignedIn: state.auth.isSignedIn });

export default connect(mapStateToProps)(PrivateRoute);
