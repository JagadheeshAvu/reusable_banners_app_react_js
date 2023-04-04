import './index.css'

const BannerCards = props => {
  const {bannerDetails} = props
  const {headerText, description, className, key} = bannerDetails
  console.log(key)
  return (
    <div className="banner-card-container">
      <li className={className}>
        <div className="card-1">
          <h1 className="header-heading">{headerText}</h1>
          <p className="description">{description}</p>
          <button className="button" type="button">
            Show More
          </button>
        </div>
      </li>
    </div>
  )
}

export default BannerCards
