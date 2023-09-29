import React from 'react'

const Timeline = () => {
  return (
    <div>
    <div class="bg-gray-800 inset-0">
    
      <div class="mx-5 px-5">
        
        <div class="text-white grid grid-cols-4">
          <div class="relative border-l-4 border-white left-1/2">
            <span class="absolute h-9 w-9 top-5 -left-5 flex justify-center items-center rounded-full bg-white text-black text-2xl font-bold">1</span>
          </div>
          <div class="col-span-2 py-5">
            <h5 class="text-2xl">Full Stack Django Developer Intern - QuLabs Software India</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
          </div>
        </div>
        
        <div class="text-white grid grid-cols-4 h-12">
          <div class="relative border-l-4 md:border-b-4 border-white md:rounded-bl-3xl md:bottom-1/2 left-1/2 bottom-0"></div>
          <div class="md:visible invisible col-span-2 relative border-b-4 border-white bottom-1/2"></div>
          <div class="md:visible invisible relative border-t-4 border-r-4 rounded-tr-3xl border-white top-[calc(50%-4px)] right-1/2"></div>
        </div>
        
        <div class="text-white grid grid-cols-4">
          <div class="relative left-1/2 visible md:invisible border-l-4 border-white">
            <span class="absolute h-9 w-9 top-5 -left-5 flex justify-center items-center rounded-full bg-white text-black text-2xl font-bold">2</span>
          </div>
          <div class="col-span-2 md:text-right py-5">
            <h5 class="text-2xl">Title</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
          </div>
          <div class="md:visible invisible relative border-r-4 border-white right-1/2">
            <span class="absolute h-9 w-9 top-5 -right-5 flex justify-center items-center rounded-full bg-white text-black text-2xl font-bold">2</span>
          </div>
        </div>
        
        <div class="text-white grid grid-cols-4 h-12">
          <div class="relative md:border-t-4 border-l-4 md:rounded-tl-3xl border-white top-0 md:top-[calc(50%-4px)] left-1/2"></div>
          <div class="md:visible invisible col-span-2 relative border-b-4 border-white bottom-1/2"></div>
          <div class="md:visible invisible relative border-r-4 border-b-4 border-white rounded-br-3xl border-img-blue bottom-1/2 right-1/2"></div>
        </div>
        
        <div class="text-white grid grid-cols-4">
          <div class="relative border-l-4 border-white left-1/2">
            <span class="absolute h-9 w-9 top-5 -left-5 flex justify-center items-center rounded-full bg-white text-black text-2xl font-bold">3</span>
          </div>
          <div class="col-span-2 py-5">
            <h5 class="text-2xl">Title</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
          </div>
        </div>
        
      </div>
    
    </div>
    </div>
  )
}

export default Timeline