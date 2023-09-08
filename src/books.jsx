import {Outlet, Link} from 'react-router-dom'
import './css/book.css'

const Book = () => {
    return (
        <div className="book-ctr">
            <label className="label2" htmlFor="mobile">Here are the Books you can purchase:</label>
            <nav>
                <Link to="/book/fiction">Fiction</Link> | 
                | <Link to="/book/nonfiction">Non-Fiction</Link> | 
                | <Link to="/book/fantasy">Fantasy</Link>
            </nav>
            <br/>
            <Outlet />
            <br/>


        </div>
    )
}

export default Book;