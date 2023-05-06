import logo from './logo.svg';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import SearchPage from './pages/SearchPage';


function App() {
  return (
    
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<HomePage />} />
          <Route path='/team' element={<TeamPage />} />
          <Route path='/search' element={<SearchPage />} />
        </Route>

      </Routes>
    
  );
}

export default App;
