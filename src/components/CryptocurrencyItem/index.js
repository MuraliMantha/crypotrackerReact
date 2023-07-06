import './index.css'

const CryptoItem = props => {
  const {eachDetails} = props
  const {currencyName, usdValue, euroValue, id, currencyLogo} = eachDetails
  console.log(currencyName)

  return (
    <li className="item-container">
      <div className="item-info">
        <img className="item-logo" src={currencyLogo} alt={`item${id}`} />
        <p className="currency-name">{currencyName}</p>
      </div>

      <div className="stats-info">
        <p className="currency-usd">{usdValue}</p>
        <p className="author-euro">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptoItem
