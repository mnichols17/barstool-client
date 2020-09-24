import React from 'react';
import { Game } from '../utils/entities';

interface RowProps {
    label: string;
    scores: (number | string)[];
    totals: any[];
    league: string;
}

const Row: React.FC<RowProps> = ({label, scores, totals, league}) => (
    <tr className={league}>
        <td className="table-label">{label}</td>
        {scores.map((score: number | string, index: number) => <td key={index} className="table-score">{score}</td>)}
        {totals.map((total: number, index: number) => <td key={index} className="table-total">{total}</td>)}
    </tr>
)

interface GameStatsProps {
    game: Game;
}

const GameStats: React.FC<GameStatsProps> = ({game}) => {

    const headerTotal = game.league === "MLB"? ["R", "H", "E"] : ["Total"];
    const headerScores: (number | string)[] = []

    for(let i = 1; i <= game.home_period_scores.length; i++){
        if(game.league !== 'MLB' && i > 4) headerScores.push("OT " + (i - 4))
        else headerScores.push(i)
    }

	return (
        <table className="scoreboard-top">
            <thead>
                <Row label={""} scores={headerScores} totals={headerTotal} league={game.league}/>   
            </thead>
            <tbody>
                <Row label={game.away_abb} scores={game.away_period_scores} totals={game.away_total} league={game.league} />
                <Row label={game.home_abb} scores={game.home_period_scores} totals={game.home_total} league={game.league} />
            </tbody>
        </table>
	)
}

export default GameStats;