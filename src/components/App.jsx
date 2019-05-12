import React from 'react';
import { Router } from 'react-router-dom';
import history from '../shared/history';
import AppRoutes from '../shared/routes/AppRoutes';
import './App.css';

function App() {
  return (
    <Router history={history}>
      <div className="app">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
