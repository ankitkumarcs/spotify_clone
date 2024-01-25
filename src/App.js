import React, { useEffect } from 'react';
import Login from './components/login';
import Spotify from './components/spotify'
import { useStateProvider } from './utils/StateProvider';
import { reducerCases } from './utils/constants';

function App() {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    const hash = window.location.hash;

    if(hash){
      const token =  hash.substring(1).split("&")[0].split("=")[1];
      dispatch({ type: reducerCases.SET_TOKEN, token});
    }
  },[token, dispatch]);
  return (
    <div className="App">
    {token ? <Spotify/> : <Login/>} 
    </div>
  );
}

export default App;
