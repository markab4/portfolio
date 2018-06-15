import Head from './Head.js'
import Header from './Header'
import Nav from './Nav.js'
import Footer from './Footer.js'
import stylesheet from '../styles/index.css'


const Layout = (props) => (
    <html>
        <Head />
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Header />
        <Nav/>
        {props.children}
        <Footer/>

    </html>
);

export default Layout