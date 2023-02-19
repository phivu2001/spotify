import React from 'react'

export default function Detailsong() {
  return (
    <div className='col-span-1'>
        <h2 className='text-cyan-300 font-bold' >Now playing</h2>
        <h2 className='text-gray-700 text-2xl'>Sing me to sleep</h2>
        <div className='w-[240px] m-auto mt-10'>
            <img className='w-full' src="https://hoanghapc.vn/media/news/580_spotify_la_gi_2.jpg" alt="avatar" />
        </div>
        <div className='flex justify-evenly items-center mt-10'>
            <img className='w-[70px] h-[70px] rounded-full' src="https://hoanghapc.vn/media/news/580_spotify_la_gi_2.jpg" alt="avatar" />
            <span className='text-xl text-white'>Spotify</span>
        </div>
    </div>
  )
}
