import './index.css'

const BannerCards = props => {
  const {bannerDetails} = props
  const {headerText, description, key} = bannerDetails
  console.log(key)
  return (
    <div className="banner-card-container">
      <div className="card-1">
        <h1 className="header-heading">{headerText}</h1>
        <p className="description">{description}</p>
        <p className="button">Show More</p>
      </div>
    </div>
  )
}

export default BannerCards
