import { useEffect } from 'react'
import { getCurrency } from '../../redux/currencySlice'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { convertApiFormat, requestOptions } from '../../utils/apiHelper'
import classes from './CurrencyPage.module.scss'

const CurrencyPage = () => {
    const dispatch = useAppDispatch()
    const currencyList = useAppSelector(state => state.currency)

    const getLatestCurrency = async (base: string) => {
        fetch(`https://api.apilayer.com/fixer/latest?symbols=UAH%2CEUR%2CUSD%2CCZK%2CPLN&base=${base}`, requestOptions)
            .then(response => response.json())
            .then(rezult => {
                dispatch(getCurrency(convertApiFormat(rezult)))
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        getLatestCurrency('UAH')
    }, [])

    const handleChangeBaseCurrency = async (base: string) => {
        getLatestCurrency(base)
    }

    return (
        <div className={classes.currencyPage}>
            <table className={classes.currencyTable}>
                <thead>
                    <tr>
                        <td>Currency</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    {currencyList && currencyList.map(currency => (
                        <tr key={currency.currency} onClick={() => handleChangeBaseCurrency(currency.currency)}>
                            <td>{currency.currency}</td>
                            <td>{currency.rate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CurrencyPage