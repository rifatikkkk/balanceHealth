import React from 'react'
import styles from '../styles/HeaderSection.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'
import { useSelector } from 'react-redux'

import logoUser from '../public/logoUser.png'


const HeaderSection = () => {
    const { currentUser } = useSelector(state => state.user)

    return (
        <header className={styles.header}>
            <div className="wrapper">
                <nav className={styles.nav}>
                    <Link className={styles.nav__logo} href="/">
                        <Image src={logo} alt="logo" className={styles.nav__logo_img} />
                        <p className={styles.nav__logo_title}>БаланСЗдоровья</p>
                    </Link>
                    <ul className={`${styles.nav__list} ${styles.nav_right}`}>
                        <li className={styles.nav__item}>
                            {currentUser ? (
                                <Link href='/account'>
                                    <Image src={logoUser} alt='logoUser' className={styles.nav_img} />
                                </Link>
                            ) : (
                                <Link className={styles.nav_link} href='/auth'>Войти в аккаунт</Link>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default HeaderSection