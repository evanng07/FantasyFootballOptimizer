import logo from './logo.svg';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';


function App() {
  return (
    
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<HomePage />} />
        </Route>

      </Routes>
    
  );
}

export default App;
