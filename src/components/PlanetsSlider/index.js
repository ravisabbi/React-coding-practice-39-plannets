import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  }

  return (
    <div className="app-container" data-testid="planets">
      <Slider {...settings}>
        {planetsList.map(plannet => (
          <PlanetItem plannetDetails={plannet} key={plannet.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
