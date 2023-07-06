import CryptoItem from '../CryptocurrencyItem'
import './index.css'

const CryptoList = props => {
  const {cryptoList} = props

  return (
    <ul className="crypto-container">
      <li className="heading-container">
        <h1 className="">Coin Type</h1>
        <div className="head-container">
          <h1 className="">USD</h1>
          <h1 className="">EURO</h1>
        </div>
      </li>
      {cryptoList.map(eachDetails => (
        <CryptoItem eachDetails={eachDetails} key={eachDetails.id} />
      ))}
    </ul>
  )
}

export default CryptoList
