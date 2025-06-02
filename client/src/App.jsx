import React, { useState } from "react";
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  function handleLoginSuccess(username) {
    setLoggedInUser(username);
  }

  if (!loggedInUser) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return <Dashboard loggedInUser={loggedInUser} />;
}

export default App;
