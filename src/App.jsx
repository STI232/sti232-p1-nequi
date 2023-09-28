import { useEffect, useState } from 'react';
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
import { FriendPreview } from './components/pages/FriendsPreview';
import { CreateGoal } from './components/pages/CreateGoal';
import { CreationDialog } from './components/pages/CreationDialog';
import { GoalsPreview } from './components/pages/GoalsPreview';
import { StartedGoal } from './components/pages/StartedGoal';
import trash from './assets/trash.svg';

function App() {
  const [page, setPage] = useState(6);
  const [contacts, setContacts] = useState([
    {
      name: 'Daniel Gomez',
      number:'311 548 693',
      pic: contact1,
      isSelected: false
    },
    {
      name: 'Sara Carvajal ',
      number:'312 698 950',
      pic: contact2,
      isSelected: false
    },
    {
      name: 'Andrés Vargas',
      number:'302 544 211',
      pic: contact3,
      isSelected: false
    },
    {
      name: 'Myriam Loaiza',
      number:'300 251 423',
      pic: contact4,
      isSelected: false
    },
    {
      name: 'Carlos Ortiz',
      number:'318 738 258',
      pic: contact5,
      isSelected: false
    },
    {
      name: 'David  Neira',
      number:'318 738 258',
      pic: contact6,
      isSelected: false
    },
    {
      name: 'Sandra Román',
      number:'318 738 258',
      pic: contact7,
      isSelected: false
    },
    {
      name: 'Rosalba Hurtado',
      number:'318 738 258',
      pic: contact8,
      isSelected: false
    },
    {
      name: 'Jaime Jiménez',
      number:'318 738 258',
      pic: contact9,
      isSelected: false
    },
    {
      name: 'Daniela Viafara',
      number:'317 789 152',
      pic: contact10,
      isSelected: false
    },
    {
      name: 'Juan Perez',
      number:'311 548 693',
      pic: contact11,
      isSelected: false
    },
  ])
  const [contactsCounter, setContactsCounter] = useState(0);
  const [selectedContactList, setSelectedContactList] = useState([]);
  const [goalTitle, setGoalTitle] = useState('');
  const [goalDaily, setGoalDaily] = useState(0);
  const [goalDate, setGoalDate] = useState('');
  const [goalAmount, setGoalAmount] = useState(0);
  const [currentAmount, setCurrentAmount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showWinner, setShowWinner] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    setProgress((currentAmount/goalAmount)*100)
  },[currentAmount])

  const nextPage = () => {
    setPage(page + 1);
  }

  const previousPage = () => {
    setPage(page - 1);
  }

  const handleChangeAmount = (input) => {
    setGoalAmount(input);
  }

  const handleChangeTitle = (input) => {
    setGoalTitle(input);
  }

  const handleChangeDaily = (input) => {
    setGoalDaily(input);
  }

  const handleChangeDate = (input) => {
    setGoalDate(input);
  }

  const handleClose = () => {
    setOpenDialog(false);
  }

  const handleSelectContact = (i) => {
    const auxContact = contacts.slice();
    if(!auxContact[i].isSelected && contactsCounter < 9){
      auxContact[i].isSelected = true;
      setContactsCounter(contactsCounter + 1);
    }else if(auxContact[i].isSelected){
      auxContact[i].isSelected = false;
      setContactsCounter(contactsCounter - 1);
    }
    setContacts(auxContact);
  }

  useEffect(() => {
    let auxArray = [];
    contacts.forEach(contact => {
      if(contact.isSelected){
        auxArray.push(contact);
      }
    });
    setSelectedContactList(auxArray);
  },[contactsCounter])

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
      {page === 3 && 
        <BordersTemplate 
          title={'Meta Colectiva'} 
          buttonText={'Confirmar'} 
          goBack={previousPage} 
          icon={null}
          nextPage={nextPage}
        >
          <FriendPreview users={selectedContactList} />
        </BordersTemplate>
      }
      {page === 4 && 
        <BordersTemplate 
          title={'Crea una meta colectiva'} 
          buttonText={'Crea tu meta colectiva'} 
          goBack={previousPage} 
          icon={null}
          nextPage={() => setOpenDialog(true)}
          buttonColor='pink'
        >
          <CreateGoal 
            handleChangeTitle={handleChangeTitle} 
            handleChangeDaily={handleChangeDaily}
            handleChangeDate={handleChangeDate}
            handleChangeAmount={handleChangeAmount}
            title={goalTitle} 
            participants={selectedContactList}
          />
          <CreationDialog open={openDialog} handleClose={handleClose} daily={goalDaily} continueFn={nextPage} date={goalDate}/>
        </BordersTemplate>
      }
      {page === 5 && 
        <BordersTemplate 
          title={'Meta Colectiva'} 
          goBack={previousPage} 
          icon={null}
          hideButton={true}
        >
          <GoalsPreview title={goalTitle} goal={goalAmount} nextPage={nextPage} progress={progress} />
        </BordersTemplate>
      }
      {page === 6 && 
        <BordersTemplate 
          title={'Meta Colectiva'} 
          goBack={previousPage} 
          icon={trash}
          nextPage={() => {setShowWinner(true)}}
          buttonText={'Guardar'}
          buttonColor='pink'
          fullscreen
        >
          <StartedGoal 
            title={goalTitle} 
            current={currentAmount} 
            daily={goalDaily}
            date={goalDate}
            goal={goalAmount}
            members={selectedContactList}
            progress={progress}
            showWinner={showWinner}
          />
        </BordersTemplate>
      }
    </div>
  )
}

export default App
