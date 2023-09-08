import HomePageBtn from './homepagebtn'
import { useState, useEffect } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import './css/product.css'


const Product = () => {
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [counter, setCounter] = useState(0);

    function increseCount() {
        setCounter(counter + 1);
    }

    function decreseCount() {
        if(counter === 0) return;
        setCounter(counter - 1);
    }

    useEffect(() => {
        const fetchProductData = async() => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/category/jewelery?limit=4')
                if(!response.ok) {
                    throw new Error(`There is a server error - ${response.status}`)
                }
                const prdata = await response.json()
                setProductData(prdata)
                setError(null);
            } catch(err) {
                setError(err.message);
                setProductData(null);
            } finally {
                setLoading(false);
            }
        };
        fetchProductData();
    }, []);

    return (
        <div className='mobile-ctr'>
            <Navbar />
            <label htmlFor="mobile"><h2>Here are the products you can purchase:</h2></label>
            {productData.map((product) => {
                return (
                    <>
                        <div className="product-ctr"> 
                            <li className="pr-list"key={product.id}>
                                <div className="card" style={{width: "18rem"}}>
                                    <img src={product.image} className="card-img-top"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <h6 className='card-text'>${product.price}</h6>
                                        <p className="card-text">{product.description}</p>
                                        <button onClick={increseCount} className="btn btn-primary btn-sm">+</button> <strong>{counter}</strong><button onClick={decreseCount} className="btn btn-primary btn-sm minus ml-2">-</button>
                                    </div>
                                </div>
                            </li>
                        </div>         
                    </>   

                )
            })};
    
            <HomePageBtn />
            <br /><br /><br /><br /><br />
            <Footer />
        </div>
    )
}

export default Product;