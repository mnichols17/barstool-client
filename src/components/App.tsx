import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Scoreboard from './Scoreboard';

const App: React.FC = () => {

	const [games, setGames] = useState<object[]>([])
	const [isLoading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		axios.get('http://10.0.0.12:5000/scores')
		.then((res:any) => {
			setLoading(false)
			setGames(res.data)
		})
		.catch((err:any) => setGames([]))
	}, [])

	return (
		isLoading? <div className="loader" /> :
		<>
			{games.map((game: any) => <Scoreboard key={game.league} game={game} />)}
		</>
	)
}

export default App;
