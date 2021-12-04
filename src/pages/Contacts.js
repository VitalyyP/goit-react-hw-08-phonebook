import Form from '../components/Form';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList/ContactList';
import s from './Pages.module.css';

export function Contacts() {
  return (
    <>
      <h1 className={s.title_left}>You can add a contact here</h1>
      <Form />
      <h2 className={s.title_left}>You can find your conctacts here</h2>
      <Filter />
      <ContactList />
    </>
  );
}
