export const ContactIcon = ({icon, name}) => {
  return(
    <div className="flex flex-col">
      <div className="bg-white rounded-full w-[62px] h-[62px] shadow-xl flex justify-center">
        <img src={icon} alt={name} />
      </div>
      <p className="text-center">{name}</p>
    </div>
  )
}