import { SearchBar } from "../comps/SearchBar"
import { Contact } from "../comps/Contact"

export const AddingFriends = ({contactList, handleSelect}) => {
  const abc = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
  
  return(
    <div className="flex flex-col mt-4">
      <SearchBar placeholder={'Nombre o teléfono'} />
      <div className="flex">
        <div className="pt-9 flex flex-col gap-5 h-[570px] overflow-scroll w-full">
          {contactList.map((contact, i) => (
            <Contact 
              key={i}
              pic={contact.pic} 
              name={contact.name} 
              number={contact.number} 
              isSelected={contact.isSelected} 
              handleSelect={() => handleSelect(i)}
            />
          ))}
        </div>
        <div className="w-[20px] flex flex-col text-center font-bold text-xs justify-evenly text-[#FF2F73]">
          {abc.map((letter) => (
            <div>{letter}</div>
          ))}
        </div>
      </div>
    </div>
  )
}