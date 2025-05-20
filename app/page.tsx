'use client'
import { useGSAP } from '@gsap/react'
import React from 'react'

import gsap from 'gsap'
import { SplitText } from 'gsap/all'
gsap.registerPlugin(SplitText)

const Page = () => {
  useGSAP(() => {
    const split = SplitText.create('.text', {
      type: 'words ,chars,lines',
      wordsClass: 'word++',
    })
    gsap.from(split.words, {
      duration: 0.5,
      opacity: 0,
      y: 50,
      stagger: {
        amount: 0.2,
        from: 'random',
        // yoyo: true,
        // repeat: -1,
      },
      onComplete: () => split.revert(),
    })
  })
  return (
    <div className='container'>
      <div className='text'>
        SplitText is a small JavaScript library that splits an HTML
        element&apos;s text into individual characters, words, and/or lines
      </div>
    </div>
  )
}

export default Page
