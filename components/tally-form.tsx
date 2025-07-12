"use client"

import { useEffect, useRef } from "react"

export function TallyForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Add event listener for messages from the iframe
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://tally.so") return

      // Handle height adjustments if needed
      if (event.data.type === "tally.resize") {
        if (iframeRef.current) {
          iframeRef.current.style.height = `${event.data.height}px`
        }
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  return (
    <div className="bg-white rounded-xl border shadow-lg overflow-hidden transition-all duration-300">
      {/* Form Header */}
      <div className="bg-gradient-to-r from-primary/90 to-primary p-6 text-white">
        <h2 className="text-2xl font-bold">Request a Free Quote</h2>
        <p className="text-white/80 mt-1">Fill out the form below and we'll get back to you within 24 hours</p>
      </div>

      <div className="p-6">
        <iframe
          ref={iframeRef}
          src="https://tally.so/embed/npMR8E?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="100%"
          height="343"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="ALLIED Wrecking Quote Request"
          className="mx-auto"
        ></iframe>
      </div>
    </div>
  )
}
