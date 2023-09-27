import searchIcon from '../../assets/searchIcon.svg'

export const SearchBar = ({placeholder}) => {
  return(
    <div className='flex'>
      <div className='bg-gray-200 flex rounded-s-lg'>
        <img src={searchIcon} className='w-3 mx-3' />
      </div>
      <input 
        type="text" 
        placeholder={placeholder} 
        className="border-none rounded-e-lg bg-gray-200 text-xs py-3 focus:outline-none w-full"/>
    </div>
  )
}