import css from './ContactList.module.css';
import { Contact } from 'components/Contact/Contact';

import { useSelector } from 'react-redux/es/hooks/useSelector';

export const ContactList = () => {
  const contacts = useSelector(state=> state.contacts)
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
          <Contact
          id={contact.id}
            key={contact.id}
            name={contact.name}
            number={contact.number}
           
          />
      ))}
    </ul>
  );
};
