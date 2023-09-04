import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/contactsOperation';
import css from '../ContactList/ContactList.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDelete = id => dispatch(deleteContact(id));
  return (
    <li id={id} className={css.contactItem}>
      {name}.........................................{number}
      <button onClick={() => onDelete(id)}> Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
