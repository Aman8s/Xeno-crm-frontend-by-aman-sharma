import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import CampaignBuilder from "./pages/CampaignBuilder";
import CampaignHistory from "./pages/CampaignHistory";
import CampaignLogs from "./pages/CampaignLogs";
import Login from "./pages/Login";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <Router>
      <div className="app">
        <header className="navbar">
          <div className="navbar-left">
            <h1 className="brand">Xeno CRM</h1>
            {user && (
              <>
                <Link to="/" className="nav-link">
                  Create Campaign
                </Link>
                <Link to="/history" className="nav-link">
                  Campaign History
                </Link>
                <Link to="/logs" className="nav-link">
                  Logs
                </Link>
              </>
            )}
          </div>
          <div className="navbar-right">
            {user ? (
              <>
                <span className="welcome-text">Welcome, {user.name}</span>
                <button className="logout-btn" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="login-btn">
                Login
              </Link>
            )}
          </div>
        </header>

        <main className="page-container">
          <Routes>
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route
              path="/"
              element={user ? <CampaignBuilder /> : <Navigate to="/login" />}
            />
            <Route
              path="/history"
              element={user ? <CampaignHistory /> : <Navigate to="/login" />}
            />
            <Route
              path="/logs"
              element={user ? <CampaignLogs /> : <Navigate to="/login" />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
