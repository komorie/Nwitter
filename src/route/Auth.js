import React, { useState } from 'react';
import { authService, firebaseInstance } from '../MyBase';

const Auth =  () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {target: {name, value}} = event;
    if (name === "email"){
      setEmail(value);
    }
    else if (name === "password"){
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
        await authService.createUserWithEmailAndPassword(
          email, password
        )
      }
      else {
        await authService.signInWithEmailAndPassword(
          email, password
        )
      }
    }
    catch(error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount(prev => !prev);
  const onSocialClick = async (event) => {
    const {
      target: {name}
    } = event;
    let provider;
    if (name === "google"){
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    }
    else if (name === "github"){
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
  } 
  return(
    <div>
      <form onSubmit={onSubmit}>
        <input 
          name="email"
          type="text" 
          placeholder="Email" 
          required 
          value={email}
          onChange={onChange}
        />
        <input 
          name="password"
          type="text" 
          placeholder="Password"
          required 
          value={password}
          onChange={onChange}
        />
        <input type="submit" onClick={onSubmit} value={newAccount ? "Create Account" : "Log In"}/>
        {error}
      </form>
      <span onClick={toggleAccount}>{newAccount ? 'Sign in' : 'Create Account'}</span>
      <div>
        <button name="google" onClick={onSocialClick}>Continue with Google</button>
        <button name="github" onClick={onSocialClick}>Continue with Github</button>
      </div>
    </div>
  )
}
  

export default Auth;