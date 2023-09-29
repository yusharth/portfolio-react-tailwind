import React from 'react';
import { Tweet } from 'react-tweet';

export default function Tweets() {
  return (
    <div className="bg-white py-10 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="flex h-11/12 space-y-6 sm:mt-12 sm:space-y-8 md:mt-16 lg:mt-20">
          <Tweet id="1705095289181450293" className="w-1/3 m-auto p-4 border border-gray-200 rounded-lg shadow-md" />
          <Tweet id="1707445928649753014" className="w-1/3 m-auto p-4 border border-gray-200 rounded-lg shadow-md" />
          <Tweet id="1706723113357262952" className="w-1/3 m-auto p-4 border border-gray-200 rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
}
