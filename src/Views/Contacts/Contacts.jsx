import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/Contacts/contactsOperation';
import Loader from 'components/Loader/Loader';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>CONTACTS</h1>
      <ContactForm />
      <Filter />
      <ContactList />
      {isLoading && <Loader />}
    </>
  );
};

export default Contacts;
