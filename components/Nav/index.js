import Link from 'next/link'

const Nav = () => (
  <div>
      <header>
          <section className='header'>
              <h1>Regalia.</h1>
              <p>Showcasing Design Projects by Mark Abramov</p>
          </section>
      </header>
      <nav className='navbar'>
          <Link href='../index'>
              <a>Welcome!</a>
          </Link>
          <Link href='../Designs'>
              <a>Designs</a>
          </Link>
          <Link href='../static/Mark Abramov Resume.pdf'>
              <a>Resume</a>
          </Link>
          <Link href='/search' className='right'>
              <a>Search</a>
          </Link>
      </nav>
  </div>
)

export default Nav
