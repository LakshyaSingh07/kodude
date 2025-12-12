import React from 'react';

export default function Stats() {
  const stats = [
    { value: '78%', label: 'Client Satisfaction', color: 'from-cyan-500 to-blue-500' },
    { value: '54+', label: 'Projects Completed', color: 'from-blue-500 to-purple-500' },
    { value: '18.2+', label: 'Years Experience', color: 'from-purple-500 to-pink-500' },
    { value: '8+', label: 'Team Members', color: 'from-pink-500 to-red-500' },
  ];

  return (
    <div className="px-6 md:px-12 py-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-500 text-sm uppercase tracking-wider">Our Impact</span>
          <h2 className="text-3xl md:text-5xl text-white mt-3">
            Transforming Ideas Into Digital Reality
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We've helped countless businesses achieve their digital goals through innovative solutions and creative excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-linear-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center hover:scale-105 transition-transform"
            >
              <div className={`text-4xl md:text-5xl bg-linear-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
