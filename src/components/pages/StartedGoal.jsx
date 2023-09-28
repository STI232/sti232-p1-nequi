import { useEffect, useState } from 'react';
import bgImage from '../../assets/bgImage.png'
import { ProgressBar } from '../comps/ProgressBar';
import { Switch, TextField } from '@mui/material';
import { Contact } from '../comps/Contact';
import me from '../../assets/contactsIcons/maincontact.png'

export const StartedGoal = ({title='Title', date='2023-12-12', current, goal=0, daily=0, members=[], progress=10, showWinner=false}) => {
  const [newDate, setNewDate] = useState('');
  useEffect(() => {
    let auxDate = date.split('-');
    const year = auxDate[0];
    const day = auxDate[2];
    const month = () =>{
      switch(auxDate[1]){
        case '01':
          return 'Enero'; 
        case '02':
          return 'Febrero';
        case '03':
          return 'Marzo';
        case '04':
          return 'Abril';
        case '05':
          return 'Mayo';
        case '06':
          return 'Junio';
        case '07':
          return 'Julio';
        case '08':
          return 'Agosto';
        case '09':
          return 'Septiembre';
        case '10':
          return 'Octubre';
        case '11':
          return 'Noviembre';
        case '12':
          return 'Diciembre';
      }
    }
    setNewDate(`${day} de ${month()} del ${year}`);
  },[date]);
  return(
    <div className="">
      <img src={bgImage} className='w-full rounded-t-3xl' />
      <div className='bg-[#02178F] w-full h-7 mt-[-7px]'/>
      <div className='pt-[32px]  bg-white rounded-3xl mt-[-21px] px-[30px]' >
        <h1 className='text-[#1D0145] text-[20px] font-bold'>{title}</h1>
        <p className='text-[#8F8F8F] text-[13px]'>Finaliza el {newDate}</p>
        <div className='flex flex-col gap-2'>
          <div className="flex justify-between text-xs mt-5">
            <p className="text-[#8F8F8F]">$ {current}</p>
            <p>$ {goal}</p>
          </div>
          <ProgressBar progress={progress} />
        </div>
        <TextField 
          label="Recargar tu Meta" 
          variant="outlined" 
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          onChange={(e) => {
            handleChangeDaily(e.target.value)
          }}
          sx={{
            "& fieldset": { border: 'none' },
            bgcolor: '#F4F4F4',
            borderRadius: '8px',
            width: '100%',
            marginTop: 4,
          }}
        />
        <div className="flex items-center justify-between text-[#8F8F8F] px-[11px] bg-[#F4F4F4] py-[5px] rounded-xl mt-4">
          <p>Descontar de Displonible</p>
          <Switch />
        </div>
        <div className='rounded-xl w-full bg-[#F4F4F4] mt-4 py-[8px] px-[14px]'>
          <p className='text-[#2FCAD7] text-[11px]'>Diario</p>
          <p className='font-semibold text-[#1D0145]'>$ {daily}</p>
        </div>
        {showWinner &&
          <div className='flex flex-col items-center gap-3 text-center'>
            <div className='rounded-full w-[99px] h-[99px] shadow-xl flex items-center justify-center'>
              <img src={me} className='w-[88px] h-[88px]' />
            </div>
            <p className='text-[20px] text-[#8C8C8C]'>Felicidades Andrea eres la <b>ahorradora #1</b> de la semana</p>
          </div>
        }
        <div className='flex flex-col gap-5 mt-8'>
          <Contact 
            customNameStyle='text-sm font-semibold text-[#2FCAD7]' 
            customNumberStyle='text-xs text-[#8C8C8C]' 
            hideSelect
            name={'Maria Ocampo (Tú)'}
            number={'$1000,00'}
            pic={me}
          />
          {members.map((member,i) => (
            <Contact
              customNameStyle='text-sm font-semibold text-[#2FCAD7]' 
              customNumberStyle='text-xs text-[#8C8C8C]' 
              hideSelect
              name={member.name}
              number={'$0,00'}
              pic={member.pic}
            />
          ))}
        </div>
      </div>
    </div>
  )
}