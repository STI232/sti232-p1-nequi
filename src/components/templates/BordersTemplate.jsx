import topBar from '../../assets/topBar.svg'
import backIcon from '../../assets/backIcon.svg'
import { CustomButton } from '../comps/CustomButton'

export const BordersTemplate = ({title, icon=null, buttonText, goBack, children, nextPage, buttonColor='blue', hideButton = false, fullscreen=false}) => {
  return(
    <div className='flex flex-col'>
      <div className='pb-4'>
        <img src={topBar} className='w-full top-0'/>
        <button className='ml-4 mt-6 mb-4' onClick={goBack}>
          <img src={backIcon} />
        </button>
        <div className='flex justify-between mx-4'>
          <h1 className='font-sans text-[#1D0145] font-bold text-2xl '>{title}</h1>
          {icon !== null && <img src={icon} className='w-6 h-6'/>}
        </div>
      </div>
      <div className={fullscreen ? 'h-[630px] overflow-scroll ': 'h-[630px] overflow-scroll px-4'}>
        {children}
      </div>
      <div className='fixed bottom-8 w-full'>
        <div className='flex justify-center'>
          {!hideButton && <CustomButton buttonText={buttonText} onClick={nextPage} variant={buttonColor} />}
        </div>
      </div>
    </div>
  )
}