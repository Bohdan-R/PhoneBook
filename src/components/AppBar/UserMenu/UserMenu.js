import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from '../../../redux/auth';
import './UserMenu.scss';
import { IoExitOutline } from 'react-icons/io5';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  const onLogOut = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <div className="user">
      <p className="user__name">
        <span className="user__name-decor">Welcome,</span> {name}
      </p>
      <button className="user__btn" type="button" onClick={onLogOut}>
        Logout
        <IoExitOutline className="user__btn__icon" />
      </button>
    </div>
  );
}

/* const UserMenu = ({ name, onLogout }) => (
  <div className="user">
    <p className="user__name">
      <span className="user__name-decor">Welcome,</span> {name}
    </p>
    <button className="user__btn" type="button" onClick={onLogout}>
      Logout
      <IoExitOutline className="user__btn__icon" />
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu); */
