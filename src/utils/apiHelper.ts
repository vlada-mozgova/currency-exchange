import { Currency } from "../redux/currencySlice";

const myHeaders = new Headers();
myHeaders.append('apikey', process.env.REACT_APP_API_KEY as string);

export const requestOptions = {
    method: 'GET',
    headers: myHeaders
};

export const convertApiFormat = (rezult: {
    "success": boolean,
    "timestamp": number,
    "base": string,
    "date": string,
    "rates": {
        "GBP": number,
        "JPY": number,
        "EUR": number,
    }
}) => {
    const curencyList: Currency[] = []
    const rates = rezult.rates;
    let k: keyof typeof rates;
    for (k in rates) {
        const v = rates[k];
        curencyList.push({ currency: k, rate: v })
    }
    const baseCurrency = curencyList.find(item => item.currency === rezult.base)
    const formattedList = curencyList.filter(item => item.currency !== baseCurrency?.currency)
    formattedList.unshift(baseCurrency as Currency)
    return formattedList;
}