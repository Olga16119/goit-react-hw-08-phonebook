import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/Contacts/contactsOperation';
import Loader from 'components/Loader/Loader';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import css from '../Views.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsPage}>
      <h2>YOUR CONTACTS</h2>
      <ContactForm />
      <Filter />
      <ContactList />
      {isLoading && <Loader />}
    </div>
  );
};

export default Contacts;
