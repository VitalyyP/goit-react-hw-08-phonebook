import { useSelector } from 'react-redux';
import Contact from '../Contact';
import { useFetchContactsQuery } from '../../redux/contactsSlice';
import s from './ContactList.module.css';

export default function ContactList() {
  const { filter } = useSelector(state => state.contacts);
  const { data } = useFetchContactsQuery();

  const getVisibleContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = allContacts
      ? allContacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter),
        )
      : [];
    return visibleContacts;
  };

  return (
    <>
      <h3 className={s.title_left}>There are all your contacts</h3>
      <ul>
        {getVisibleContacts(data, filter).map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
}
