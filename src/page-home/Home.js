import './Home.css';
import Gamesnav from './nav-games/Nav-games';
import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react";
import { useStoresHook } from '../store/use-stores-hook';
import iconDuration from '../images/icon-duration.svg';
import iconPerson from '../images/icon-person.svg';
import iconDifficulty from '../images/icon-difficulty.svg';
function Home() {

    const {pageBackground} = useStoresHook();

    //let filter = 'all';
    const [filter, setFilter] = useState('all');
    function toggleFilter(newFilter){
      console.log('newFilter:', newFilter);
      setFilter(newFilter);
    }

    const [games, setGames] = useState([]);

    const fetchData = () => {
        // return fetch("http://localhost:8040/games")
          return fetch("https://board-games-server-vercel-api.vercel.app/games")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (filter === 'all'){
              console.log('Filtered data: all');
              setGames(data);
            }
            else {
              const filteredGames = data.filter(game => game.genre[0] === filter);
              console.log('Filtered data:', filteredGames);
              setGames(filteredGames);
            }

          });
    }

    useEffect(() => {
        fetchData();
        pageBackground.setBackgroundUrl('/img/bg-home.jpg');
    },[filter])



    return (
        <section className="home">
            <div className="container">

                <h1 className="home--title">Ігри у Львові</h1>
                <h2 className="home--subtitle">В яку гру зіграємо?</h2>
                <Gamesnav togglefilter={toggleFilter}/>

                <div className="games">
                    {games.map((game) => (
                      <Link to={"/games/"+game.id} className="games--item" key={game.id} style={{ backgroundImage: `url(/img/${game.img})` }}>
                          <h3 className="games--item-title">{game.title}</h3>
                          <div className="games--parameters">
                            <img src={iconDuration} className="games--icon" alt="icon duration"/> {game.duration} хв.
                            <span className='games--divider'/>
                            <img src={iconPerson} className="games--icon" alt="icon person"/> {game.people[0]}-{game.people[1]} осіб
                            <span className='games--divider'/>
                            <img src={iconDifficulty} className="games--icon" alt="icon difficulty"/> {game.difficulty[1]}
                          </div>
                      </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Home;