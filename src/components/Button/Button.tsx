import { FC } from 'react'
import classes from './Button.module.scss'

interface Props {
    label: string
    type: "button" | "submit" | "reset" | undefined
    onClick: () => void
}

const Button: FC<Props> = ({ label, type, onClick }) => {
    return (
        <button className={classes.customButton} type={type} onClick={onClick}>{label}</button>
    )
}

export default Button