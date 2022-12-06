import React from 'react';
import Section from 'components/Section';
import PhonebookForm from 'components/PhonebookForm';
import Contacts from 'components/Contacts';

export class App extends React.Component {
  state = {
    contacts: [...this.props.initialValue],
  };

  addContact = profile => {
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
    // console.log(this.state);
    // console.log(this.state.contacts);

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
