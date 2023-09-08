import { Outlet, Link } from 'react-router-dom'
import Footer from './footer'
import './css/app.css'


function App() {

  return (
  <>
    <div className="main-ctr">
      <h1 className="head1">Welcome to ChapriCart</h1>
      <label className='label1' htmlFor='shop'>What would you like to shop?</label>
      <div className='shopping'>
        <nav>
         <Link className="appLink" to="/product">Product</Link> | 
         | <Link className="appLink" to="/book">Books</Link> |
         | <Link className="appLink" to="/game">Games</Link> |
         | <Link className="appLink" to="/cloth">Clothes</Link>
        </nav>
      </div> <br/><br/>
      <div>
        <Outlet />
      </div>
      <br /><br /><br /><br />
      <Footer />
    </div>

  </>

  )
}

export default App
