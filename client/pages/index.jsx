import React from 'react'
import styles from '../styles/index.module.scss'
import Image from 'next/image'
import doctorsImage from '../public/doctors.png'

const Index = () => {
    return (
        <section className={styles.basic}>
            <div className="wrapper">
                <div className={styles.basic__content}>
                    <div className={styles.basic__content__text}>
                        <h1>БаланСЗдоровья</h1>
                        <p>Регулярные медицинские обследования раз в год являются неотъемлемой частью заботы о собственном здоровье.
                            Это помогает выявить возможные проблемы и заболевания на ранних стадиях, когда они легче поддаются лечению
                            и предотвращению осложнений</p>
                    </div>
                    <Image src={doctorsImage} alt="logo" className={styles.basic__content_img} />
                </div>
            </div>
        </section>
    )
}

export default Index