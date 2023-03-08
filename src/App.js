import './App.css';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Movies, Actors, MovieInfo, Navbar, Profile } from './components/index';

const App = () => {
  return (
    <div className='App'>
      <CssBaseline />
      <Navbar />
      <main>
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
