import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptoList from '../CryptocurrenciesList'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {cryptoData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachDetail => ({
      currencyName: eachDetail.currency_name,
      usdValue: eachDetail.usd_value,
      euroValue: eachDetail.euro_value,
      id: eachDetail.id,
      currencyLogo: eachDetail.currency_logo,
    }))

    this.setState({cryptoData: updatedData, isLoading: false})
  }

  render() {
    const {cryptoData, isLoading} = this.state
    console.log(cryptoData)

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-image"
        />

        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <CryptoList cryptoList={cryptoData} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
