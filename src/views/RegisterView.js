/* import React, { Component } from 'react';
import { connect } from 'react-redux'; */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import {
  BsFillPersonFill,
  BsFillEnvelopeFill,
  BsLockFill,
} from 'react-icons/bs';
import './viewsStyles/RegisterViews.scss';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = e => {
    setName(e.currentTarget.value);
  };

  const handleEmailChange = e => {
    setEmail(e.currentTarget.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="section">
      <div className="reg-container">
        <h2 className="reg-title">Registration</h2>

        <form autoComplete="off" onSubmit={handleSubmit} className="reg-form">
          <label className="reg-form__label">
            Name
            <div className="reg-form__input-box">
              <input
                type="text"
                name="name"
                value={name}
                className="reg-form__input"
                onChange={handleNameChange}
              />

              <BsFillPersonFill className="reg-form__icon" />
            </div>
          </label>

          <label className="reg-form__label">
            Email{' '}
            <div className="reg-form__input-box">
              <input
                type="email"
                name="email"
                value={email}
                className="reg-form__input"
                onChange={handleEmailChange}
              />
              <BsFillEnvelopeFill className="reg-form__icon" />
            </div>
          </label>

          <label className="reg-form__label">
            Password{' '}
            <div className="reg-form__input-box">
              <input
                type="password"
                name="password"
                value={password}
                className="reg-form__input"
                onChange={handlePasswordChange}
              />
              <BsLockFill className="reg-form__icon" />
            </div>
          </label>

          <button type="submit" className="reg-form__btn">
            <span className="reg-form__btn--span">Sign up</span>
          </button>
        </form>
      </div>
    </div>
  );
}

/* class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.resetInput();
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  resetInput = () => {
    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className="section">
        <div className="reg-container">
          <h2 className="reg-title">Registration</h2>

          <form
            autoComplete="off"
            onSubmit={this.handleSubmit}
            className="reg-form"
          >
            <label className="reg-form__label">
              Name
              <div className="reg-form__input-box">
                <input
                  type="text"
                  name="name"
                  value={name}
                  className="reg-form__input"
                  onChange={this.handleChange}
                />

                <BsFillPersonFill className="reg-form__icon" />
              </div>
            </label>

            <label className="reg-form__label">
              Email{' '}
              <div className="reg-form__input-box">
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="reg-form__input"
                  onChange={this.handleChange}
                />
                <BsFillEnvelopeFill className="reg-form__icon" />
              </div>
            </label>

            <label className="reg-form__label">
              Password{' '}
              <div className="reg-form__input-box">
                <input
                  type="password"
                  name="password"
                  value={password}
                  className="reg-form__input"
                  onChange={this.handleChange}
                />
                <BsLockFill className="reg-form__icon" />
              </div>
            </label>

            <button type="submit" className="reg-form__btn">
              <span className="reg-form__btn--span">Sign up</span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView); */
