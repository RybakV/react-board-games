import './Game.css';
import {useParams} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useStoresHook } from '../store/use-stores-hook';
import iconDuration from '../images/icon-duration-yellow.svg';
import iconPerson from '../images/icon-person-yellow.svg';
import iconDifficulty from '../images/icon-difficulty-yellow.svg';

function Game() {

  const {id} = useParams();
  console.log('id', id);

  const [game, setGame] = useState();

  const fetchData = () => {
    //return fetch(`http://localhost:8040/games/${id}`)
    return fetch(`https://board-games-server-vercel-api.vercel.app/games/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGame(data);
      });
  }
  useEffect(() => {
    fetchData();
  },[id])

  console.log('game', game);

// Popup form
  const {popupForm, pageBackground} = useStoresHook();
  function callPopup(){
    popupForm.setFormVisible();
  }

  useEffect(() => {
    // Background image
    if (!game) return;
    pageBackground.setBackgroundUrl(`/img/${game.img}`);
  },[game])

  if (!game) return;

    return (
        <section className="game" >
            <div className="container">
              <div className="game--text">
                <h1 className="game--title">{game.genre[0]}</h1>
                <h2 className="game--subtitle">{game.title}</h2>
                <div className="game--text-offset">
                  <p className="game--parameters">
                    <img src={iconDuration} className="game--icon" alt="icon duration"/> {game.duration} хв
                    <span className='game--divider'/>
                    <img src={iconPerson} className="game--icon" alt="icon person"/> {game.people[0]} - {game.people[1]} осіб
                    <span className='game--divider'/>
                    <img src={iconDifficulty} className="game--icon" alt="icon difficulty"/> {game.difficulty[1]}
                  </p>
                  <p className="game--description">{game.description}</p>
                  <button className="game--btn" onClick={callPopup}>Взяти участь</button>
                </div>
              </div>
            </div>
        </section>
    );
}
export default Game;