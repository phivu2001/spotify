import React, { useContext } from 'react'
import { useState } from 'react'
import { songs } from '../Context'


export default function  () {
    const {DataSongs, handleSetSong} = useContext(songs)
    const [idsong, setidSong] = useState(0)
    const handlePlaySong = (idsong) => {
            setidSong(idsong)
            handleSetSong(idsong)
}
  return (
    <div className='col-span-2 overflow-y-scroll '> 
        <table className='table-auto w-full relative '>
            <thead>
                <tr className='text-white h-12 sticky top-0 '>
                    <th className='w-[10%]'>#</th>
                    <th className='text-left'>Title</th>
                    <th className='w-[10%]'>Author</th>
                    <th className='w-[10%]'><i class="fa fa-download" aria-hidden="true"></i></th>
                </tr>
            </thead>
            <tbody className=''>
                {
                    DataSongs.map((song, index) =>(
                        <tr key = {index } className={`text-center sticky top-10 h-10 hover:bg-slate-300 bg-slate-600 ${idsong === song.id && 'text-teal-400' }`}
                        onClick={() => handlePlaySong(song.id) }>
                            <td > {index + 1}</td>
                            <td className='text-left'>{song.name}</td>
                            <td>{song.author}</td>
                            <td><a href={song.url}>
                                <i class="fa fa-download" aria-hidden="true"></i></a></td>
                    </tr>
                    ))
                }
               
            </tbody>


        </table>
    </div>
  )
}
