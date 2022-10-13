import { FC, useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import classes from './Home.module.scss'

const Home: FC = () => {
  const [amount, setAmount] = useState('1.00')
  const [baseCurrency, setBaseCurrency] = useState('')
  const [wantedCurrency, setWantedCurrency] = useState('')

  const [convertedCurrency, setConvertedCurrency] = useState('')

  useEffect(() => {
    if (baseCurrency) setBaseCurrency(baseCurrency.toUpperCase())
    if (wantedCurrency) setWantedCurrency(wantedCurrency.toUpperCase())
  }, [baseCurrency, wantedCurrency])

  useEffect(() => {
    if (convertedCurrency) handleConvert()
  }, [amount])

  const handleConvert = () => { }

  return (
    <div className={classes.exchangeWrapper}>
      <h2>Convert currency</h2>
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
        {convertedCurrency &&
          <div className={classes.convertedCurrency}>
            <span>{`${amount} ${baseCurrency} =`} </span>
            <h2>{`${convertedCurrency} ${wantedCurrency}`}</h2>
          </div>
        }
        <Button type='button' label='Convert' onClick={handleConvert} />
      </div>
    </div>
  )
}

export default Home