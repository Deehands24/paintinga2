'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import type { Article } from '@/lib/sanity-data'

interface ArticleMediaProps {
  mainImage: Article['mainImage']
  title: string
  priority?: boolean
  sizes?: string
  className?: string
}

export default function ArticleMedia({
  mainImage,
  title,
  priority = false,
  sizes = '100vw',
  className = 'w-full h-auto',
}: ArticleMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    if (!videoRef.current || priority) {
      // If priority, load immediately
      if (videoRef.current) {
        videoRef.current.load()
        setIsVideoLoaded(true)
      }
      return
    }

    // Use Intersection Observer for lazy loading videos
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVideoLoaded) {
            const video = entry.target as HTMLVideoElement
            video.load()
            setIsVideoLoaded(true)
            observer.unobserve(video)
          }
        })
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.1,
      }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [priority, isVideoLoaded])

  if (!mainImage) return null

  // Render Image
  if (mainImage.mediaType === 'image' && mainImage.image) {
    const { image } = mainImage
    return (
      <Image
        src={image.url}
        alt={image.alt}
        width={image.dimensions?.width || 1200}
        height={image.dimensions?.height || 630}
        className={className}
        priority={priority}
        sizes={sizes}
        placeholder={image.lqip ? 'blur' : 'empty'}
        blurDataURL={image.lqip}
        quality={90}
      />
    )
  }

  // Render Video
  if (mainImage.mediaType === 'video' && mainImage.video) {
    const { video } = mainImage
    const posterUrl = video.posterImage?.url
    const videoDimensions = video.posterImage?.dimensions || { width: 1200, height: 630 }

    return (
      <video
        ref={videoRef}
        poster={posterUrl}
        autoPlay
        loop
        muted
        playsInline
        preload={priority ? 'auto' : 'none'}
        width={videoDimensions.width}
        height={videoDimensions.height}
        className={className}
        aria-label={video.alt}
      >
        <source src={video.url} type={video.mimeType || 'video/mp4'} />
        Your browser does not support the video tag.
      </video>
    )
  }

  return null
}
