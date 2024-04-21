import React, { useEffect, useState } from 'react'
import styles from '../styles/account.module.scss'
import { useSelector } from 'react-redux'
import axios from '../utils/axios.js'
import { useRouter } from 'next/router'
import { logoutUser } from '../redux/slices/userSlice'
import { useDispatch } from 'react-redux'




const Account = () => {
    const { currentUser } = useSelector(state => state.user)
    const [fluor, setFluor] = useState('')
    const [influenza, setInfluenza] = useState('')
    const [blood, setBlood] = useState('')
    const [urine, setUrine] = useState('')
    const [ecg, setEcg] = useState('')

    const dispatch = useDispatch()
    const router = useRouter()


    const handleLogout = () => {
        try {
            dispatch(logoutUser())
        } catch (error) {
            console.log(error)
        }
    }

    const handleCheckUps = async () => {
        try {

            if (fluor !== '' && influenza !== '' && blood !== '' && urine !== '' & ecg !== '') {
                const data = await axios.post('/user/checkups', {
                    fluor: new Date(fluor),
                    influenza: new Date(influenza),
                    blood: new Date(blood),
                    urine: new Date(urine),
                    ecg: new Date(ecg),
                })

                if (data.status === 200)
                    alert("Данные успешно отправлены!")
            }
            else alert("Введите недостающие данные!")


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (!currentUser) router.push('/')
    })



    const getCurrentDate = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        return today
    }


    return (
        <section className={styles.account}>
            <div className='wrapper'>
                {currentUser ? (
                    <div>
                        <div className={styles.account__form}>
                            <h1>Личный кабинет</h1>
                            <p>ФИО: <b>{currentUser.user?.name}</b></p>
                            <p>Почта: <b>{currentUser.user?.email}</b></p>
                            <p>Район: <b>{currentUser.user?.district}</b></p>
                            <div className={styles.account__form__medbook}>
                                <h3 className={styles.account__form__medbook_title}>Результаты обследований</h3>
                                <div className={styles.account__form__medbook__date}>
                                    <div className={styles.account__form__medbook__content}>
                                        <p>Флюрография</p>
                                        <input id='fluor' type="date" min="1940-01-01" max={getCurrentDate()} onChange={(e) => setFluor(e.target.value)} />
                                    </div>
                                    <div className={styles.account__form__medbook__content}>
                                        <p>Прививка от гриппа</p>
                                        <input id='influenza' type="date" min="1940-01-01" max={getCurrentDate()} onChange={(e) => setInfluenza(e.target.value)} />
                                    </div>
                                    <div className={styles.account__form__medbook__content}>
                                        <p>Анализ крови</p>
                                        <input id='blood' type="date" min="1940-01-01" max={getCurrentDate()} onChange={(e) => setBlood(e.target.value)} />
                                    </div>
                                    <div className={styles.account__form__medbook__content}>
                                        <p>Анализ мочи</p>
                                        <input id='urine' type="date" min="1940-01-01" max={getCurrentDate()} onChange={(e) => setUrine(e.target.value)} />
                                    </div>
                                    <div className={styles.account__form__medbook__content}>
                                        <p>ЭКГ</p>
                                        <input id='ecg' type="date" min="1940-01-01" max={getCurrentDate()} onChange={(e) => setEcg(e.target.value)} />
                                    </div>
                                </div>

                                <button className={styles.account__form_send} onClick={handleCheckUps}>Отправить данные</button>
                            </div>
                            <button className={styles.account__form_link} onClick={handleLogout}>Выйти из аккаунта</button>
                        </div>
                    </div>
                ) : (
                    <div>
                        No account
                    </div>
                )}
            </div>

        </section>
    )
}

export default Account