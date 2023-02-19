import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Detailsong from './components/Detailsong';
import ListSongs from './components/ListSongs';
import { songs } from './Context';
import DataSongs from './data/songs.json'
import Playing from './components/Playing';
import { useState } from 'react';


function App() {
  const [song, setSong] = useState(DataSongs[0])

  const handleSetSong = (idsong) => {
  const song =  DataSongs.find(song => song.id === idsong)
    setSong(song)
  }

  return (
    <div className="App">
      <songs.Provider value={{DataSongs, song, handleSetSong}}>
      <Navbar/>
      <div className='grid grid-cols-3 bg-slate-400 h-screen-navbar-player overflow-hidden'>
        {/* span 1 */}
        <Detailsong/>
        {/* span 2 */}

        <ListSongs/>
      </div>
      <Playing/>
      </songs.Provider>
    </div>
    
    
  );
}

export default App;
