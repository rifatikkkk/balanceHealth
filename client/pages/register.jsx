import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from '../styles/auth.module.scss'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { registerUser } from '../redux/slices/userSlice'

const Register = () => {
    const { currentUser } = useSelector(state => state.user)


    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [district, setDisctrict] = useState('')
    const dispatch = useDispatch()
    const router = useRouter()

    const handleRegister = async (e) => {
        try {
            console.log('register submit')
            console.log(name, email, password, district)
            e.preventDefault()
            dispatch(registerUser({ email, name, password, district }))
            setEmail('')
            setName('')
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
            <h1>Регистрация</h1>

            <div className={styles.auth__form}>
                <input type="text" placeholder='ФИО' onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='Почта' onChange={(e) => setEmail(e.target.value)} />
                <select name="Район" id="district" onChange={(e) => setDisctrict(e.target.value)}>
                    <option value="Адмиралтейский">Адмиралтейский</option>
                    <option value="Василеостровский">Василеостровский</option>
                    <option value="Выборгский">Выборгский</option>
                    <option value="Калининский">Калининский</option>
                    <option value="Кировский">Кировский</option>

                    <option value="Колпинский">Колпинский</option>
                    <option value="Красногвардейский">Красногвардейский</option>
                    <option value="Красносельский">Красносельский</option>
                    <option value="Кронштадтский">Кронштадтский</option>
                    <option value="Курортный">Курортный</option>

                    <option value="Московский">Московский</option>
                    <option value="Невский">Невский</option>
                    <option value="Петроградский">Петроградский</option>
                    <option value="Петродворцовый">Петродворцовый</option>
                    <option value="Приморский">Приморский</option>

                    <option value="Пушкинский">Пушкинский</option>
                    <option value="Фрунзенский">Фрунзенский</option>
                    <option value="Центральный">Центральный</option>
                    <option value="Ленинградская область">Ленинградская область</option>
                </select>
                {/* <input type="text" placeholder='Район' onChange={(e) => setDisctrict(e.target.value)} /> */}
                <input type="password" placeholder='Пароль' onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleRegister}>Зарегистрировать</button>
                <p>Имеется аккаунт? <Link className={styles.auth__form_link} href="/auth">Авторизоваться!</Link></p>
            </div>
        </section>
    )
}

export default Register