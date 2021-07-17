const API_KEY = "EXmHjMoridR8SsL87VYlChY6N5c2";


export const getMatches = () => {
  const url = `https://cricapi.com/api/matches/?apikey=${API_KEY}`;

  //fetching te data from the above url

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.log("ERROR : ", error);
    });
};



//load match details
export const getMatchDetail = (id) => {
  const url = `https://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`; 

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};


