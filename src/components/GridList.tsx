import React from "react";
import { Grid,
   Card, CardContent, Typography, Container 
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Estimator } from "../estimator/impact";

interface Props {
  data: Estimator;
}

const useStyles = makeStyles((theme) => ({
  card_content: {
    padding: "16px",
    textAlign: "center",
    backgroundColor: "#f1f1f1", 
    width: "200px"
  }
}));


function Case({data}: Props) {
  const classes = useStyles();
  return (
  <Container>
    <Grid container  spacing={2} >
        <Grid item style={{display: "flex"}} >
          <Card className={classes.card_content}>
            <CardContent style={{alignItems: "center"}}>
              <Typography  color="textSecondary" style={{marginBottom: "20px"}}>
                Currently Infected 
              </Typography>
              <Typography  color="textSecondary">
                {data.currentlyInfected}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item style={{display: "flex"}}>
          <Card  className={classes.card_content}>
            <CardContent style={{alignItems: "center"}}>
              <Typography  color="textSecondary" style={{marginBottom: "20px"}}>
                 Infections By
                 Requested Time
              </Typography>
              <Typography  color="textSecondary">
                {data.infectionsByRequestedTime}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card  className={classes.card_content}>
            <CardContent style={{alignItems: "center"}}>
              <Typography  color="textSecondary" style={{marginBottom: "20px"}}>
                Severe Cases By 
                Requested Time
              </Typography>
              <Typography color="textSecondary" >
                {data.severeCasesByRequestedTime}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item style={{display: "flex"}}>
          <Card  className={classes.card_content}>
            <CardContent  style={{alignItems: "center"}}>
              <Typography  color="textSecondary" style={{marginBottom: "20px"}}>
                hospital Beds By
                RequestedTime
              </Typography>
              <Typography variant="body2" component="p">
                {data.hospitalBedsByRequestedTime}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item style={{display: "flex"}}>
          <Card  className={classes.card_content}>
            <CardContent  style={{alignItems: "center"}}>
              <Typography  color="textSecondary" style={{marginBottom: "20px"}}>
                cases For Ventilators 
                By Requested Time
              </Typography>
              <Typography variant="body2" component="p">
              {data.casesForVentilatorsByRequestedTime}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item style={{display: "flex"}}>
        <Card  className={classes.card_content}>
          <CardContent  style={{alignItems: "center"}}>
            <Typography  color="textSecondary" style={{marginBottom: "20px"}}>
              dollars In Flight
            </Typography>
            <Typography variant="body2" component="p">
              {data.dollarsInFlight}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>    
  </Container>
  )
}

export default Case;
