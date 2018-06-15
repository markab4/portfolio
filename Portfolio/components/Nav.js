import Link from 'next/link'
import stylesheet from '../styles/index.css'


const Nav = () => (
    <nav className='navbar'>
        <Link href='/'>
            <a>Welcome!</a>
        </Link>
        <Link href='/designs'>
            <a>Designs</a>
        </Link>
        <Link href='/Resume'>
            <a>Resume</a>
        </Link>
        <Link href='/search' className='right'>
            <a>Search</a>
        </Link>
    </nav>
);

export default Nav