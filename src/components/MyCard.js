import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { getMatchDetail } from "../api/Api";
import { useState } from "react";
import vsimg from "../assets/vs.png";

const MyCard = ({ match }) => {
  const [detail, setDetail] = useState({});

  const [open, setopen] = useState(false);
  //ye dialogue box open close hone ke liye banaya ja rha hai ...by default close hoga

  const handleClick = (id) => {
    getMatchDetail(id)
      .then((data) => {
        console.log("MATCH DATA", data);

        setDetail(data); //button click hote hai isme match ki details aajayengi
        handleOpen(); //isse jb handleclick chalega tb ye handle open run krega
      })

      .catch((error) => console.log(error));
  };

  const getMatchCart = () => {
    return (
      <Card className="card-style" style={{ marginTop: 15 }}>
        <CardContent>
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item>
              <Typography className="team-name" variant="h5">
                {match["team-1"]}
              </Typography>
            </Grid>

            <Grid item>
              <img
                style={{ width: 85 }}
                // src={require("../assets/vs.png")}
                src={vsimg}
                alt=""
              />
            </Grid>

            <Grid item>
              <Typography className="team-name" variant="h5">
                {match["team-2"]}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions>
          <Grid container justify="center">
            <Button
              onClick={() => {
                handleClick(match.unique_id);
              }}
              item
              variant="outlined"
              color="primary"
            >
              Show Details
            </Button>
            <Button
              style={{ marginLeft: 5 }} //hr button ke left me thoda sa space aayga
              variant="outlined"
              color="primary"
            >
              Start Time{new Date(match.dateTimeGMT).toLocaleString()}
            </Button>
          </Grid>
        </CardActions>
      </Card>
    );
  };

  const handleClose = () => {
    setopen(false);
  };

  const handleOpen = () => {
    setopen(true);
  };

  const getDialog = () => (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">{"Match Details"}</DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography>{detail.stat}</Typography>
          <Typography>
            Match
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              {detail.matchStarted ? " Started" : " not Started"}
            </span>
            <Typography>
              Score
              <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                {detail.score}
              </span>
            </Typography>
          </Typography>
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
  /* material ui se dialog banaya hai yha pe 
   <Dialog open={open} onClose={handleClose}>  close hone pe ek funcitoin aur chalaya hai
  //by default open krna hai to open ki jagah true llikho...wrna open hi likho

     <Typography>{detail.stat}</Typography> isse hume match ka status milega...ye stat api me pehle se isi naam se dia tha..to dekh skte 
     ho console me ek baar

{detail.matchStarted ? "Match Started" : "Match not Started"}
matchstarted bhi api me use kia hua hai...agr ye true hai  to hum Match stated likhenge
  
{detail.score}  ye score print krne ke liye hai


*/

  return (
    <fragment>
      {getMatchCart()}
      {getDialog()}
    </fragment>
  );
};

export default MyCard;

/*
<Card>

<CardContent>
    <Typography>hs is a card</Typography>
</CardContent>

</Card>
ye saare ui component hai

{new Date().toString()} iise abhi ka datee and time aagya

card ke andar data ke liye card content use krna sahi hai


grid se hum log cheezo ko parallel le aarhe hai 



const MyCard = ({ match }) => { 
  is trh se match likhne se match ki value app.js se jo humne ek key ki trh pass 
  ki thi vese aagai yha pe 




  {match["team-1"]}
  ye app . js se aarha hai....ye bascically har match me team1 ka naam hai...se hi chalega ye loop
  hr araaay me team1 me konnsa naam hai wo value


 Start Time{new Date(match.dateTimeGMT).toLocaleString()}
 isme match to hume app.js se aarha hain data ...agr console me dekhe to har matdch me ek 
 variable hia dateTimeGmt jisme time se related data hai...to usko ye liya yha aur local strting me convert krdia


 onClick={() => {
                handleClick(match.unique_id);
                show detail waale button me hum log is function ko paas krenge jisme hum hr match ki unique id use krrhe hai

upar handleclick me hum log getMatchDetail(id) is functon me id paas krrhe hai...ye promise dega to then aur catch use krenge



*/
