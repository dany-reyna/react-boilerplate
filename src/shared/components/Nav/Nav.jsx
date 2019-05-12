import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SignOutButton from '../../../components/SignOutButton/SignOutButton';

const Nav = ({ match }) => (
  <div>
    <button type="button">
      <Link to={match.url}>Home</Link>
    </button>
    <button type="button">
      <Link to={`${match.url}/section`}>Section</Link>
    </button>
    <SignOutButton />
  </div>
);

Nav.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Nav;
