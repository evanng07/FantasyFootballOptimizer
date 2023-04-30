import logo from './logo.svg';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={HomePage} />
      </Routes>
    </Layout>
  );
}

export default App;
