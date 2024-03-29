import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import './ContactList.scss';
import { ImBin } from 'react-icons/im';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  const onDeleteContact = useCallback(
    id => {
      dispatch(contactsOperations.deleteContact(id));
    },
    [dispatch],
  );
  return (
    <div className="contact">
      <div className="decorate-line"></div>
      <ul className="contact__list">
        {contacts.map(({ id, name, number }) => (
          <li key={id} className="contact__item">
            <div className="contact__info">
              <span className="contact__name">{name}</span>
              <span className="contact__decor"></span>
              <span className="contact__number">{number}</span>
            </div>
            <button
              type="button"
              className="contact__btn"
              onClick={onDeleteContact}
            >
              <ImBin className="contact__btn__icon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
/* const ContactList = ({ contacts, deleteContact }) => (
  <div className="contact">
    <div className="decorate-line"></div>
    <ul className="contact__list">
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="contact__item">
          <div className="contact__info">
            <span className="contact__name">{name}</span>
            <span className="contact__decor"></span>
            <span className="contact__number">{number}</span>
          </div>
          <button
            type="button"
            className="contact__btn"
            onClick={() => deleteContact(id)}
          >
            <ImBin className="contact__btn__icon" />
          </button>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList); */
