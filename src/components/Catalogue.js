
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

function Catalogue() {
  const [games, setGames] = useState([]);
  const [sorted, setSorted] = useState(false);
  let title = 'Steam Catalogue';
  let linkName = 'Add Game';

  useEffect(() => {
    // Set array to empty to load api data at page load
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://rawg-video-games-database.p.rapidapi.com/games', {
        params: {
          key: '171d163a4adb4c4e9adfea25abe0d0b5',
          dates: '2023-04-01,2023-05-25',
        },
        headers: {
          'X-RapidAPI-Key': '2f884ce492mshedf7e86009770d5p12c91ajsnf80a5a24e64b',
          'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
        },
      });
      setGames(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const sortGamesByTitle = () => {
    const sortedGames = [...games].sort((a, b) => {
      const titleA = a.name.toUpperCase();
      const titleB = b.name.toUpperCase();
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
    setGames(sortedGames);
    setSorted(true);
  };

  const resetSorting = () => {
    // must call fetchData and setSorted to false to reset sorting
    fetchData();
    setSorted(false);
  };

  return (
    <div>
      <Header title={title} linkName={linkName} />
      <button className="sort" onClick={sorted ? resetSorting : sortGamesByTitle}>
        {sorted ? 'Reset' : 'Sort Games'}
      </button>
      <div className="catalogue container" id="catalogueContainer">
        {games.map((game) => (
          <div className="game" key={game.id}>
            <Link to={`/item/${game.id}`}>
              <img src={game.background_image} alt={game.name} />
            </Link>
            <h2>{game.name}</h2>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Catalogue;
