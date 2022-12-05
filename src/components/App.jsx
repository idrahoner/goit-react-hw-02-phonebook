import React from 'react';
import { nanoid } from 'nanoid';
// import PhonebookForm from 'components/PhonebookForm';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    console.log('name: ', name);
    console.log('form: ', form);
    this.setState(pervState => ({
      contacts: [...pervState.contacts, { id: nanoid(), name }],
    }));
    form.reset();
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    console.log('name: ', name);
    console.log('value: ', value);
    console.log('this.state: ', this.state);
    this.setState({ [name]: value });
  };

  render() {
    console.log(this.state.contacts);
    return (
      <div>
        {/* <PhonebookForm onSubmit={this.handleSubmit} /> */}
        <form
          onSubmit={this.handleSubmit}
          style={{ marginTop: '50px', marginLeft: '50px' }}
        >
          <label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <ul>
          {this.state.contacts.map(element => (
            <li key={element.id}>{element.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
