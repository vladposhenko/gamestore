import React from 'react';
import './game-item.css'
import {GameCover} from "../game-cover";
import {GameOrder} from "../game-order";
import {GameGenre} from "../game-genre/GameGenre";

export const GameItem = ({ game }) => {
    return (
        <div className='game-item'>
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

