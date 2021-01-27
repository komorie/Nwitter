import React, { useEffect, useState } from 'react';
import Routin from './Route';
import { authService } from '../MyBase';

function App() {
  const auth = authService;
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      }
      else {
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  }, []);
  return (
    init ? <Routin isLoggedIn={isLoggedIn}/> : "Loading..."
  );
}

export default App;
