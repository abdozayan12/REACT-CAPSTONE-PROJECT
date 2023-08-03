import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import CountryDetails from './pages/Details';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/conutrydata/:countryId" element={<CountryDetails />} />
      </Routes>
    </>
  );
}

export default App;
