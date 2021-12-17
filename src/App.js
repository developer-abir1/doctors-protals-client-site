import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Home from './page/Home/Home/Home';
import Appoinment from './page/Appoinment/Appoinment/Appoinment';
import Login from './page/Login/Login/Login';
import Register from './page/Register/Register';
import AuthProviver from './context/AuthProviver';
import PrivetRoute from './page/PrivetRoute/PrivetRoute';
import Dashboard from './page/Dashboard/Dashboard/Dashboard';
import DashboardHome from './page/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './page/Dashboard/MakeAdmin/MakeAdmin';
import AddDoctors from './page/Dashboard/AddDoctors/AddDoctors';
import AdminRoute from './page/Login/AdminRoute/AdminRoute';



function App() {
  return (

    <AuthProviver>

      <Routes>

        <Route exact path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/appoinment" element={
          <PrivetRoute>
            <Appoinment></Appoinment>
          </PrivetRoute>
        } />

        <Route path="/login" element={<Login></Login>} />
        <Route path="/registar" element={<Register></Register>} />
        <Route path="/dashboard" element={<PrivetRoute>
          <Dashboard />
        </PrivetRoute>}>
          <Route exact path="/dashboard" element={<DashboardHome></DashboardHome>}>
          </Route>

          <Route path={`/dashboard/makeAdmin`} element={
            <AdminRoute>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
          }>
          </Route>
          <Route path={`/dashboard/addDoctors`} element={
            <AdminRoute>
              <AddDoctors></AddDoctors>
            </AdminRoute>
          }>
          </Route>
        </Route>
      </Routes>
    </AuthProviver>

  );
}

export default App;
