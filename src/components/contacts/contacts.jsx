import { TfiEmail, TfiMobile } from 'react-icons/tfi';
import { ContactsList, ContactsLink } from './contacts.styled';

export function Contacts() {
  return (
    <ContactsList>
      <li>
        <ContactsLink href="mailto:feremiks@gmail.com">
          <TfiEmail /> <span>feremiks@gmail.com</span>
        </ContactsLink>
      </li>
      <li>
        <ContactsLink href="tel:+421944038946">
          <TfiMobile />
          <span> +421944038946</span>
        </ContactsLink>
      </li>
    </ContactsList>
  );
}
