'use client';

import Image from 'next/image';
const imageUrls = [
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80', // 0
  'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&q=80', // 1
  'https://images.unsplash.com/photo-1605460375648-278bcbd579a6?w=800&q=80', // 2
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', // 3
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80', // 4 - Mountain landscape
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80', // 5
];

export default function GalleryPage() {
  return (
    <main className='container mx-auto'>
      <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4'>
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className='mb-4 break-inside-avoid rounded-lg overflow-hidden shadow-md cursor-pointer'
          >
            <Image
              src={url}
              alt={`Gallery image ${index + 1}`}
              width={800}
              height={600}
              layout='responsive'
              className='rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out'
              priority={index < 2}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
