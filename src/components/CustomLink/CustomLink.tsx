import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import classes from './CustomLink.module.scss'

interface Props {
    label: string
    url: string
}

const CustomLink: FC<Props> = ({ label, url }) => {
    return (
        <Link className={classes.customLink} to={url}>{label}</Link>
    )
}

export default CustomLink