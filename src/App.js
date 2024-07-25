// src/App.js
import './App.css';
import './tabs.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Overview from './pages/Overview';
import Members from './Components/Members';
import AddNewUser from './Components/AddNewUser';
import ShowUser from './pages/ShowUser';
import Audience from './pages/Audience';
import DashboardLayout from './Components/DashboardLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />

          <Route path="members" element={<Members />} />

          <Route path="members/:id" element={<ShowUser />} />

          <Route path="addNewUser" element={<AddNewUser />} />
          
          <Route path="audience" element={<Audience />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
