import img from '../../assets/nequiMainPage.svg'

export const MainPage = (props) => {
  return(
    <div>
      <img src={img} />
      <div className=' w-14 h-24 absolute bottom-48 right-56' onClick={props.nextPage}>
      </div>
    </div>
  )
}