import React, { useState } from 'react'
import styles from '../styles/account.module.scss'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import logoUser from '../public/logoUser.png'
import axios from '../utils/axios.js'




const Account = () => {
    const { currentUser } = useSelector(state => state.user)
    const [fluor, setFluor] = useState('')
    const [influenza, setInfluenza] = useState('')
    const [blood, setBlood] = useState('')
    const [urine, setUrine] = useState('')
    const [ecg, setEcg] = useState('')


    const handleCheckUps = async () => {
        try {
            const data = await axios.post('/user/checkups', {
                fluor: new Date(fluor),
                influenza: new Date(influenza),
                blood: new Date(blood),
                urine: new Date(urine),
                ecg: new Date(ecg),
            })

            if (data.status === 200)
                alert("Данные успешно отправлены!")

        } catch (error) {
            console.log(error)
        }
    }



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
                    <div className={styles.account__form}>
                        <div className={styles.account__form__content}>
                            <Image src={logoUser} alt="logoUser" className={styles.account__form_img} />
                            <h2>{currentUser.user.name}</h2>
                        </div>
                        <div className={styles.account__form__medbook}>
                            <h1>Результаты обследований</h1>
                            <div className={styles.account__form__medbook__date}>
                                <input id='fluor' type="date" min="1940-01-01" max={getCurrentDate()} onChange={(e) => setFluor(e.target.value)} />
                                <input id='influenza' type="date" min="1940-01-01" max={getCurrentDate()} onChange={(e) => setInfluenza(e.target.value)} />
                                <input id='blood' type="date" min="1940-01-01" max={getCurrentDate()} onChange={(e) => setBlood(e.target.value)} />
                                <input id='urine' type="date" min="1940-01-01" max={getCurrentDate()} onChange={(e) => setUrine(e.target.value)} />
                                <input id='ecg' type="date" min="1940-01-01" max={getCurrentDate()} onChange={(e) => setEcg(e.target.value)} />
                            </div>

                            <button onClick={handleCheckUps}>Отправить данные</button>
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