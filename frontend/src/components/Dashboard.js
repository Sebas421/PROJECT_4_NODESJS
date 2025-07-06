import React, { useState, useContext } from 'react';
import './SectionStyle.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Dashboard() {
  const [visibleSection, setVisibleSection] = useState(null);
  const { username, logout, token } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <header className="header-bar">
        <div className="nav-bar">
          <h1 className="site-title">Fitness Forum</h1>
          <nav className="nav-links right-links">
            {token ? (
              <button onClick={handleLogout} className="nav-link logout-btn">Logout</button>
            ) : (
              <>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/register" className="nav-link">Register</Link>
              </>
            )}
          </nav>
        </div>
        <hr className="top-border" />
      </header>

      <div className="section-container">
        <h2 className="welcome-message">
          Welcome to the Fitness Forum{username ? `, ${username}` : ''}!
        </h2>

        <h2 className="section-title clickable" onClick={() => toggleSection('exercises')}>
          Exercises
        </h2>
        {visibleSection === 'exercises' && (
          <ul className="section-list">
            <li>Push-ups</li>
            <li>Squats</li>
            <li>Planks</li>
          </ul>
        )}

        <h2 className="section-title clickable" onClick={() => toggleSection('supplements')}>
          Supplements
        </h2>
        {visibleSection === 'supplements' && (
          <ul className="section-list">
            <li>Creatine</li>
            <li>Whey Protein</li>
            <li>Multivitamins</li>
          </ul>
        )}

        <h2 className="section-title clickable" onClick={() => toggleSection('recommendations')}>
          Recommendations
        </h2>
        {visibleSection === 'recommendations' && (
          <p className="section-paragraph">
            Stay consistent, hydrate well, and eat enough calories for your goals!
          </p>
        )}
      </div>
    </div>
  );
}
