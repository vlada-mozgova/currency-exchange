import { FC } from 'react'
import classes from './Layout.module.scss'

interface Props {
    children: JSX.Element
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <div className={classes.layout}>
            <div className={classes.bannerWrapper}>
                <h1>Currency Converter</h1>
            </div>
            {children}
        </div>
    )
}

export default Layout