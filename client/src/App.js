import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import PasajesScreen from "./screens/PasajesScreen";
import { BottomNavigation, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./classes";

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <main>
        <Route path="/" exact component={HomeScreen}></Route>
        <Route
          // Definiendo los params
          path="/pasajes/origin=:origin?&destination=:destination?&min=:min?&max=:max?&order=:order?"
          exact
          component={PasajesScreen}
        ></Route>
      </main>
      <BottomNavigation className={classes.footer}>
        <Grid container justify="center" alignItems="center">
          <Typography variant="body">
            {<a href="https://m-ivan.github.io"> Ir a mi Portafolio</a>}
          </Typography>
        </Grid>
      </BottomNavigation>
    </BrowserRouter>
  );
}

export default App;
