import React from 'react';
import PropTypes from 'prop-types';

export default class Contacts extends React.Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ),
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
    const { filter } = this.state;
    return (
      <>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={this.handleChange}
        />
        <ul>
          {this.filterContacts().map(({ id, name, number }) => (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
