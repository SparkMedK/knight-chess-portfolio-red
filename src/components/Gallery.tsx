
import React from 'react';
import KnightLogo from './KnightLogo';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1611195974226-a6a9be98cb4e",
      alt: "Tournament play",
    },
    {
      src: "https://images.unsplash.com/photo-1543092587-d8b8feaf362b",
      alt: "Chess training session",
    },
    {
      src: "https://images.unsplash.com/photo-1580541631950-7282082b03fe",
      alt: "Award ceremony",
    },
    {
      src: "https://images.unsplash.com/photo-1560174038-da43ac74f01b",
      alt: "Chess analysis",
    },
    {
      src: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b",
      alt: "International tournament",
    },
    {
      src: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793",
      alt: "Master class",
    },
  ];
  
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold">Gallery</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden rounded-lg relative group cursor-pointer"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 flex justify-center">
          <Button variant="outline" className="gap-2">
            View Full Gallery
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
