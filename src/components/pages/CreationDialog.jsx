import { Dialog, DialogContent } from "@mui/material"
import piggybanknequi from '../../assets/piggybanknequi.png'
import { useEffect, useState } from "react"

export const CreationDialog = ({open, handleClose, daily, date, continueFn}) => {
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
    <Dialog open={open} onClose={handleClose} style={{backgroundColor: 'rgba(33, 0, 73, 0.6)'}}>
      <div className="w-[320px] h-[336px] flex flex-col text-center px-[17px] py-[30px] items-center mb-[13px]">
        <img src={piggybanknequi} className="w-[104px] h-[104px] mt-[27px]"/>
        <h2 className="font-semibold text-[#1D0145] mb-[12px]">¡Tú Meta colectiva está creada!</h2>
        <p className="text-[14px] mb-[25px]">
          Con tu grupo de amigos lograrán la meta el {newDate} y Pagarán $ {daily} que saldrán diario del disponible.
        </p>
        <button className="border-[1px] border-solid border-[#FF2F73] w-full rounded-full text-[#FF2F73] p-[5px]" onClick={() => {
          continueFn();
          handleClose();
        }} >Listo</button>
      </div>
    </Dialog>
  )
}