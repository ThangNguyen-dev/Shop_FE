import logo from './logo.svg';
import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login/Login';
import Home from './pages/home/Home';
import routes from './routes/routes';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        {
          routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))
        }
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
