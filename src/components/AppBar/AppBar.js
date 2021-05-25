import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navigation/';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from '../../redux/auth';
import './AppBar.scss';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header>
      <div className="nav-container">
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
}

/* const AppBar = ({ isAuthenticated }) => (
  <header>
    <div className="nav-container">
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </div>
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar); */
