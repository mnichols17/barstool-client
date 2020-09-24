import React from 'react';
import {Game} from '../utils/entities';
import GameStats from './GameStats';

interface ScoreboardProps {
	game: Game;
}

const Scoreboard: React.FC<ScoreboardProps> = ({game}) => {

    let gameStats = null;
    let gameStatus = null;

    switch(game.league){
        case("MLB"):
            gameStatus = game.status === "completed"? `FINAL${game.home_period_scores.length !== 9? `/${game.home_period_scores.length}` : ''}` : game.status
            gameStats = <GameStats game={game}/>
            break;
        case("NBA"):
            gameStatus = game.status === "completed"? `FINAL${game.home_period_scores.length !== 4? `/${game.home_period_scores.length - 4} OT` : ''}` : game.status
            gameStats = <GameStats game={game} />
            break;
        default:
            break;
    }

	return (
		<div className='scoreboard'>
            {gameStats}
            <div className="scoreboard-btm">
                <h3>{game.away_name}</h3>
                <h6>{gameStatus}</h6>
                <h3>{game.home_name}</h3>
            </div>
		</div>
	)
}

export default Scoreboard;