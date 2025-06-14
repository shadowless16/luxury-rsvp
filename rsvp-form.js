"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

const gold = '#D4AF37';
const goldDeep = '#B8860B';

const style = `
.input-container {
  position: relative;
}
input, input[type='number'] {
  height: 48px;
  width: 100%; /* Make input full width */
  border: 2px solid ${gold};
  border-radius: 8px;
  box-sizing: border-box;
  padding: 12px 16px 8px 16px; /* Reduce top padding for better alignment */
  font-family: 'Segoe UI';
  font-size: 18px;
  outline: none !important;
  background: #fff;
  color: ${gold};
}
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  -moz-appearance: textfield;
}
.label {
  position: absolute;
  left: 20px;
  top: -12px;
  background: #fff;
  padding: 0 4px;
  pointer-events: none;
}
.label .text {
  font-size: 14px;
  color: ${gold};
  font-family: 'Segoe UI';
  transition: none;
  background: #fff;
  padding-left: 4px;
  padding-right: 4px;
}
input:focus, input[type='number']:focus {
  border: 2.5px solid ${goldDeep};
  outline: none !important;
  box-shadow: none !important;
  color: ${goldDeep};
}
.input-container input, .input-container input[type='number'] {
  border: 2.5px solid ${gold};
  border-radius: 10px;
  outline: none !important;
  box-shadow: none !important;
  transition: border-color 0.2s, border-width 0.2s;
  color: ${gold};
  width: 100%;
}
.input-container input:focus, .input-container input[type='number']:focus {
  border: 3.5px solid ${goldDeep};
  outline: none !important;
  box-shadow: none !important;
  color: ${goldDeep};
}
input[type='radio'] {
  accent-color: ${gold};
  border: 2px solid ${gold};
  outline: none !important;
  box-shadow: none !important;
  width: 20px;
  height: 20px;
  background: #fff;
  appearance: none;
  -webkit-appearance: none;
  border-radius: 50%;
  position: relative;
  margin: 0;
  padding: 0;
  vertical-align: middle;
  transition: border-color 0.2s;
  display: inline-block;
}
input[type='radio']:checked { 
  background: radial-gradient(circle at center, ${gold} 60%, #fff 61%);
  border: 2.5px solid ${goldDeep};
  box-shadow: 0 0 0 2px #fff inset;
}
input[type='radio']:focus {
  outline: none !important;
  box-shadow: none !important;
  border: 2.5px solid ${goldDeep};
}
`;

if (typeof document !== 'undefined' && !document.getElementById('champagne-gold-style')) {
  const styleTag = document.createElement('style');
  styleTag.id = 'champagne-gold-style';
  styleTag.innerHTML = style;
  document.head.appendChild(styleTag);
}

export default function RsvpForm() {
  const [hasGuests, setHasGuests] = useState(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [designation, setDesignation] = useState("")
  const [guestCount, setGuestCount] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus("")
    try {
      const response = await fetch("https://aduraat60.com/rsvp.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          designation,
          guestCount: hasGuests ? guestCount : "0",
          message,
        }),
      })
      const text = await response.text()
      setStatus(text)
    } catch (err) {
      setStatus("Error: Could not send RSVP.")
    }
    setLoading(false)
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Name Field */}
      <div className="space-y-2">
        {/* <Label htmlFor="name" className="font-serif text-sm font-medium text-gray-800 uppercase tracking-wide">
          Full Name
        </Label> */}
        <div className="input-container">
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            className="font-serif border-gray-300 focus:border-amber-400 focus:ring-amber-400/20 rounded-lg h-12 px-4 bg-white/60 backdrop-blur-sm"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label className="label" htmlFor="name" id="label-name">
            <div className="text">Full Name</div>
          </label>
        </div>
      </div>


      {/* Designation Field */}
      <div className="space-y-2">
        {/* <Label htmlFor="designation" className="font-serif text-sm font-medium text-gray-800 uppercase tracking-wide">
          Title/Designation
        </Label> */}
        <div className="input-container">
          <Input
            id="designation"
            type="text"
            placeholder="Your title or designation"
            className="font-serif border-gray-300 focus:border-amber-400 focus:ring-amber-400/20 rounded-lg h-12 px-4 bg-white/60 backdrop-blur-sm"
            value={designation}
            onChange={e => setDesignation(e.target.value)}
          />
          <label className="label" htmlFor="designation" id="label-designation">
            <div className="text">Title/Designation</div>
          </label>
        </div>
      </div>

      {/* Guest Attendance Radio */}
      <div className="space-y-3">
        <Label className="font-serif text-sm font-medium" style={{ color: gold, fontSize: '14px', fontFamily: 'Segoe UI', textTransform: 'lowercase' }}>
          Will you be attending with a guest?
        </Label>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="guest-yes"
              name="guest-attendance"
              value="yes"
              className="h-4 w-4 text-[${gold}] focus:ring-[${gold}]/20"
              onChange={() => setHasGuests(true)}
              checked={hasGuests === true}
            />
            <label htmlFor="guest-yes" className="ml-2 font-serif" style={{ color: gold }}>
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="guest-no"
              name="guest-attendance"
              value="no"
              className="h-4 w-4 text-[${gold}] focus:ring-[${gold}]/20"
              onChange={() => setHasGuests(false)}
              checked={hasGuests === false}
            />
            <label htmlFor="guest-no" className="ml-2 font-serif" style={{ color: gold }}>
              No
            </label>
          </div>
        </div>
      </div>

      {/* Number of Guests - Conditional */}
      {hasGuests && (
        <div className="space-y-2 animate-fadeIn">
          <Label htmlFor="guest-count" className="font-serif text-sm font-medium text-gray-800 uppercase tracking-wide">
            If yes, how many?
          </Label>
          <Input
            id="guest-count"
            type="number"
            min="1"
            step="1"
            placeholder="Enter number of guests"
            className="font-serif border-gray-300 focus:border-amber-400 focus:ring-amber-400/20 rounded-lg h-12 px-4 bg-white/60 backdrop-blur-sm"
            value={guestCount}
            onChange={e => {
              // Only allow numbers
              const val = e.target.value;
              if (/^\d*$/.test(val)) setGuestCount(val);
            }}
            required
          />
        </div>
      )}


      {/* Submit Buttons */}
      <div className="space-y-3 pt-4">
        <Button
          type="submit"
          className="w-full text-white font-serif font-semibold text-lg h-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wide flex items-center justify-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(212 175 55), rgb(212 175 55))",
          }}
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <Loader2 className="animate-spin mr-2 h-5 w-5" />
              Sending...
            </span>
          ) : (
            "Accept with Pleasure"
          )}
        </Button>

        {status && <div className="text-center text-sm mt-2">{status}</div>}
      </div>
    </form>
  )
}
