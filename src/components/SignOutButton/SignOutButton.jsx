import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../../shared/history';
import { signOut } from '../../shared/redux/actions/auth';

const SignOutButton = ({ signOutAction }) => {
  const onSignOutClick = () => {
    signOutAction(() => history.push('/'));
  };

  return (
    <button type="button" onClick={onSignOutClick}>
      Sign out
    </button>
  );
};

SignOutButton.propTypes = {
  signOutAction: PropTypes.func.isRequired,
};

export default connect(
  null,
  { signOutAction: signOut },
)(SignOutButton);
