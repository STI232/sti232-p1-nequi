import topBar from '../../assets/topBar.svg'
import backIcon from '../../assets/backIcon.svg'
import { CustomButton } from '../comps/CustomButton'

export const BordersTemplate = ({title, icon, buttonText, goBack, children, nextPage}) => {
  return(
    <div className='flex flex-col'>
      <div className='pb-4'>
        <img src={topBar} className='w-full top-0'/>
        <button className='ml-4 mt-6 mb-4' onClick={goBack}>
          <img src={backIcon} />
        </button>
        <h1 className='font-sans text-[#1D0145] font-bold text-2xl ml-4'>{title}</h1>
      </div>
      <div className='h-[630px] overflow-scroll px-4'>
        {children}
      </div>
      <div className='fixed bottom-8 w-full'>
        <div className='flex justify-center'>
          <CustomButton buttonText={buttonText} onClick={nextPage} />
        </div>
      </div>
    </div>
  )
}