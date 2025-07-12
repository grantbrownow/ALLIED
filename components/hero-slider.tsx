"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/output-1-1140x876.jpg-8dU5CRsFB1Y7g8JbZt1Mw9e9AoSy5Z.jpeg",
    title: "Before",
    subtitle: "Clearing the Way for Tomorrow",
    description: "Every new beginning starts with demolition. We carefully prepare sites for their next chapter.",
    ctaText: "Start Your Project",
    hasWorkerOverlay: true,
  },
  {
    id: 2,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/output-3-slider-3-XreNqtrKmfu7UmqhHVyqrMIuvgyV25.jpeg",
    title: "During",
    subtitle: "Expert Demolition in Progress",
    description: "Our skilled team safely and efficiently breaks down structures with precision and care.",
    ctaText: "See Our Process",
    hasWorkerOverlay: false,
  },
  {
    id: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/output-4.jpg-EnAWVl3TA5FfJFdliIzlvtge3CoWZj.jpeg",
    title: "After",
    subtitle: "Ready for New Possibilities",
    description: "A clean slate ready for your vision. From demolition to preparation, we clear the way forward.",
    ctaText: "Explore Possibilities",
    hasWorkerOverlay: false,
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loading, setLoading] = useState(true)
  const [direction, setDirection] = useState(0)
  const [workerLoaded, setWorkerLoaded] = useState(false)

  useEffect(() => {
    // Preload the worker image
    const workerImage = new Image()
    workerImage.src = "/demolition-worker.png"
    workerImage.onload = () => setWorkerLoaded(true)

    // Auto-advance slides
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [currentSlide])

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.5 },
    }),
  }

  const workerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: { duration: 0.3 },
    },
  }

  const workerDesktopVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.3 },
    },
  }

  if (loading) {
    return (
      <div className="relative bg-secondary h-[600px] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-48 bg-gray-300 rounded mb-4"></div>
          <div className="h-6 w-64 bg-gray-300 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative bg-secondary overflow-hidden h-[600px] md:h-[700px]">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "tween", duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          ></div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Worker Overlay - Bottom Right */}
      <AnimatePresence>
        {slides[currentSlide].hasWorkerOverlay && workerLoaded && (
          <motion.div
            key="worker-overlay-mobile"
            className="md:hidden absolute bottom-0 right-0 z-30 pointer-events-none"
            style={{
              backgroundImage: "url('/demolition-worker.png')",
              backgroundSize: "contain",
              backgroundPosition: "bottom right",
              backgroundRepeat: "no-repeat",
              height: "40%",
              width: "40%",
            }}
            variants={workerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
        )}
      </AnimatePresence>

      {/* Content Container - Using grid for better layout control */}
      <div className="container relative z-20 h-full grid grid-cols-12 items-center">
        {/* Desktop Worker Overlay - Left Side */}
        <AnimatePresence>
          {slides[currentSlide].hasWorkerOverlay && workerLoaded && (
            <motion.div
              key="worker-overlay-desktop"
              className="hidden md:block col-span-5 lg:col-span-4 h-full relative pointer-events-none z-30"
              variants={workerDesktopVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div
                className="absolute bottom-0 left-0 h-[90%] w-full"
                style={{
                  backgroundImage: "url('/demolition-worker.png')",
                  backgroundSize: "contain",
                  backgroundPosition: "bottom left",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Text Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={`col-span-12 ${
              slides[currentSlide].hasWorkerOverlay
                ? "md:col-span-7 md:col-start-6 lg:col-span-8 lg:col-start-5"
                : "md:col-span-12"
            } flex justify-center`}
          >
            <div className="text-center text-white max-w-3xl px-4">
              <motion.div
                className="inline-block bg-primary text-black font-bold px-5 py-2 rounded-md shadow-md transform -rotate-1 mb-4"
                variants={textVariants}
                custom={0}
              >
                {slides[currentSlide].title} Demolition
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading"
                variants={textVariants}
                custom={1}
              >
                {slides[currentSlide].subtitle}
              </motion.h1>

              <motion.p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto" variants={textVariants} custom={2}>
                {slides[currentSlide].description}
              </motion.p>

              <motion.div variants={textVariants} custom={3}>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary-600 text-black font-bold shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 rounded-md"
                >
                  <Link href="#quote-form" className="flex items-center gap-2">
                    {slides[currentSlide].ctaText}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-40 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-primary w-10" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-40">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear", repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
        />
      </div>
    </div>
  )
}
