import React, { useEffect, useState } from "react";
import {
  Container,
  Button,
  Grid,
  MenuItem,
  FormGroup,
  FormLabel,
  Typography,
  Box,
  Divider,
} from "@material-ui/core/index";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { listDestinos, listPasajes } from "../actions/pasajesActions";
import MessageBox from "../components/MessageBox";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import FlightIcon from "@material-ui/icons/Flight";
import FlightLandIcon from "@material-ui/icons/FlightLand";
import { useStyles, MyTextField } from "../classes";
import { fillDB } from "../actions/dbActions";
import { DB_FILL_RESET } from "../constants/dbConstants";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import StorageIcon from "@material-ui/icons/Storage";
import PublishIcon from "@material-ui/icons/Publish";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ResponsiveImgMaterialUi from "responsive-responsive-img-material-ui";

export default function HomeScreen(props) {
  const classes = useStyles();
  // Hooks
  const dispatch = useDispatch();
  const pasajesList = useSelector((state) => state.pasajesList);
  const { loading, error, pasajes } = pasajesList;

  const destinosList = useSelector((state) => state.destinosList);
  const { destinos } = destinosList;

  const dbFill = useSelector((state) => state.dbFill);
  const { loading: loadingDB, error: errorDB, success: successDB } = dbFill;

  const [origin, setOrigin] = useState("Buenos Aires");
  const [destination, setDestination] = useState("Todos");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  // Origenes & destinos...
  // Filtra los destinos (segun todos los destinos que haya
  // en la DB, para despues devolver un array de destinos pero
  // sin repetir, a partir de esto se mapea el array en los select)
  const filteredDest = destinos
    ? destinos
        .filter(
          (currentValue, index, arr) => arr.indexOf(currentValue) === index
        )
        .sort()
    : null;

  useEffect(() => {
    if (successDB) {
      dispatch({ type: DB_FILL_RESET });
      props.history.push("/");
    }
    dispatch(listDestinos());
    dispatch(listPasajes({}));
  }, [dispatch, successDB, props.history]);

  // El buen submitHandler,
  // no hace dispatch solamente,
  // sino que fija los parametros
  // para la pagina con los resultados
  const submitHandler = () => {
    props.history.push(
      `/pasajes/origin=${origin !== "Todos" ? origin : ""}&destination=${
        destination !== "Todos" ? destination : ""
      }&min=${min}&max=${max}&order=Destacados`
    );
    dispatch(
      listPasajes({
        origin: origin !== "Todos" ? origin : "",
        destination: destination !== "Todos" ? destination : "",
        min: min,
        max: max,
      })
    );
  };

  // Handler del boton que llena la DB cuando
  // esta no tiene ningun documento
  const fillHandler = () => {
    dispatch(fillDB());
  };
  return (
    <div>
      <Container maxWidth="md" fixed>
        <Grid container className={classes.title}>
          <Grid container justify="center">
            <Typography variant="h2">
              <Grid container alignItems="flex-end">
                Encontrá tu pasaje ideal{" "}
                <FlightTakeoffIcon className={classes.titleIcon} />
              </Grid>
            </Typography>
          </Grid>
          <Grid container justify="center">
            <Box className={classes.logo}>
              {" "}
              <ResponsiveImgMaterialUi
                lg="/images/pasajeslg.jpg"
                md="/images/pasajessm.jpg"
              />
            </Box>
          </Grid>
        </Grid>
        <Divider style={{ marginBottom: "1rem" }} />
        {loading ? (
          <Grid container justify="center">
            <ReactLoading color="#108cff" type="spin" />{" "}
          </Grid>
        ) : error ? (
          <Grid container justify="center">
            <MessageBox variant="danger">{error}</MessageBox>{" "}
          </Grid>
        ) : pasajes && pasajes.length > 0 && filteredDest ? (
          <Grid item xs={12}>
            <form onSubmit={submitHandler}>
              <FormGroup>
                <FormControl fullWidth className={classes.formControl}>
                  <MyTextField
                    select
                    fullWidth
                    variant="outlined"
                    id="origen"
                    label="Origen"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FlightTakeoffIcon className={classes.inputIcon} />
                        </InputAdornment>
                      ),
                    }}
                    value={origin ? origin : null}
                    defaultValue="Buenos Aires"
                    onChange={(e) => setOrigin(e.target.value)}
                  >
                    <MenuItem value="Todos">Todos</MenuItem>{" "}
                    {filteredDest
                      ? filteredDest.map((origen) => (
                          <MenuItem key={origen} value={origen}>
                            {origen}
                          </MenuItem>
                        ))
                      : null}
                  </MyTextField>
                </FormControl>
              </FormGroup>
              <FormGroup>
                <FormControl fullWidth className={classes.formControl}>
                  <MyTextField
                    select
                    fullWidth
                    id="destination"
                    label="Destino"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FlightLandIcon className={classes.inputIcon} />
                        </InputAdornment>
                      ),
                    }}
                    value={destination ? destination : null}
                    onChange={(e) => setDestination(e.target.value)}
                  >
                    <MenuItem value="Todos">Todos</MenuItem>
                    {filteredDest
                      ? filteredDest.map((destino) => (
                          <MenuItem key={destino} value={destino}>
                            {destino}
                          </MenuItem>
                        ))
                      : null}
                  </MyTextField>
                </FormControl>
              </FormGroup>
              <FormGroup>
                <Grid container justify="center">
                  <FormLabel>Rango de precios</FormLabel>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <FormControl fullWidth className={classes.formControl}>
                      <MyTextField
                        id="min-price"
                        variant="outlined"
                        label="Desde: "
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">$</InputAdornment>
                          ),
                        }}
                        value={min}
                        type="number"
                        onChange={(e) => setMin(e.target.value)}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth className={classes.formControl}>
                      <MyTextField
                        id="max-price"
                        variant="outlined"
                        label="Hasta: "
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">$</InputAdornment>
                          ),
                        }}
                        value={max}
                        type="number"
                        onChange={(e) => setMax(e.target.value)}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </FormGroup>

              <Grid item xs={12}>
                <Grid container direction="column" justify="center">
                  <Button
                    variant="contained"
                    classes={{ root: classes.searchButton }}
                    type="submit"
                  >
                    {" "}
                    <Grid container justify="center" alignItems="center">
                      Buscar pasajes <FlightIcon />
                    </Grid>
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        ) : (
          <>
            <Grid container className={classes.dbFillBox}>
              <MessageBox>
                Hola! Esta app es completamente dependiente de su base de datos,
                por lo que no renderizará nada si no encuentra al menos un
                documento en su colection de MongoDB (como es el caso). Así que
                asegurate de tener corriendo el proceso: <br />$ mongod
                <br />
                Luego, apreta el boton de abajo para cargar la DB
              </MessageBox>
              <Grid>
                <ArrowDownwardIcon className={classes.dbArrow} />
                <ArrowDownwardIcon className={classes.dbArrow} />
                <ArrowDownwardIcon className={classes.dbArrow} />
                <ArrowDownwardIcon className={classes.dbArrow} />
                <ArrowDownwardIcon className={classes.dbArrow} />
                <ArrowDownwardIcon className={classes.dbArrow} />
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="column" justify="center">
                  <Button
                    variant="contained"
                    classes={{ root: classes.dbFillButton }}
                    onClick={fillHandler}
                  >
                    <Grid container justify="center" alignItems="center">
                      Cargar base de datos
                      <StorageIcon /> <PublishIcon />
                      <DataUsageIcon />
                    </Grid>
                  </Button>
                  <Grid
                    container
                    justify="center"
                    style={{ padding: "1rem" }}
                    alignItems="center"
                  >
                    O también podes hacer un GET a esta dirección:
                    <a
                      className="success"
                      href="http://localhost:5000/api/pasajes/seed"
                    >
                      http://localhost:5000/api/pasajes/seed
                    </a>
                    y despues recargar la página
                  </Grid>
                </Grid>
              </Grid>{" "}
            </Grid>
          </>
        )}
        {loadingDB && (
          <Grid container justify="center">
            <ReactLoading color="#13a952" type="cylon" />
          </Grid>
        )}
        {errorDB && <MessageBox variant="danger">{errorDB}</MessageBox>}
        {
          // Logs con todos los datos que
          // maneja esta pagina de la app
        }
        {console.log("pasajesList", pasajesList)}
        {console.log("filtered", filteredDest)}
        {console.log("destination", destination)}
        {console.log("min", min)}
        {console.log("max", max)}
        {console.log("dbFill", dbFill)}
      </Container>
    </div>
  );
}
