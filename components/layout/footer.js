import Link from 'next/link'

import classes from './MainNavigation.module.css'

function Footer(){
    return(
        <div className={classes.header}>
            <div className={classes.logo}>PLANETAKINO</div>
            <nav>
                <ul>
                    <li>
                        <Link href='/testPage'>Contacts</Link>
                    </li>
                    <li>
                        <Link href='/testPage'>Some useful information</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Footer