import checkIcon from '../../assets/checkIcon.png'

export const Contact = ({name, pic, number, isSelected = false, handleSelect}) => {
  return(
    <div className="flex justify-between items-center">
      <div className="flex gap-6 items-center">
        <div className="rounded-full shadow-lg">
          <img src={pic} alt="contact" className='h-11 w-10' />
        </div>
        <div className="text-[#1D0145]">
          <h3 className="text-sm font-semibold">{name}</h3>
          <p className="text-xs">{number}</p>
        </div>
      </div>
      <div onClick={handleSelect} className='pr-4'>
        {isSelected ? 
          <img src={checkIcon} className='w-6 h-6'/>
          :
          <div className="border-2 rounded-full border-[#1D0145] w-6 h-6" />
        }
      </div>
    </div>
  )
}