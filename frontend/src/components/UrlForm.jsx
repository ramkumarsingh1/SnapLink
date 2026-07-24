import React from 'react'
import Button from './Button'
export default function UrlForm({ url, setUrl, loading, handleShorten }) {
  return (
    <div className="mt-6 flex flex-col gap-4">
      <input
        type="text"
        className="input input-success w-full"
        placeholder="Enter long URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      
      <Button 
        children={loading ? "Shortening.." : "Shorten"}
        onClick={handleShorten}
        className="btn btn-primary w-full sm:w-auto"
        disabled={loading}
      />
    </div>
  )
}
