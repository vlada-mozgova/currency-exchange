import { FC, useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import CustomLink from '../../components/CustomLink/CustomLink'
import classes from './HomePage.module.scss'
import { requestOptions } from '../../utils/apiHelper'

const Home: FC = () => {
  const [amount, setAmount] = useState('1.00')
  const [baseCurrency, setBaseCurrency] = useState('')
  const [wantedCurrency, setWantedCurrency] = useState('')

  const [convertedCurrency, setConvertedCurrency] = useState('')

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (baseCurrency) setBaseCurrency(baseCurrency.toUpperCase())
    if (wantedCurrency) setWantedCurrency(wantedCurrency.toUpperCase())
  }, [baseCurrency, wantedCurrency])

  useEffect(() => {
    if (convertedCurrency) handleConvert()
  }, [amount, baseCurrency, wantedCurrency])

  const handleConvert = async () => {
    setLoading(true)

    try {
      fetch(`https://api.apilayer.com/fixer/convert?to=${wantedCurrency}&from=${baseCurrency}&amount=${amount}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          setConvertedCurrency(result.result)
          setLoading(false)
        })
        .catch(error => console.log('error', error));


    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <div className={classes.exchangeWrapper}>
      <div className={classes.exchangeTitle}>
        <h2>Convert currency</h2>
        <CustomLink label='List of currency' url='/currency-list' />
      </div>
      <div className={classes.exhangeBodyWrapper}>
        <div className={classes.exhangeBody}>
          <div className={classes.inputWrapper}>
            <h4>Amount</h4>
            <Input placeholder='Type amount' value={amount} setValue={setAmount} />
          </div>
          <div className={classes.inputWrapper}>
            <h4>From</h4>
            <Input placeholder='Type currency to convert' value={baseCurrency} setValue={setBaseCurrency} />
          </div>
          <div className={classes.inputWrapper}>
            <h4>To</h4>
            <Input placeholder='Type wanted currency' value={wantedCurrency} setValue={setWantedCurrency} />
          </div>
        </div>
        {!loading ?
          convertedCurrency && (
            <div className={classes.convertedCurrency}>
              <span>{`${amount} ${baseCurrency} = `} </span>
              <h2>{`${convertedCurrency} ${wantedCurrency}`}</h2>
            </div>
          ) :
          'Loading...'
        }
        <Button type='button' label='Convert' onClick={handleConvert} />
      </div>
    </div >
  )
}

export default Home