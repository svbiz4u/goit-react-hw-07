import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from './ContactList.module.css'

import { selectFilteredContacts } from "../../redux/contactsSlice";


const ContactList = () => {

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.wrapper}>
          {filteredContacts.map((item) => (
              <li key={item.id} {...item}>
                  {<Contact id={item.id} name={item.name} number={item.number} /> }
              </li>
          ))}
    </ul>
  )
}

export default ContactList