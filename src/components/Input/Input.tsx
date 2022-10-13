import React, { FC } from 'react'
import classes from './Input.module.scss'

interface Props {
    placeholder: string
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const Input: FC<Props> = ({ placeholder, value, setValue }) => {
    const handleChange = (e: any) => {
        setValue(e.currentTarget.value)
    }
    return (
        <input className={classes.customInput} type='text' placeholder={placeholder} value={value} onChange={handleChange} />
    )
}

export default Input