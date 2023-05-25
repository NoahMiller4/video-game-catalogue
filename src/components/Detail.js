
import React, { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Detail() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await axios.get(`https://rawg-video-games-database.p.rapidapi.com/games/${id}`, {
          headers: {
            'X-RapidAPI-Key': '2f884ce492mshedf7e86009770d5p12c91ajsnf80a5a24e64b',
            'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
          },
          params: {
            key: '171d163a4adb4c4e9adfea25abe0d0b5',
            dates: '2023-04-27,2023-05-25'
          }
        });
        setGame(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGame();
  }, [id]);

  if (!game) {
    return null; // Return loading indicator or any placeholder while fetching the data
  }

  return (
    <div className='container'>
      <img className='banner' src={game.background_image} alt={game.name} />
      <h2 className='title'>{game.name}</h2>
      <p>{game.description_raw}</p>
      {game.tags && game.tags.length > 0 && (
        <div>
          {game.tags && game.tags.length > 0 && (
            <div className='flexbox two'>
              {game.tags.slice(0, 5).map((tag) => (
              <span className='tags' key={tag.id}>{tag.name}</span>
            ))}
              {/* set game.tags.length as to not get 20 million tags */}
              {game.tags.length > 5 && (
              <span></span>
            )}
            </div>
            )}
        </div>
      )}
      <button className='play'>
        <span className="play-icon"></span><FaPlay className='fa'/> PLAY NOW
      </button>
    </div>
  );
}

export default Detail;
