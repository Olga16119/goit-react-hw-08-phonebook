import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addContact } from 'redux/Contacts/contactsOperation';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onChangeForm = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'number':
        setNumber(value);
        break;

      case 'name':
        setName(value);
        break;

      default:
        throw new Error('Error');
    }
  };

  const onSubmitForm = event => {
    event.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLocaleLowerCase()
      ) ||
      contacts.find(contact => contact.number === number)
    ) {
      return alert(` ${name} already is in phonebook`);
      }
      const newContact={name, number}
    dispatch(addContact(newContact));
    resetForm();

  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Enter your name"
        value={name}
        onChange={onChangeForm}
        id={nanoid()}
        required
      ></input>
      <input
        type="tel"
        name="number"
        placeholder="Enter your number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={onChangeForm}
        id={nanoid()}
      />
      <button>Add Contact</button>
    </form>
  );
};

export default ContactForm;
