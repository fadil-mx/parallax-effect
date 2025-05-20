'use client'
import Image from 'next/image'
import React from 'react'
import { ReactLenis } from '@studio-freight/react-lenis'
import Parallaximage from '@/components/Parallaximage'

const page = () => {
  return (
    <ReactLenis root>
      <div className='app '>
        <div className='smooth-content'></div>
        <section className='hero'>
          <div className='img '>
            <Parallaximage src='/photos/1.jpg' alt='hero' />
          </div>
          <div className='nav absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex justify-between w-screen p-4 items-center z-10'>
            <h1 className='navp'>Tour</h1>
            <h1 className='navp'>Updates</h1>
            <h1 className='navp'>Contect</h1>
            <h1 className='navp'>Merch</h1>
          </div>
        </section>

        <section className='projects h-[125vh] w-screen  flex gap-4 '>
          <div className='img'>
            <Parallaximage src='/photos/3..jpg' alt='hero' />
          </div>
          <div className='projects-brief absolute  w-1/4 top-[35%] z-10 left-[35%] translate-x-[-50%] translate-y-[-50%] '>
            <p className=' text-sm'>
              “Arcade” is a hauntingly emotional song by Dutch artist Duncan
              Laurence, which won the Eurovision Song Contest in 2019. With its
              poignant lyrics and stirring melody, it tells the story of lost
              love and longing, capturing hearts worldwide.
            </p>
          </div>
          <div className='col project-cover flex-1 h-1/2'>
            <div className='img'>
              <Parallaximage src='/photos/4.jpg' alt='hero' />
            </div>
          </div>

          <div className='col project-list flex-[2_2_0%] flex flex-col justify-center items-center gap-7'>
            <div className='project'>
              <h1 className=' font-macondo font-[400] text-5xl '>
                Love Don&#39;t Hate It
              </h1>
              <p className=' text-sm'> Apple Music / Spotify / YouTube</p>
            </div>
            <div className='project'>
              <h1 className='font-macondo font-[400] text-5xl '>
                Someone Else{' '}
              </h1>
              <p className='text-sm'> Apple Music / Spotify / YouTube</p>{' '}
            </div>
            <div className='project'>
              <h1 className='font-macondo font-[400] text-5xl '>
                Sleeping on the Phone
              </h1>
              <p className='text-sm'> Apple Music / Spotify / YouTube</p>{' '}
            </div>
          </div>
        </section>

        <section className='about flex bg-[#68461f]'>
          <div className='col intro  '>
            <p className='underline mb-1'>Introduction</p>
            <p className='text-sm  '>
              Duncan Laurence is a Dutch singer-songwriter who gained
              international fame after winning the Eurovision Song Contest 2019
              with his hit song Arcade.
            </p>
          </div>
          <div className='col portrait'>
            <div className='portrait-container relative w-full h-full'>
              <div className='img'>
                <Parallaximage src='/photos/6.jpg' alt='hero' />
              </div>
            </div>
          </div>
        </section>

        <section className='banner flex justify-center items-center'>
          <div className='img'>
            <Parallaximage src='/photos/2..jpg' alt='hero' />
          </div>
          <div className='banner-copy relative text-center'>
            <p>Be the</p>
            <h1 className='uppercase font-black text-7xl font-macondo'>
              First to know
            </h1>
            <p className='text-sm '>
              Want to hear the latest news on my upcoming music releases,
              touring, and merch?
            </p>
            <button className='btn bg-[#dbccc0] text-black rounded-3xl px-2 py-1 font-bold'>
              Join the newsletter
            </button>
          </div>
        </section>

        <section className='footer grid grid-cols-3 p-4 bg-[#68461f]'>
          <div className='col  col-span-2 flex flex-col '>
            <p className='text-sm'>Instagram / TikTok / Discord </p>
            <div className='footer-link flex-1 flex flex-col  justify-center'>
              <p className=''>Menu</p>
              <h2 className='footerp'>Tour</h2>
              <h2 className='footerp'>Updates</h2>
              <h2 className='footerp'>Contect</h2>
              <h2 className='footerp'>Merch</h2>
            </div>
            <p className='text-sm'>Desigbned by Max</p>
          </div>
          <div className='col  flex flex-col col-span-1'>
            <p className=''>
              Join the newsletter
              <br />
              <button className='btn bg-[#dbccc0] text-black rounded-3xl px-2 py-1 font-bold'>
                Subscribe
              </button>
            </p>
            <div className=' flex-1  flex justify-center items-center'>
              <div className='shop relative w-full h-1/2    '>
                <div className='img'>
                  <Parallaximage src='/photos/5.jpg' alt='hero' />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  )
}

export default page
