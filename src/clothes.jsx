
import { useState, useEffect} from 'react-router-dom'
import Navbar from "./navbar";
import Footer from "./footer";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './css/cloth.css'

const Cloth = () => {
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
    <div className="cloth-ctr">
        <Navbar />
        <div className="cloth-flex-ctr">
            {productData.map((product) => {
                return (
                    <>
                        <div id={product.id}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={product.image}
                                    title={product.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {product.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">${product.price}</Button>
                                </CardActions>
                            </Card>
                        </div>
                    </>
                )
            })}
        </div>
        <Footer />
    </div>

    )
}

export default Cloth;