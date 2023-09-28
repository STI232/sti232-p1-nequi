import { Switch, TextField } from "@mui/material"
import { ImageCard } from "../comps/ImageCard"

export const CreateGoal = ({participants = [], handleChangeTitle, title, handleChangeDaily, handleChangeDate, handleChangeAmount}) => {
  return(
    <div className="flex flex-col gap-[22px]">
      <ImageCard 
        title={title}
        content={
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 font-semibold w-1/2">
              $<input type="number" placeholder="1000" className="w-full focus:outline-none text-lg" onChange={(e) => {handleChangeAmount(e.target.value)}}/>
            </div>
            <div className="flex">
              {participants.length >= 1 && <img src={participants[0].pic} className="h-[34px] w-[34px]"/>}
              {participants.length >= 2 && <img src={participants[1].pic} className="h-[34px] w-[34px]"/>}
              {participants.length >= 3 && <img src={participants[2].pic} className="h-[34px] w-[34px]"/>}
              {participants.length === 4 && <img src={participants[3].pic} className="h-[34px] w-[34px]"/>}
              {participants.length > 4 && <div className="rounded-full h-[30px] w-[30px] bg-[#FF2F73] text-white font-semibold flex justify-center items-center">+{participants.length-3}</div>}
            </div>
          </div>
        }
      />
      <div className="flex flex-col gap-3">
        <TextField 
          label="Nombre de la meta" 
          variant="outlined" 
          className="text-[#1D0145] text-[12px]"
          onChange={(e) => {
            handleChangeTitle(e.target.value)
          }}
          sx={{
            "& fieldset": { border: 'none' },
            bgcolor: '#F4F4F4',
            borderRadius: '8px',
          }}
        />
        <input 
          type="date" 
          placeholder="¿Cuando quieren lograrlo?"
          className="w-full bg-[#F4F4F4] text-[12px] py-[14px] px-[11px] focus:outline-none text-[#1D0145] rounded-lg"
          onChange={(e) => {handleChangeDate(e.target.value)}}
        />
        <div className="flex items-center justify-between text-[#8F8F8F] px-[11px] bg-[#F4F4F4] py-[5px]">
          <p>Descontar de Displonible</p>
          <Switch />
        </div>
        <TextField 
          label="Diario" 
          variant="outlined" 
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          onChange={(e) => {
            handleChangeDaily(e.target.value)
          }}
          sx={{
            "& fieldset": { border: 'none' },
            bgcolor: '#F4F4F4',
            borderRadius: '8px',
          }}
        />
      </div>
    </div>
  )
}