import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Currency {
    currency: string
    rate: number
}
const initialState: Currency[] = [
    {
        currency: 'UAH',
        rate: 1
    },
    {
        currency: 'CZK',
        rate: 0.682978
    },
    {
        currency: 'EUR',
        rate: 0.027785
    },
    {
        currency: 'PLN',
        rate: 0.13441
    },
    {
        currency: 'USD',
        rate: 0.02707
    },
]

export const getCurrency = createAsyncThunk<Currency[], Currency[]>(
    'currency/getCurrency',
    async (currencyList) => {
        return currencyList
    }
)

// export const setCurrency = createAsyncThunk<Currency[]>(
//     'currency/setCurrency',
//     async () => {
//         return initialState
//     }
// )

const currencySlice = createSlice({
    name: 'currency',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCurrency.fulfilled, (state: Currency[], { payload }) => {
            return payload
        })
    }
})

export default currencySlice.reducer