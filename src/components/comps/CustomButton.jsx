export const CustomButton = ({variant='blue', onClick = () => {}, buttonText = ''}) => {
  return(
    <>
      {variant === 'pink' && 
        <button className='rounded-full bg-[#FF2F73] text-white w-full mx-5 h-9' onClick={onClick}>
         {buttonText}
       </button>
      }
      {variant === 'blue' && 
        <button className='rounded-full bg-[#2FCAD7] text-white w-full mx-5 h-9' onClick={onClick}>
         {buttonText}
       </button>
      }
    </>
  )
}