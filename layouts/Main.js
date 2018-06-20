import React from 'react'
import Head from 'next/head'
//import Wrapper from './Wrapper'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import stylesheet from '../styles/index.css'

export default ({children, title = 'Regalia. by Mark Abramov'}) => (
    <div>
        <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
        <Head>
            <title>{title}</title>
        </Head>
        <header>
            <Nav/>
        </header>

        <main>
            {children}
        </main>

        <Footer>
            Footer
        </Footer>
    </div>
)
