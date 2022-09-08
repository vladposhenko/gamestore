import React, {useEffect} from 'react';
import './game-item.css'
import {GameCover} from "../game-cover";
import {GameOrder} from "../game-order";
import {GameGenre} from "../game-genre/GameGenre";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchGame, setCurrentGame} from "../../redux/games/reducer";

export const GameItem = ({ game }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(fetchGame(game.id))
        navigate(`/app/${game.id}`)
    }

    useEffect(() => {
        // dispatch(fetchGame(game.id))
    })
    return (
        <div className='game-item' onClick={ handleClick }>
            <GameCover image={game.image}/>
            <div className="game-item__details">
                <span className='game-item__title'>{game.title}</span>
                <div className='game-item__genre'>
                    {
                        game.genres.map((genre) => <GameGenre genre={genre}/> )
                    }
                </div>
                <div className='game-item__order'>
                    <GameOrder game={game} />
                </div>
            </div>
        </div>
    );
};

