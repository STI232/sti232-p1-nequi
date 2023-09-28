import { useState } from 'react'
import imageAlt from '../../assets/noImage.svg'
import bgImage from '../../assets/bgImage.png'

export const ImageCard = ({title='', content, defaultImage=null, onClick=() => {}}) => {
  const [image, setImage] = useState(defaultImage);
  return(
    <div className="rounded-xl w-full h-[146px] flex flex-col shadow-xl" onClick={onClick}>
      <div className='bg-[#F4F4F4] flex h-[89px] rounded-t-xl justify-center items-center'>
        {image === null ?
          <div className='rounded-full bg-[#E4E4E4] w-[50px] h-[50px] flex justify-center items-center' onClick={() => setImage(bgImage)}>
            <img src={imageAlt} alt="" className='w-6 h-6' />
          </div>
        :
          <img src={image} alt="" className="w-full mt-11 rounded-t-xl" />
        }
      </div>
      <div className="bg-white w-full h-[62px] px-[10px] pt-2 rounded-b-xl">
        <h2 className={title === '' ? 'text-[#8F8F8F] text-[14px]' : 'text-[#1D0145] text-[14px] font-semibold'}>
          {title === '' ? 'Nombre' : title}
        </h2>
        {content}
      </div>
    </div>
  )
}