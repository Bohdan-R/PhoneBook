/* import React, { Component } from 'react';
import { connect } from 'react-redux'; */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import './viewsStyles/LoginView.scss';
import { BsFillEnvelopeFill, BsLockFill } from 'react-icons/bs';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = e => {
    setEmail(e.currentTarget.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className="section">
      <div className="log-container">
        <h2 className="log-title">Login</h2>
        <form autoComplete="off" onSubmit={handleSubmit} className="log-form">
          <label className="log-form__label">
            Email
            <div className="log-form__input-box">
              <input
                type="email"
                name="email"
                value={email}
                className="log-form__input"
                onChange={handleEmailChange}
              />
              <BsFillEnvelopeFill className="log-form__icon" />
            </div>
          </label>
          <label className="log-form__label">
            Password
            <div className="log-form__input-box">
              <input
                type="password"
                name="password"
                value={password}
                className="log-form__input"
                onChange={handlePasswordChange}
              />
              <BsLockFill className="log-form__icon" />
            </div>
          </label>
          <button type="submit" className="log-form__btn">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

/* class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.resetInput();
  };

  resetInput = () => {
    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="section">
        <div className="log-container">
          <h2 className="log-title">Login</h2>
          <form
            autoComplete="off"
            onSubmit={this.handleSubmit}
            className="log-form"
          >
            <label className="log-form__label">
              Email
              <div className="log-form__input-box">
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="log-form__input"
                  onChange={this.handleChange}
                />
                <BsFillEnvelopeFill className="log-form__icon" />
              </div>
            </label>
            <label className="log-form__label">
              Password
              <div className="log-form__input-box">
                <input
                  type="password"
                  name="password"
                  value={password}
                  className="log-form__input"
                  onChange={this.handleChange}
                />
                <BsLockFill className="log-form__icon" />
              </div>
            </label>
            <button type="submit" className="log-form__btn">
              Sign in
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView); */
