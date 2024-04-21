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
                        <p>Наше приложение будет уведомлять вас о том, когда наступит время для следующего медицинского обследования после истечения срока предыдущего.
                            <br />
                            <br />
                            Забота о вашем здоровье станет проще и удобнее благодаря нашему приложению, скорее регистрируйтесь!</p>
                    </div>
                    <Image src={doctorsImage} alt="logo" className={styles.basic__content_img} />
                </div>
            </div>
        </section>
    )
}

export default Index