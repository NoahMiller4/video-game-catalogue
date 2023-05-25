import React from 'react'

function Anime() {

    const axios = require("axios");

async function getAnime() {
    const query = `
           query ($page: Int, $perPage: Int, $search: String) {
     Page(page: $page, perPage: $perPage) {
       pageInfo {
         total
         perPage
       }
       media(search: $search, type: ANIME, sort: FAVOURITES_DESC) {
         id
         title {
           romaji
           english
           native
         }
         type
         genres
       }
     }
   }
   `;
    
  let variables = {
    search: query,
    page: 1,
    perPage: 3,
 };
    
   const headers = {
     "Content-Type": "application/json",
     Accept: "application/json",
   };
    
   const result = await axios({
     method: 'post',
     query,
     variables,
     headers
   }).catch((err) => console.log(err.message));
    
   console.log(result.data.data.Page.media);
}

  return (
    console.log(getAnime())
    <div></div>
  )
}

export default Anime

