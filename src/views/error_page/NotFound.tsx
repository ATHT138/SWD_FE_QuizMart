import { Link } from 'lucide-react';
import React from 'react'

const NotFound = () => {
  return (
<div className="w-full min-h-screen flex items-center justify-center">
  <div className="space-y-3">
    <h1 className="text-red-500 text-9xl uppercase">
      Not Found
    </h1>
    <Link to="/">
      <button className="border border-current py-2 px-4">
        Home Page
      </button>
    </Link>
  </div>
</div>

  )
}

export default NotFound;