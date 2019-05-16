import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../components/Home/Home';
import Section from '../../components/Section/Section';

const PrivateAppRoutes = ({ match }) => (
  <Switch>
    <Route exact strict path={match.path} component={Home} />
    <Route path={`${match.path}/section`} component={Section} />
    <Redirect to={match.path} />
  </Switch>
);

PrivateAppRoutes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({}),
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default PrivateAppRoutes;
