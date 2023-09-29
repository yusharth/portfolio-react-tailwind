import React from 'react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

const features = [
  {
    name: 'Backend Developer.',
    description:
      'A skilled software developer with experience in Python backend development using frameworks such as Flask and Django.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Data Science Enthusiast.',
    description: 'With a background in creating efficient data science tools using the pandas library and experience in building robust backends with Django REST framework, I bring a diverse skill set to every project. ',
    icon: LockClosedIcon,
  },
  {
    name: 'Avid Learner.',
    description: " I'm passionate about learning and recently ventured into React to expand my horizons in web-development. Explore my website to learn more about my work and how I can bring innovative solutions to your projects.",
    icon: ServerIcon,
  },
]

export default function Hero() {
  return (
    <div className="overflow-hidden bg-[#F7F4F1] py-24 sm:py-30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Hello!</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Name is Yusharth Singh!</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                I love developing cutting-edge data science websites and innovative web tools. 
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://pbs.twimg.com/profile_images/1704138874480713728/doeVjrXy_400x400.jpg"
            alt="Product screenshot"
            className="w-[34rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
            width={560}
            height={731}
          />
        </div>
      </div>
      <svg
  className="animate-bounce w-6 h-6 mt-20 m-auto"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  style={{ cursor: 'pointer' }} // Add this style for hover effect
  src="#Projects"
>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
</svg>

    </div>
  )
}