// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationsDetails} = props

  const {name, imgUrl} = destinationsDetails

  console.log(name)
  return (
    <li className="list-item">
      <div>
        <img src={imgUrl} alt={name} className="img" />
        <p className="name">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
