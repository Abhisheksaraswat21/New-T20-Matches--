const API_KEY = "EXmHjMoridR8SsL87VYlChY6N5c2";

//get all the upcoming matches

export const getMatches = () => {
  const url = `https://cricapi.com/api/matches/?apikey=${API_KEY}`;

  //is url se hume maches milenge...crci api website s ejo hume mila hai
  //?apikey=${API_KEY} hume api ke bhi bhejni hai to ye bhi likha hai...API_KEY
  //me humne upar value daaali hui hai

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.log("ERROR : ", error);
    });
};

/*
data return krne ke liye fetch ka use kia...get matches function koon jaha bhi use krenge waha hume
data mil jayea...url pass kia hai usme agr success hua to .then ki condition agr fail to .this catch ki condition

then me uhm log jo bhi data aayega usko json ki file me convert krrhe hai kyuki bhaiay ne bhi bataya tha ki shaayd
sirf txt file hi hoti hai isme firebase in sbme eg .json

*/

//load match details
export const getMatchDetail = (id) => {
  const url = `https://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`; //url me humne cricket score daal dia matches i jagah ...aur hume ha pe apikey bhi chahiye the to wo bhi le liya hai

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
  //ab ye pichle baar ki trh same hai
};

//ab is function ko hume show detail waale button me use krenge...ab mycard me gye hum log
