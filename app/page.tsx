import React from "react"

export default function AduraInvitation() {
  return (
    <div className="w-full flex items-center justify-center bg-gradient-to-br from-[#fff8f0] to-[#fff5e6] p-4 sm:p-8 min-h-screen">
      {/* Main invitation container */}
      <div className="relative w-full max-w-md sm:max-w-2xl lg:max-w-3xl border-4 sm:border-8 border-amber-400 bg-gradient-to-br from-[#fff8f0] to-[#fff5e6] overflow-hidden">
        {/* Content container */}
        <div className="relative z-20 flex flex-col items-center justify-start h-full px-4 sm:px-8 py-8 sm:py-12 text-center">
          {/* Title section */}
          <div className="w-full max-w-lg mb-4 sm:mb-8">
            <h2
              style={{ fontFamily: 'Great Vibes', fontWeight: 400 }}
              className="text-2xl sm:text-4xl lg:text-5xl text-[#333333] mb-1 sm:mb-2 leading-tight"
            >
              Rhythms of Worship with
            </h2>
            <h1
              style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 400,
                background: "linear-gradient(90deg, #e6c98f 0%, #fbbf24 50%, #f59e0b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.08em"
              }}
              className="text-4xl sm:text-6xl lg:text-8xl mt-1 sm:mt-2 mb-8 sm:mb-16 leading-none"
            >
              ADURA
            </h1>
          </div>

          {/* Event details */}
          <div className="mt-4 sm:mt-8 space-y-3 sm:space-y-4">
            <p className="text-lg sm:text-xl lg:text-2xl text-[#333333] font-medium">Wednesday, June 25th, 2025</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-base sm:text-lg lg:text-xl text-[#333333]">
              <span className="inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                12:00pm
              </span>
              <span className="inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Eko Hotel & Suites
              </span>
            </div>
          </div>

          {/* Color scheme */}
          <div className="mt-8 sm:mt-12">
            <p className="text-amber-500 text-base sm:text-lg lg:text-xl leading-relaxed">
              Colours: Pristine White &<br />
              Luminous Gold Accents
            </p>
          </div>

          {/* RSVP Button */}
          <div className="mt-8 sm:mt-16">
            <a
              href="/rsvp"
              className="inline-block px-6 sm:px-10 py-3 sm:py-4 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition-colors text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              RSVP
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
