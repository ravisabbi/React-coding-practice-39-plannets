import './index.css'

const PlanetItem = props => {
  const {plannetDetails} = props

  const {name, imageUrl, description} = plannetDetails

  return (
    <div className="plannet-item-container">
      <h1 className="plannets-heading">PLANETS</h1>
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
