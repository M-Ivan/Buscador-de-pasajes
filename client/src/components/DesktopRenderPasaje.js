import React from "react";
import { Grid, Typography, Box } from "@material-ui/core/index";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import CheckIcon from "@material-ui/icons/Check";
import WarningIcon from "@material-ui/icons/Warning";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ScheduleIcon from "@material-ui/icons/Schedule";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { useStyles } from "../classes";

export default function DesktopRenderPasaje(props) {
  const classes = useStyles();
  const { pasaje } = props;
  const { origin } = props;
  return (
    <div>
      <Typography className={classes.listTitle} variant="button" gutterBottom>
        <Grid container>
          {
            // Container del titulo
          }
          <Grid xs={4}>
            {!origin ? (
              <Grid container alignItems="center">
                <FlightTakeoffIcon className={classes.listIcon} />
                {pasaje.origin.substring(0, 3)}
                <DoubleArrowIcon className={classes.listTitleIcon} />
              </Grid>
            ) : null}
          </Grid>
          <Grid xs={4}>
            <Grid container justify="center" alignItems="center">
              {pasaje.destination}
            </Grid>
          </Grid>
          <Grid xs={4}></Grid>
        </Grid>
      </Typography>
      <Typography variant="h6" component="h2">
        <Grid container justify="flex-start" alignItems="center">
          <Grid xs={12}>
            {pasaje.availability > 0 ? (
              <Grid
                // Success
                container
                justify="flex-start"
                alignItems="center"
              >
                <CheckIcon className={classes.listIconSuccess} />
                <Box marginLeft={1} className={classes.listSuccessLg}>
                  {pasaje.availability > 1
                    ? `${pasaje.availability} disponibles`
                    : `${pasaje.availability} disponible`}
                </Box>
              </Grid>
            ) : (
              <Grid
                // Warning
                container
                justify="flex-start"
                alignItems="center"
              >
                <WarningIcon className={classes.listIconError} />{" "}
                <Box marginLeft={1} className={classes.listErrorLg}>
                  {" "}
                  Agotado
                </Box>
              </Grid>
            )}
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid xs={4}>
              <Grid container justify="flex-start" alignItems="center">
                <EventAvailableIcon className={classes.listIcon} />
                {pasaje.date}
              </Grid>
            </Grid>
            <Grid xs={4}>
              <Grid container justify="center" alignItems="center">
                <MonetizationOnIcon className={classes.listIcon} />
                {pasaje.price}
              </Grid>
            </Grid>
            <Grid xs={4}>
              <Grid container justify="flex-end" alignItems="center">
                <ScheduleIcon className={classes.listIcon} />
                {pasaje.numberDays} días
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Typography>
    </div>
  );
}
