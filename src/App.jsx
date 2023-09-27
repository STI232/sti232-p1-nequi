import { useState } from 'react';
import './App.css'
import { MainPage } from './components/pages/MainPage'
import { BordersTemplate } from './components/templates/BordersTemplate';
import { GettingStarted } from './components/pages/GettingStarted';
import { AddingFriends } from './components/pages/AddingFriends';
import contact1 from "./assets/contactsIcons/contact1.png"
import contact2 from "./assets/contactsIcons/contact2.png"
import contact3 from "./assets/contactsIcons/contact3.png"
import contact4 from "./assets/contactsIcons/contact4.png"
import contact5 from "./assets/contactsIcons/contact5.png"
import contact6 from "./assets/contactsIcons/contact6.png"
import contact7 from "./assets/contactsIcons/contact7.png"
import contact8 from "./assets/contactsIcons/contact8.png"
import contact9 from "./assets/contactsIcons/contact9.png"
import contact10 from "./assets/contactsIcons/contact10.png"
import contact11 from "./assets/contactsIcons/contact11.png"

function App() {
  const [page, setPage] = useState(2);
  const [contacts, setContacts] = useState([
    {
      name: 'Daniel Gomez',
      number:'311 548 693',
      pic: contact1,
      isSelected: false
    },
    {
      name: 'Daniel Gomez',
      number:'311 548 693',
      pic: contact2,
      isSelected: false
    },
    {
      name: 'Daniel Gomez',
      number:'311 548 693',
      pic: contact3,
      isSelected: false
    },
    {
      name: 'Daniel Gomez',
      number:'311 548 693',
      pic: contact4,
      isSelected: false
    },
    {
      name: 'Daniel Gomez',
      number:'311 548 693',
      pic: contact5,
      isSelected: false
    },
    {
      name: 'Daniel Gomez',
      number:'311 548 693',
      pic: contact6,
      isSelected: false
    },
    {
      name: 'Daniel Gomez',
      number:'311 548 693',
      pic: contact7,
      isSelected: false
    },
    {
      name: 'Daniel Gomez',
      number:'311 548 693',
      pic: contact8,
      isSelected: false
    },
    {
      name: 'Daniel Gomez',
      number:'311 548 693',
      pic: contact9,
      isSelected: false
    },
    {
      name: 'Daniel Gomez',
      number:'311 548 693',
      pic: contact10,
      isSelected: false
    },
    {
      name: 'Daniel Gomez',
      number:'311 548 693',
      pic: contact11,
      isSelected: false
    },
  ])
  const [contactsCounter, setContactsCounter] = useState(0);

  const nextPage = () => {
    setPage(page + 1);
  }

  const previousPage = () => {
    setPage(page - 1);
  }

  const handleSelectContact = (i) => {
    const auxContact = contacts.slice();
    if(!auxContact[i].isSelected && contactsCounter < 10){
      auxContact[i].isSelected = true;
      setContactsCounter(contactsCounter + 1);
    }else if(auxContact[i].isSelected){
      auxContact[i].isSelected = false;
      setContactsCounter(contactsCounter - 1);
    }
    setContacts(auxContact);
  }

  return (
    <div>
      {page === 0 && <MainPage nextPage={nextPage} />}
      {page === 1 && 
        <BordersTemplate 
          title={'Meta Colectiva'} 
          buttonText={'Crear mi ahorro colectivo'} 
          goBack={previousPage} 
          icon={null}
          nextPage={nextPage}
        >
          <GettingStarted />
        </BordersTemplate>
      }
      {page === 2 && 
        <BordersTemplate 
          title={'Agrega a tus amigos'} 
          buttonText={'Continuar'} 
          goBack={previousPage} 
          icon={null}
          nextPage={nextPage}
        >
          <AddingFriends contactList={contacts} handleSelect={handleSelectContact} />
        </BordersTemplate>
      }
    </div>
  )
}

export default App
