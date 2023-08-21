import React from 'react';
import {List, Item, Button} from './ContactList.styled'

function ContactList({ contacts, onDeleteContact }) {
  return (
    <List>
      {contacts.map((contact) => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <Button onClick={() => onDeleteContact(contact.id)}>Delete</Button>
        </Item>
      ))}
    </List>
  );
}

export default ContactList;
