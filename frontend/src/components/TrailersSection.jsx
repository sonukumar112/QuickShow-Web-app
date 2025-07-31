import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import ReactPlayer from 'react-player'
import BlurCircle from './BlurCircle'
import { PlayCircleIcon } from 'lucide-react'

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
      <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>Trailers</p>

      <div className='relative mt-6 flex flex-col items-center'>
        <BlurCircle top='-100px' right='-100px'/>
        <div className="w-full flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-lg max-w-[960px] w-full">
            <ReactPlayer
              url={currentTrailer.videoUrl}
              controls={true}
              width="100%"
              height="540px"
              className="react-player"
              config={{
                youtube: {
                  playerVars: {
                    origin: window.location.origin,
                    showinfo: 1,
                    autoplay: 0
                  }
                }
              }}
            />
          </div>
        </div>
        {/* Thumbnails */}
        <div className="flex gap-6 mt-8 max-w-3xl mx-auto w-full justify-center">
          {dummyTrailers.map((trailer, idx) => (
            <div
              key={trailer.image}
              className={`relative rounded-lg overflow-hidden cursor-pointer group transition-all duration-300 border-2
                ${currentTrailer.videoUrl === trailer.videoUrl ? 'border-primary' : 'border-transparent'}
                hover:-translate-y-1`}
              style={{ width: 180, height: 100 }}
              onClick={() => setCurrentTrailer(trailer)}
            >
              <img
                src={trailer.image}
                alt="trailer"
                className="rounded-lg w-full h-full object-cover brightness-75"
              />
              <PlayCircleIcon
                strokeWidth={1.6}
                className="absolute top-1/2 left-1/2 w-5 h-10 md:w-8 md:h-12 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrailersSection