import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Grid,
  MenuItem,
  GridListTileBar,
  IconButton,
  GridListTile,
  ListSubheader,
  GridList,
  Typography,
  InputAdornment,
  Box,
} from "@material-ui/core/index";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { listDestinos, listPasajes } from "../actions/pasajesActions";
import MessageBox from "../components/MessageBox";
import InputLabel from "@material-ui/core/InputLabel";
import InfoIcon from "@material-ui/icons/Info";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import ListIcon from "@material-ui/icons/List";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import FlightLandIcon from "@material-ui/icons/FlightLand";
import { useWindowDimensions } from "../utils";

// Styles
import { MyTextField, useStyles } from "../classes";
import DesktopRenderPasaje from "../components/DesktopRenderPasaje";
import MobileRenderPasajes from "../components/MobileRenderPasajes";

export default function PasajesScreen(props) {
  const classes = useStyles();
  // Hooks
  const dispatch = useDispatch();
  const pasajesList = useSelector((state) => state.pasajesList);
  const { loading, error, pasajes } = pasajesList;
  const origin = props.match.params.origin;
  const destination = props.match.params.destination;
  const min = props.match.params.min;
  const max = props.match.params.max;
  const destinosList = useSelector((state) => state.destinosList);
  const { destinos } = destinosList;
  const { order = "Destacados" } = useParams();

  // Responsive hook
  const { width } = useWindowDimensions();
  const breakpoint = 1000;

  useEffect(() => {
    // Dispatch de los destinos para que al volver a "/" no crashee.
    dispatch(listDestinos());
    dispatch(listPasajes({ origin, destination, min, max, order }));
  }, [dispatch, origin, destination, min, max, order]);

  // Actualiza los parametros del router, que a su vez son los valores
  // De parametros para cuando axios haga fetch a la api.
  const updateUrlParams = (filter) => {
    const sortOrder = filter.order || order;
    return `/pasajes/origin=${origin ? origin : ""}&destination=${
      destination ? destination : ""
    }&min=${min ? min : ""}&max=${max ? max : ""}&order=${sortOrder}`;
  };

  return (
    <Grid container className={classes.root}>
      <Container maxWidth="lg" fixed>
        {origin && !destination ? (
          <h4>
            Viendo todos los pasajes saliendo{" "}
            <FlightTakeoffIcon className={classes.listIcon} /> desde {origin},{" "}
            <Link to="/">CAMBIAR</Link>
          </h4>
        ) : !origin && destination ? (
          <h4>
            Viendo todos los pasajes hacia{" "}
            <FlightLandIcon className={classes.listIcon} /> {destination},{" "}
            <Link to="/"> CAMBIAR</Link>
          </h4>
        ) : origin && destination ? (
          <h4>
            Viendo pasajes saliendo{" "}
            <FlightTakeoffIcon className={classes.listIcon} /> desde {origin},
            hacia <FlightLandIcon className={classes.listIcon} /> {destination},{" "}
            <Link to="/"> CAMBIAR</Link>
          </h4>
        ) : (
          <h4>
            Viendo todos los pasajes, <Link to="/">CAMBIAR</Link>
          </h4>
        )}
      </Container>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={12} sm={6}>
          <Grid container justify="center">
            <Typography variant="h4" gutterBottom>
              <Box>
                <strong>
                  <Grid container alignItems="center">
                    {pasajes && pasajes.length > 0
                      ? "¿A donde viajas?"
                      : "No se encontraron pasajes"}
                  </Grid>{" "}
                </strong>
              </Box>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container justify="center">
            {pasajes && pasajes.length > 1 ? (
              <InputLabel id="order-label">
                <Grid container alignItems="center">
                  <Box className={classes.label}>Ordenando por:</Box>
                  <MyTextField
                    select
                    autoWidth
                    labelId="order-label"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <ListIcon className={classes.inputIcon} />
                        </InputAdornment>
                      ),
                    }}
                    id="order"
                    value={order}
                    onChange={(e) => {
                      props.history.push(
                        updateUrlParams({ order: e.target.value })
                      );
                    }}
                  >
                    <MenuItem value="Destacados">Destacados</MenuItem>
                    <MenuItem value="Más Barato">Más Baratos</MenuItem>
                    <MenuItem value="Más Caro">Más Caros</MenuItem>
                  </MyTextField>
                </Grid>
              </InputLabel>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
      {loading ? (
        <Grid container justify="center">
          <ReactLoading color="#ffae00" type="spin" />
        </Grid>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : pasajes ? (
        <GridList cellHeight={350} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader className={classes.listSubheader}>
              <Typography variant="h6" gutterBottom>
                <Grid container justify="center">
                  {pasajes && pasajes.length > 0 ? (
                    "Tenemos para ofrecerte: "
                  ) : (
                    <br />
                  )}
                </Grid>
              </Typography>
            </ListSubheader>
          </GridListTile>
          {pasajes.length === 0 ? (
            <>
              <MessageBox>
                Oops! Parece que no tenemos pasajes
                {origin && destination
                  ? `desde ${origin} hacia ${destination}`
                  : "para tus filtros"}
                <SentimentVeryDissatisfiedIcon />, pero podes
                <Link to="/">
                  volver y probar con otros filtros
                  <SentimentVerySatisfiedIcon />
                </Link>
              </MessageBox>
            </>
          ) : pasajes && pasajes.length > 0 ? (
            pasajes.map((pasaje) => (
              <GridListTile key={pasaje._id}>
                <img
                  className={classes.listImg}
                  src={pasaje.image}
                  alt={pasaje.destination}
                />
                {console.log("pasaje", pasaje)}
                <GridListTileBar
                  classes={{ root: classes.gridListTile }}
                  title={
                    <Grid>
                      {width > breakpoint ? (
                        <DesktopRenderPasaje pasaje={pasaje} origin={origin} />
                      ) : (
                        <MobileRenderPasajes pasaje={pasaje} origin={origin} />
                      )}
                    </Grid>
                  }
                />
              </GridListTile>
            ))
          ) : null}
        </GridList>
      ) : null}
      {
        // LOGS
      }
      {console.log("pasajes", pasajes)}
      {console.log("order", order)}
      {console.log("props", props)}
      {console.log("destinos", destinos)}
      {console.log("width", width)}
      {console.log("break", width < breakpoint ? "mobile" : "desk")}
    </Grid>
  );
}
