import { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import React from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  const createContacts = dataForm => {
    const existingContact = contacts.find(
      contact => contact.name === dataForm.name
    );
    if (existingContact) {
      return alert(`${dataForm.name} is already in contacts`);
    }
    const newContact = {
      ...dataForm,
      id: nanoid(),
    };

    setContacts(prev => [newContact, ...prev]);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const deleteContacts = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm createContacts={createContacts} />

        <h2>Contacts</h2>

        <Filter handleFilter={handleFilter} filter={filter} />
        <ContactList
          contacts={contacts}
          deleteContacts={deleteContacts}
          filter={filter}
        />
      </div>
    </>
  );
};

// export class App extends Component {
//   state = {
//     contacts: [],
//     // contacts: [
//     //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     // ],
//     filter: '',
//   };

//   componentDidMount() {
// const contacts = JSON.parse(localStorage.getItem('contacts'));
// if (contacts) {
//   this.setState({ contacts });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   createContacts = dataForm => {
//     const existingContact = this.state.contacts.find(
//       contact => contact.name === dataForm.name
//     );

//   if (existingContact) {
//     return alert(`${dataForm.name} is already in contacts`);
//   }
//   const newContact = {
//     ...dataForm,
//     id: nanoid(),
//   };

//   this.setState(prev => ({
//     contacts: [newContact, ...prev.contacts],
//   }));
// };

// handleFilter = ({ target: { value } }) => {
//   this.setState({
//     filter: value,
//   });
// };

// deleteContacts = id => {
//   this.setState(prev => ({
//     contacts: prev.contacts.filter(el => el.id !== id),
//   }));
// };

//   render() {
//     const { contacts, filter } = this.state;

// const filteredContacts = contacts.filter(contact =>
//   contact.name.toLowerCase().includes(filter.toLowerCase())
// );

//     return (
// <>
//   <div>
//     <h1>Phonebook</h1>
//     <ContactForm createContacts={this.createContacts} />

//     <h2>Contacts</h2>

//     <Filter handleFilter={this.handleFilter} filter={this.state.filter} />
//     <ContactList
//       contacts={this.state.contacts}
//       deleteContacts={this.deleteContacts}
//       filteredContacts={filteredContacts}
//     />
//   </div>
// </>
//     );
//   }
// }

// export default App;
