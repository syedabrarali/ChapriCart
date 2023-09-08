import HomePageBtn from './homepagebtn'
import './css/game.css'

const Game = () => {
    return (
        <div className="game-ctr">
            <label className="label3" htmlFor="mobile">Here are the Games you can purchase:</label>
            <ul>
                <li>Fifa 23</li>
                <li>God of War</li>
                <li>Witcher</li>
                <li>Last of Us</li>
            </ul>
            <HomePageBtn />
        </div>
    )
}

export default Game;