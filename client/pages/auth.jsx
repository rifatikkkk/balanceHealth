import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from '../styles/auth.module.scss'
import Link from 'next/link'
import { loginUser } from '../redux/slices/userSlice'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'



const Auth = () => {
    const { currentUser } = useSelector(state => state.user)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const router = useRouter()


    const handleLogin = async (e) => {
        try {
            console.log('login submit')
            e.preventDefault()
            dispatch(loginUser({ email, password }))
            setEmail('')
            setPassword('')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (currentUser) router.push('/account')
    })

    return (
        <section className={styles.auth}>
            <h1>Авторизация</h1>

            <div className={styles.auth__form}>
                <input type="text" placeholder='Почта' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Пароль' onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Авторизоваться</button>
                <p>Нет аккаунта? <Link className={styles.auth__form_link} href="/register">Зарегистрироваться!</Link></p>
            </div>
        </section>
    )
}

export default Auth