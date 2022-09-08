import React, {useEffect} from 'react';
import './game-page.css'
import {useDispatch, useSelector} from "react-redux";
import {GameCover} from "../../components/game-cover";
import {GameGenre} from "../../components/game-genre/GameGenre";
import {GameOrder} from "../../components/game-order";
import {useNavigate, useParams} from "react-router-dom";
import {fetchGame} from "../../redux/games/reducer";
import {Loader} from "../../components/loader/Loader";

export const GamePage = () => {
    const params = useParams()
    const dispatch = useDispatch()
    let status = useSelector(state => state.games.gameStatus)
    useEffect(() => {
        dispatch(fetchGame(params.id))
    },[dispatch])

    const game = useSelector(state => state.games.currentGame)
    if(status === 'loading' || !status) return <Loader/>
    debugger;
    return (
        <div className='game-page'>
            <h1 className='game-page__title'>{game.title}</h1>
            <div className="game-page__content">
                <div className="game-page__left">
                    <iframe frameBorder='none' width='90%' height='400px' src={game.video} title='Youtube video player'></iframe>
                </div>
                <div className="game-page__right">
                    <GameCover image={game.image} />
                    <p>{game.description}</p>
                    <p className='secondary-text'>Популярные метки этого продкута: </p>
                    <div className='game-genres'>
                        { game.genres.map((genre) => <GameGenre key={genre} genre={genre}/>) }
                    </div>
                    <div className="game-page__order-game">
                        <GameOrder game={game} />
                    </div>
                </div>
            </div>
        </div>
    );
};

