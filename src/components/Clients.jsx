import React from 'react'

const Clients = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
      
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800">
            <span className="text-blue-500 font-bold">400+</span> Products Developed For{' '}
            <span className="text-blue-500 font-bold">300+</span> Customers Across{' '}
            <span className="text-blue-500 font-bold">120+</span> Countries.
          </h2>
        </div>

        <div className="space-y-12">
          <div className="flex justify-center items-center space-x-8 md:space-x-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded transform rotate-45 flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded transform -rotate-45"></div>
              </div>
              <span className="text-2xl font-bold text-gray-700">MERIDIO</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex flex-col space-y-1">
                <div className="w-6 h-1 bg-blue-500 rounded"></div>
                <div className="w-4 h-1 bg-blue-500 rounded"></div>
                <div className="w-5 h-1 bg-blue-500 rounded"></div>
              </div>
              <span className="text-2xl font-bold text-gray-700">Column</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-2xl font-bold text-blue-500">GlobalReader</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-8 h-8 bg-black rounded-sm transform rotate-12"></div>
                <div className="absolute inset-0 w-8 h-8 bg-red-600 rounded-sm transform -rotate-12"></div>
              </div>
              <div className="text-black">
                <div className="text-sm font-bold leading-none">SHIELD</div>
                <div className="text-sm font-bold leading-none">REPUBLIC</div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-2xl font-bold text-gray-700">Stakester</span>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-8 md:space-x-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded-full"></div>
              </div>
              <span className="text-2xl font-bold text-gray-700">ANAL<span className="text-blue-500">O</span>G</span>
            </div>

            <div className="text-2xl font-light text-gray-700">
              freshprep
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-6 bg-blue-600 rounded-sm"></div>
                <div className="w-2 h-6 bg-red-500 rounded-sm"></div>
                <div className="w-2 h-6 bg-yellow-500 rounded-sm"></div>
              </div>
              <span className="text-2xl font-bold text-gray-700">NYMCARD</span>
            </div>

            <div className="text-2xl font-bold text-blue-400">
              artefy
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-2xl font-bold text-gray-700">Stitch</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients