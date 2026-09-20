import React from 'react';

export const metadata = {
  title: 'Advertising',
  description: 'MangaRead Advertising Page',
};

export default function AadsPage() {
  return (
    <div className="min-h-[70vh] pt-24 px-4 flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-4 text-white">MangaRead Advertising</h1>
      <p className="text-gray-400 max-w-2xl mx-auto">
        This space is reserved for our AADS banner campaigns. Pop ads are explicitly disabled on this page to ensure a clean viewing experience.
      </p>
    </div>
  );
}
