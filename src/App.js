import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Movies, Actors, MovieInfo, Navbar, Profile } from './components/index';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path='/' element={<Movies />} />
          <Route exact path='/movie/:id' element={<MovieInfo />} />
          <Route exact path='/actors/:id' element={<Actors />} />
          <Route exact path='/profile/:id' element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
