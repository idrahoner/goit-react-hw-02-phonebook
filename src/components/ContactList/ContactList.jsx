import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export default class Contacts extends React.Component {
  static propTypes = {
    contacts: PropTypes.array,
    onDelete: PropTypes.func,
  };
  state = {
    filter: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  filterContacts = () => {
    const { contacts } = this.props;
    const { filter } = this.state;

    const query = filter.trim().toLowerCase();

    if (!query) {
      return this.props.contacts;
    }

    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(query) || number.includes(query)
    );
  };

  render() {
    const { onDelete } = this.props;
    return (
      <ul className={css.contactList}>
        {this.filterContacts().map(({ id, name, number }) => (
          <li key={id} className={css.contactItem}>
            <p className={css.contactText}>
              {name}: {number}
            </p>
            <button
              className={css.deleteButton}
              type="button"
              onClick={onDelete}
              id={id}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
