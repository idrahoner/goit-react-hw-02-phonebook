import React from 'react';
// import { nanoid } from 'nanoid';
import Section from 'components/Section';
import PhonebookForm from 'components/PhonebookForm';

export class App extends React.Component {
  state = {
    contacts: [],
  };

  addContact = profile => {
    this.setState(pervState => ({
      contacts: [...pervState.contacts, profile],
    }));
  };

  render() {
    console.log(this.state);
    console.log(this.state.contacts);
    return (
      <div>
        <Section title="Phonebook">
          <PhonebookForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <ul>
            {this.state.contacts.map(element => (
              <li key={element.id}>{element.name}</li>
            ))}
          </ul>
        </Section>
      </div>
    );
  }
}
