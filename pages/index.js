import React from 'react'
import Layout from 'layouts/Main'

export default () => (

    <Layout>
        <div id="slider">
            <img className='mySlides' src='../static/collage1.jpg' />
            <img className='mySlides' src='../static/collage2.jpg' />
            <img className='mySlides' src='../static/collage3.jpg' />
        </div>

        <div className='row'>
            <div className='side'>...</div>
            <div className='main'>...</div>
        </div>
        <script src='../static/carousel.js'> </script>
            <section className='container-center'>
            <h2 className='wide'>About Me</h2>
            <p className='opacity'><i>I make designs</i></p>
        </section>
    </Layout>
)
