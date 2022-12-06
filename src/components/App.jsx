import React from 'react';
import Section from 'components/Section';
import PhonebookForm from 'components/PhonebookForm';
import Contacts from 'components/Contacts';

import { checkEqual } from 'utils';

export class App extends React.Component {
  state = {
    contacts: [...this.props.initialValue],
  };

  addContact = profile => {
    const { contacts } = this.state;
    const isAlreadyHave = contacts.reduce(
      (acc, { name, number }) =>
        acc === ''
          ? (acc = checkEqual(name, profile.name)) ||
            (acc = checkEqual(number, profile.number))
          : acc,
      ''
    );

    if (isAlreadyHave) {
      return alert(isAlreadyHave + ' is already in contacts.');
    }

    this.setState(pervState => ({
      contacts: [...pervState.contacts, profile],
    }));
  };

  deleteContact = event => {
    const contactId = event.currentTarget.id;
    console.log(contactId);
    this.setState(pervState => ({
      contacts: pervState.contacts.filter(element => element.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <Section title="Phonebook">
          <PhonebookForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Contacts contacts={contacts} onDelete={this.deleteContact} />
        </Section>
      </div>
    );
  }
}
