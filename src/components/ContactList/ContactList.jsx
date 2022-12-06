import React from 'react';
import PropTypes from 'prop-types';

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
      <ul>
        {this.filterContacts().map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={onDelete} id={id}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
