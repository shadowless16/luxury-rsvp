import Image from "next/image"
import RsvpForm from "./rsvp-form"

export default function Component() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-white via-amber-50 to-white">
      {/* Centered RSVP Card with top image inside the card */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Card Container */}
          <div className="relative bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-amber-100">
            {/* Large, elegant featured image of the couple inside the card */}
            <div className="relative w-full h-56 sm:h-64 md:h-72">
              <Image
                src="https://i.ibb.co/zhvYn6KY/Whats-App-Image-2025-06-12-at-16-17-33-3100466c.jpg"
                alt="Couple"
                fill
                className="object-cover w-full h-full"
                priority
              />
              {/* Gradient overlay to blend image into card background */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/60 to-white" />
            </div>
            {/* Gold Accent Monogram */}
            <div className="flex justify-center mt-4 mb-2">
                <span
                className="text-4xl sm:text-5xl font-[400] tracking-widest"
                style={{
                  fontFamily: 'Great Vibes, cursive',
                  color: '#E6C98F', // slightly darker champagne gold
                  textShadow: '0 1px 6px rgb(218, 170, 28), 0 0px 1px #fff',
                  letterSpacing: '0.08em',
                }}
                >
                RSVP
                </span>
            </div>
            {/* Gold Accent Line */}
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-4" style={{fontFamily: 'cursive'}} />
            {/* Header - Only names and RSVP title */}
            <div className="text-center mb-6 px-4">
              <h3 className="font-serif text-base text-gray-800 italic mb-2">Adura @ 60</h3>
            </div>
            {/* RSVP Form */}
            <div className="relative z-10 px-6 pb-8">
              <RsvpForm />
            </div>
            {/* Footer */}
            <div className="text-center mt-2 pb-4">
              <div className="flex items-center justify-center mt-3">
                <div className="w-8 h-px bg-amber-400/50" />
                <div className="w-2 h-2 bg-amber-400 rounded-full mx-2" />
                <div className="w-8 h-px bg-amber-400/50" />
              </div>
              <p className="font-serif text-xs text-gray-700 italic mt-2">Thank you for your time. !</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
