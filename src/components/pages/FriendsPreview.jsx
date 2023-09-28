import mainContact from '../../assets/contactsIcons/maincontact.png'
import { ContactIcon } from '../comps/ContactIcon'

export const FriendPreview = ({users = []}) => {
  const locations = [
    'top-[187px] left-[100px]',
    'top-[408px] left-[36px]',
    'top-[586px] left-[165px]',
    'top-[538px] left-[49px]',
    'top-[253px] left-[193px]',
    'top-[525px] left-[263px]',
    'top-[393px] left-[317px]',
    'top-[264px] left-[20px]',
    'top-[218px] left-[288px]',
  ]

  return(
    <div className="">
      <div className="w-[420px] h-[420px] bg-[#A5F0F6] rounded-full fixed top-[212px] right-[-15px]">
        <div className="w-[261px] h-[261px] bg-[#6CD5DE] rounded-full fixed top-[291px] right-[64px]">
          <div className="w-[133px] h-[133px] bg-[#25919A] rounded-full fixed top-[355px] right-[129px]">
            <img src={mainContact} className='pl-3'/>
            <p className='text-[#1D0145] font-bold text-lg pl-11 pt-3'>Maria</p>
          </div>
        </div>
      </div>
      {users.map((user, i) => (
        <div className={'fixed ' + locations[i]}>
          <ContactIcon icon={user.pic} name={user.name.split(' ')[0]} />
        </div>
      ))
      }
    </div>
  )
}