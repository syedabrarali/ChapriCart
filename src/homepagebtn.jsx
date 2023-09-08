import {Link} from 'react-router-dom';

const HomePageBtn = () => {
    return (
        <Link style={{
            paddingBottom: "10px",
            paddingLeft: "20px"
        }}to="/"><button className="btn btn-dark">Home Page</button></Link>
    )
}

export default HomePageBtn;