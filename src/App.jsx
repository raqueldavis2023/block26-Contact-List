import { useState } from 'react'
import './App.css'
import ContactList from './components/Contactlist'

export default function App() {
    const [contacts, setContacts] = useState(null);

   return (
    <>
      <ContactList />
    </>
  );
}


