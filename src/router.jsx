import { createBrowserRouter, RouterProvider, Link} from 'react-router-dom'
import App from './App'
import Product from './product'
import Book from './books'
import Game from './games'
import Cloth from './clothes'
import HomePageBtn from './homepagebtn'

const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <h1>Oops the route doesnt exist</h1>,
            children: [
                {
                    path: "/game",
                    element: <Game />
                },
                {
                    path: "/book",
                    element: <Book />,
                    children: [
                        {
                            path: "/book/fiction",
                            element: (
                                <>
                                    <label htmlFor="fiction">These are fiction books:</label>
                                    <ul id="fiction">
                                        <li>The Silent Patient</li>
                                        <li>The Alchemist</li>
                                        <li>The Kite Runner</li>
                                    </ul>
                                    <nav>
                                    <HomePageBtn /> |
                                    | <Link to="/book"><button className='btn btn-dark'>Books Page</button></Link>
                                    </nav>
                                </>

                            )
                        },
                        {
                            path: "/book/nonfiction",
                            element: (
                                <>
                                    <label htmlFor="nonfiction">These are non-fiction books:</label>
                                    <ul id="nonfiction">
                                        <li>How to win friends and influence people</li>
                                        <li>Tools of Titan</li>
                                        <li>Pyscology of Money</li>
                                    </ul> 
                                    <nav>
                                    <HomePageBtn /> |
                                    | <Link to="/book"><button className='btn btn-dark'>Books Page</button></Link>
                                    </nav>

                                </>

                            )
                        },
                        {
                            path: "/book/fantasy",
                            element: (
                                <>
                                    <label htmlFor="fantasy">These are fantasy books:</label>
                                    <ul id="fantasy">
                                        <li>Harry Pottaaah</li>
                                        <li>Percy Jackson</li>
                                        <li>Lord of the rings</li>
                                    </ul>
                                    <nav>
                                    <HomePageBtn /> |
                                    | <Link to="/book"><button className='btn btn-dark'>Books Page</button></Link>
                                    </nav>                                
                                    </>

                            )
                        }
                    ]
                }
            ]
        },
        {
            path: "/product",
            element: <Product />,
        },
        {
            path: "/cloth",
            element: <Cloth />
        }

    ])

    return (
        <RouterProvider router={router} />
    )
}

export default Router;