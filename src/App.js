import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import { UserStorage } from "./UserContext";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import Photo from './Components/Photo/Photo'
import UserProfile from "./Components/User/UserProfile";

function App() {
  return (
    <div>
      <Router>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
              
            />
            <Route path="foto/:id" element={<Photo/>}/>
            <Route path="perfil/:user" element={<UserProfile/>}/>
          </Routes>
          <Footer />
        </UserStorage>
      </Router>
    </div>
  );
}

export default App;
