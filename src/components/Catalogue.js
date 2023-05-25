
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Catalogue() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('https://rawg-video-games-database.p.rapidapi.com/games', {
          headers: {
            'X-RapidAPI-Key': '2f884ce492mshedf7e86009770d5p12c91ajsnf80a5a24e64b',
            'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
          },
          params: {
            key: '171d163a4adb4c4e9adfea25abe0d0b5',
            dates: '2023-04-27,2023-05-25'
          }
        });
        setGames(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGames();
  }, []);

  return (
    <div>
      <button className='sort'>Sort Games</button>
      <div className="catalogue container">
        {games.map((game) => (
          <div className="game" key={game.id}>
            <Link to={`/item/${game.id}`}>
              <img src={game.background_image} alt={game.name} />
            </Link>
            <h2>{game.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogue;

