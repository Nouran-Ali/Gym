import './App.css';
import Layout from './Components/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Overview from './pages/Overview';
import Members from './Components/Members';
import AddNewUser from './Components/AddNewUser';
import ShowUser from './pages/ShowUser';
import Audience from './pages/Audience';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact activeClassName="active" element={<Login />} />
          <Route
            path="/overview"
            element={
              <Layout>
                <Overview />
              </Layout>
            }
          />
          <Route
            path="/members"
            element={
              <Layout>
                <Members />
              </Layout>
            }
          />
          <Route
            path="/addNewUser"
            element={
              <Layout>
                <AddNewUser />
              </Layout>
            }
          />

          <Route
            path="/showUser"
            element={
              <Layout>
                <ShowUser />
              </Layout>
            }
          />

          <Route
            path="/audience"
            element={
              <Layout>
                <Audience />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
