import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../../shared/redux/actions';
import fakeAuth from '../../auth/fakeAuth';
import randomNumber from '../../shared/utils/randomNumber';
import './SignInPage.css';

const SignInPage = ({ location, isSignedIn, signInAction }) => {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const { referrer } = location.state || { referrer: { pathname: '/app' } };

  const onSignInClick = () => {
    fakeAuth.signIn(() => setRedirectToReferrer(true));
    signInAction(randomNumber(0, 100));
  };

  if (redirectToReferrer === true || isSignedIn === true) {
    return <Redirect to={referrer} />;
  }

  return (
    <div className="sign-in-page">
      <p>
        {'Sign in to access:  '}
        {referrer.pathname}
      </p>
      <button type="button" onClick={onSignInClick}>
        Sign in
      </button>
    </div>
  );
};

SignInPage.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.shape,
  }).isRequired,
  isSignedIn: PropTypes.bool.isRequired,
  signInAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ isSignedIn: state.auth.isSignedIn });

export default connect(
  mapStateToProps,
  { signInAction: signIn },
)(SignInPage);
