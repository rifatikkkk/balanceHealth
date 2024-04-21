import React from 'react'
import styles from '../styles/HeaderSection.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'
import { useSelector } from 'react-redux'
import { logoutUser } from '../redux/slices/userSlice'
import { useDispatch } from 'react-redux'


const HeaderSection = () => {
    const { currentUser } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleLogout = () => {
        try {
            dispatch(logoutUser())
        } catch (error) {
            console.log(error)
        }
    }


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
                                <button className={styles.nav_link} onClick={handleLogout}>Выйти из аккаунта</button>
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