import { useState } from 'react';
import { Form, Input, ContactsFormButton } from './ContactForm.styled';

import React from 'react';

export const ContactForm = ({ createContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = e => {
    if (e.target.name === 'name') setName(e.target.value.trim());
    if (e.target.name === 'number') setNumber(e.target.value.trim());
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    createContacts();
    setName('');
    setNumber('');
  };
  return (
    <Form onSubmit={handleSubmitForm}>
      <label>
        Name
        <Input
          onChange={handleInput}
          value={name}
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <Input
          onChange={handleInput}
          value={number}
          type="tel"
          name="number"
          placeholder="Enter number XXX-XX-XX"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <ContactsFormButton type="submit"> Add contact</ContactsFormButton>
    </Form>
  );
};

// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };

// export default class ContactForm extends Component {
//   state = INITIAL_STATE;

// handleInput = e => {
//   this.setState({
//     [e.target.name]: e.target.value.trim(),
//   });
// };

// handleSubmitForm = e => {
//   e.preventDefault();
//   this.props.createContacts(this.state);
//   this.setState(INITIAL_STATE);
// };

//   render() {
//     return (
// <Form onSubmit={this.handleSubmitForm}>
//   <label>
//     Name
//     <Input
//       onChange={this.handleInput}
//       value={this.state.name}
//       type="text"
//       name="name"
//       placeholder="Enter name"
//       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//       required
//     />
//   </label>
//   <label>
//     Number
//     <Input
//       onChange={this.handleInput}
//       value={this.state.number}
//       type="tel"
//       name="number"
//       placeholder="Enter number XXX-XX-XX"
//       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//       required
//     />
//   </label>
//   <ContactsFormButton type="submit"> Add contact</ContactsFormButton>
// </Form>
//     );
//   }
// }
