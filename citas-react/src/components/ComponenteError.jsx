import React from 'react'

function Error({children}) {
  return (
    <div>
        <div className="bg-red-800 text-white text-center p-2 uppercase font-bold mb-3 rounded-md">
          {children} 
        </div>
    </div>
  )
}

export default Error
