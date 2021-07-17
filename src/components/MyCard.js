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

  const handleClick = (id) => {
    getMatchDetail(id)
      .then((data) => {
        console.log("MATCH DATA", data);

        setDetail(data); 
        handleOpen(); 
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
              style={{ marginLeft: 5 }} 
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
  


  return (
    <fragment>
      {getMatchCart()}
      {getDialog()}
    </fragment>
  );
};

export default MyCard;



/*

MAXIMUM THINGS HAVE BEEN CREATED USING MATERIAL UI

*/
