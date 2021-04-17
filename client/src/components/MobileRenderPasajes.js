import React from "react";
import { Grid, Typography, Box } from "@material-ui/core/index";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import { useWindowDimensions, kFormatter } from "../utils";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { useStyles } from "../classes";
import CheckIcon from "@material-ui/icons/Check";
import WarningIcon from "@material-ui/icons/Warning";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ScheduleIcon from "@material-ui/icons/Schedule";

export default function MobileRenderPasajes(props) {
  const { pasaje } = props;
  const classes = useStyles();
  const { width } = useWindowDimensions();
  const { origin } = props;

  return (
    <div>
      <Typography className={classes.listTitle} variant="button" gutterBottom>
        <Grid container alignItems="center">
          {
            // Container del titulo
          }
          <Grid xs={9} className={classes.originTitle}>
            {!origin ? (
              <Grid container alignItems="center">
                <FlightTakeoffIcon className={classes.listIcon} />
                {pasaje.origin.substring(0, 3)}
                <DoubleArrowIcon className={classes.listTitleIcon} />
              </Grid>
            ) : null}
          </Grid>
          <Grid xs={!origin ? 1 : 12}>
            <Grid container justify="center" alignItems="center">
              {!origin
                ? // Handler del width del titulo
                  width < 600
                  ? pasaje.destination.substr(0, 3)
                  : width < 800
                  ? pasaje.destination.substr(0, 10)
                  : pasaje.destination.substr(0, 10)
                : width < 600
                ? pasaje.destination.substr(0, 10)
                : pasaje.destination}
            </Grid>
          </Grid>
        </Grid>
      </Typography>
      <Typography variant="h6" component="h2">
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Grid xs={4}>
            <Grid container justify="center" alignItems="center">
              <EventAvailableIcon className={classes.listIcon} />
              {pasaje.date.substring(5, 10)}
            </Grid>
          </Grid>
          <Grid xs={3}>
            <Grid container justify="center" alignItems="center">
              <MonetizationOnIcon className={classes.listIcon} />
              {kFormatter(pasaje.price)}
            </Grid>
          </Grid>
          <Grid xs={2}>
            <Grid container justify="center" alignItems="center">
              <ScheduleIcon className={classes.listIcon} />
              {pasaje.numberDays}
            </Grid>
          </Grid>
          <Grid xs={3}>
            {pasaje.availability > 0 ? (
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <CheckIcon className={classes.listIconSuccess} />
                <Box className={classes.listSuccess}>{pasaje.availability}</Box>
              </Grid>
            ) : (
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <WarningIcon className={classes.listIconError} />
                <Box className={classes.listError}>N/A</Box>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Typography>
    </div>
  );
}
