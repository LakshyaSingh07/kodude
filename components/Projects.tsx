import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1622131815379-476bbefa631c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzY1NDMxMzgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-blue-500/80 to-purple-500/80'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Design',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1NDE2MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-cyan-500/80 to-blue-500/80'
    },
    {
      title: 'Interior Design Portfolio',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1583329550487-0fa300a4cd1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY1NDMxNTcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-purple-500/80 to-pink-500/80'
    },
    {
      title: 'Creative Agency Website',
      category: 'Brand Identity',
      image: 'https://images.unsplash.com/photo-1554941829-202a0b2403b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpb3xlbnwxfHx8fDE3NjU0NDg3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-orange-500/80 to-red-500/80'
    },
    {
      title: 'Digital Art Platform',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1658806277165-af0b60eb6733?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0d29ya3xlbnwxfHx8fDE3NjUzNjY1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-pink-500/80 to-purple-500/80'
    },
    {
      title: 'SaaS Dashboard',
      category: 'Product Design',
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjUzODA0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-teal-500/80 to-green-500/80'
    },
  ];

  return (
    <div className="px-6 md:px-12 py-20" id='work'>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-500 text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl md:text-5xl text-white mt-3">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore our latest work and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-4/3 cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-linear-to-t ${project.gradient} opacity-60 group-hover:opacity-80 transition-opacity`}></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-white/90 text-sm mb-2">{project.category}</span>
                <h3 className="text-white text-xl mb-2">{project.title}</h3>
                <div className="flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm mr-2">View Project</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="border border-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors inline-flex items-center gap-2">
            View All Projects <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
