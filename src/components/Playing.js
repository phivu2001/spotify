import React from 'react'
import { useContext } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { songs } from '../Context';
export default function Playing() {
    const {song } = useContext(songs)
  return (
    <div><AudioPlayer src={song.url} />
    </div>
  )
}
 