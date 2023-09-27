import cashFace from '../../assets/MoneyEmoji.png'

export const GettingStarted = () => {
  return(
    <div className="w-full h-full flex flex-col justify-center items-center gap-14">
      <img src={cashFace} alt="" className='w-24' />
      <p className="text-cyan-400 text-center">Aquí estarán tus metas colectivas</p>
    </div>
  )
}