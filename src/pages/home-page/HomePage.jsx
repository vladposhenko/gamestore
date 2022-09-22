import React, {useEffect} from 'react';
import './home-page.css'
import {GameItem} from "../../components/game-item";
import {gamesAPI} from "../../api";
import {useDispatch, useSelector} from "react-redux";
import {fetchGames, setCurrentPage} from "../../redux/games/reducer";
import {Loader} from "../../components/loader/Loader";
import {getGamesFromCart} from "../../redux/cart/reducer";
import {Pagination} from "../../components/pagination";


export const HomePage = () => {
    let dispatch = useDispatch()
    let status = useSelector(state => state.games.status)
    let games = useSelector(state => state.games.items)
    let currentPage = useSelector(state => state.games.currentPage)
    let gamesPerPage = useSelector(state => state.games.gamesPerPage)

    const lastGamesIndex = currentPage * gamesPerPage;
    const firstGamesIndex = lastGamesIndex - gamesPerPage;
    const currentGames = games.slice(firstGamesIndex, lastGamesIndex)
    useEffect(() => {
        dispatch(fetchGames())
        dispatch(getGamesFromCart())
    },[])

    const paginate = page => {
        dispatch(setCurrentPage(page))
    }
    return (
        <div className='home-page'>
            {status === 'loading'
                ? <Loader/>
                : currentGames.map(game => <GameItem key={game.id} game={game} />)
            }
            {status !== 'loading' &&
                <Pagination
                    currentPage={currentPage}
                    gamesPerPage={gamesPerPage}
                    totalGames={games.length}
                    paginate={paginate}
                />
            }
        </div>
    );
};
