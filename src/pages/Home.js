import s from './Pages.module.css';
export function Home() {
  return (
    <>
      <p className={s.title}>Welcome.</p>
      <p className={s.title}>You can keep your phonebook contacts here.</p>
      <p className={s.title}>But you need to login before.</p>
    </>
  );
}
