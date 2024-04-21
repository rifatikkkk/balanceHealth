import React from 'react'
import Head from 'next/head'
import HeaderSection from './HeaderSection'

const RootLayout = ({ children, keywords }) => {
    return (
        <div className='root'>
            <Head>
                <meta keywords={'balanceHealth, balance, health'}></meta>
                <title>БаланСЗдоровья</title>
            </Head>

            <HeaderSection />

            <main className="content">
                {children}
            </main>
        </div >
    )
}

export default RootLayout