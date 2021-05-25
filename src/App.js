import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppBar from './components/AppBar';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import PhonebookView from './views/PhonebookView';
import PrivatRoute from './components/PrivatRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations } from './redux/auth';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <PublicRoute path="/register" redirectTo="/contacts" restricted>
          <RegisterView />
        </PublicRoute>
        <PublicRoute path="/login" redirectTo="/contacts" restricted>
          <LoginView />
        </PublicRoute>
        <PrivatRoute path="/contacts" redirectTo="/login">
          <PhonebookView />
        </PrivatRoute>
      </Switch>
    </>
  );
}

/* class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <PublicRoute path="/register" redirectTo="/contacts" restricted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRoute>
          <PrivatRoute path="/contacts" redirectTo="/login">
            <PhonebookView />
          </PrivatRoute>
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App); */
