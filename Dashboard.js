// File: src/Dashboard.js
import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import './Dashboard.css'; // Importa gli stili personalizzati

function Dashboard() {
  const { user, logout } = useContext(UserContext);

  return (
    <div className="dashboard">
      {/* Header con pulsante di logout */}
      <header className="dashboard-header">
        <h1>Benvenuto, {user.username}!</h1>
        <button className="logout-button" onClick={logout}>
          Logout
        </button>
      </header>

      {/* Contenuto principale */}
      <main>
        <p>LA PREDIZIONE DI OGGI: LILIANA TI MANDA UN CUORE
       

        </p>
      </main>
    </div>
  );
}

export default Dashboard;
