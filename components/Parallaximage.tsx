'use client'
import React, { useRef } from 'react'
import { useLenis } from '@studio-freight/react-lenis'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
const lerp = (start, end, factor) => start + (end - start) * factor

const Parallaximage = ({ src, alt = 'img' }: { src: string; alt?: string }) => {
  const imageref = useRef<HTMLImageElement | null>(null)
  const bound = useRef(null)
  const currentTranslatey = useRef(0)
  const targetTranslatey = useRef(0)
  const rafid = useRef(null)

  useGSAP(() => {
    const updateBounds = () => {
      if (imageref.current) {
        const rect = imageref.current.getBoundingClientRect()
        bound.current = {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
        }
      }
    }
    updateBounds()
    window.addEventListener('resize', updateBounds)

    const animate = () => {
      if (imageref.current) {
        currentTranslatey.current = lerp(
          currentTranslatey.current,
          targetTranslatey.current,
          0.1
        )
        if (
          Math.abs(currentTranslatey.current - targetTranslatey.current) > 0.1
        ) {
          imageref.current.style.transform = `translateY(${currentTranslatey.current}px) scale(1.25)`
        }
      }
      rafid.current = requestAnimationFrame(animate)
    }
    animate()
    return () => {
      window.removeEventListener('resize', updateBounds)
      if (rafid.current) {
        cancelAnimationFrame(rafid.current)
      }
    }
  }, [])

  useLenis(({ scroll }) => {
    if (!bound.current) return
    const relativeScroll = scroll - bound.current.top
    targetTranslatey.current = -relativeScroll * 0.05
  })

  return (
    <Image
      ref={imageref}
      src={src}
      alt={alt}
      className='imgg'
      fill
      style={{
        willChange: 'transform',
        transform: 'translateY(0) scale(1.25)',
      }}
    />
  )
}

export default Parallaximage
