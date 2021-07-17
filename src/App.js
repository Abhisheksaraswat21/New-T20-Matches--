import React, { Fragment, useEffect } from "react";
//import logo from "./logo.svg";
import "./App.css";
//import { Button } from "@material-ui/core";
import Navbar from "./components/Navbar";
import MyCard from "./components/MyCard";
import { getMatches } from "./api/Api";
import { useState } from "react";
import { Grid, Typography } from "@material-ui/core";

function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        setMatches(data.matches);
        console.log(data.matches);
      })
      .catch((error) => alert("could not load the data"));
  }, []);

  /*
jese hi app fucnton render hoga ye useeffect function chalega and getmatches call hojayega
isme data api.jsse aarha hai
*/

  return (
    <div className="App">
      <Navbar />

      <Typography variant="h3" style={{ marginTop: 40, marginBottom: 40 }}>
        Abhi Buzz
      </Typography>

      <Grid container>
        <Grid sm="2"></Grid>
        <Grid sm="8">
          {matches.map((match) => (
            <Fragment key={match.unique_id}>
              {match.type === "Twenty20" ? (
                <MyCard key={match.unique_id} match={match} />
              ) : (
                ""
              )}
            </Fragment>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

/*
ye humne matrial uin ki help se lia hai...jiska variant outlined ya contained kuch bhi hai
 <Button variant="contained" color="primary">CLick</Button> ye color ye sb hume material ui se pta chala


  <Navbar />  isk mtlb hai ki navbar hume wo dega yaha jo navbar.js me humne return me daala hai

 getMatches()
      .then((data) => setMatches(data.matches))
      iski wajah se usestate wale me matches array me saare matches ki details aajayegi


 {matches.map((match) => (
        <MyCard match="match" /> 
        isse matches array me loop lag gya aur hr baar ek match pass horha hai mycard me

 <Grid sm="6"> iska mtlb hume small ke upar 6 grid chahiye



 {match.type == "Twenty20" ? (
                <MyCard key={match.unique_id} match={match} />
              ) : (
                ""
              )}
              kuch ni hai ye bs ternary operator lga hua hai...baaki normal hi hai



*/
