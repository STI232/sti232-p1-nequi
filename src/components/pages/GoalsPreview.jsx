import { ImageCard } from "../comps/ImageCard"
import bgImage from '../../assets/bgImage.png'
import { ProgressBar } from "../comps/ProgressBar"

export const GoalsPreview = ({title, goal, nextPage, progress}) => {
  return(
    <div className="flex flex-col gap-10">
      <div className="border-dashed border-[1px] w-full h-[41px] border-[#8E29DA] text-[#8E29DA] rounded-md items-center text-center text-2xl">+</div>
      <ImageCard title={title} defaultImage={bgImage} onClick={nextPage} content={
        <>
          <div className="flex justify-between text-xs">
            <p className="text-[#8F8F8F]">$ 0.00</p>
            <p>$ {goal}</p>
          </div>
          <ProgressBar progress={progress} />
        </>
      }/>
    </div>
  )
}