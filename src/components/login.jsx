import React from 'react'
import '../style/login.css'


export default function login() {

  const handleClick = () => {
    const clientId = "91f02a5f516a45d1a14d50e072727435";
    const redirectUrl = "http://localhost:3000/"
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scops = [
      'user-read-email',
      'user-read-private',
      'user-read-playback-state',
      'user-modify-playback-state',
      'user-read-currently-playing',
      'user-read-playback-position',
      'user-top-read',
      'user-read-recently-played'];

      window.location.href = `${apiUrl}? client_id=${clientId}& redirect_url=${redirectUrl}& scope=${scops.join(" ")}& response_type=token&show_daialog=true`;
  }

  return (
    <div className='container'>
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" />
      <button onClick={handleClick}>Connect Spotify</button>
    </div>
  )
}
