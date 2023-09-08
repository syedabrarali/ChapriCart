import { Link } from 'react-router-dom'
import './css/navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="navbar-ctr">
                    <Link className="chapricart" to="/"><h3>ChapriCart</h3></Link> 
                    <Link className="appLink hm" to="/">Home</Link>
                    <Link className="appLink prd" to="/product">Products</Link>
                    <Link className="appLink bk" to="/book">Books</Link>
                    <Link className="appLink gm" to="/game">Games</Link>
                    <Link className="appLink cl" to="/cloth">Clothes</Link>
            </div>  
        </nav>
    )
}

export default Navbar;