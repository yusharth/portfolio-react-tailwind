  import React from 'react';
  import '../App.css'

  const Timeline = () => {
    return (
      <div>
      <div className="bg-gray-800 inset-0">
      
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-white grid grid-cols-4">
            <div className="relative border-l-4 border-white left-1/2">
              <span className="absolute h-9 w-9 top-5 -left-5 flex justify-center items-center rounded-full bg-white text-black text-2xl font-bold">            <img className='' src='https://www.qulabs.ai/asset/images/qulabs-ai_logo.png'/>
</span>
            </div>
            <div className="col-span-2 py-5">
            <div className="timeline-content">
              <div className="tc-left flex">
                <h5 className="text-2xl">Full Stack Django Developer Intern - QuLabs Software India</h5>
              </div>
              <ul className="list-disc m-5">
                <li>I learned a lot about ClassName Based Views and Django Rest Framework.</li>
                <li>Also got to discover multiple authentication ways in Django including OAuth2.</li>
                <li>Learnt playing around with serializers and JSon.</li>
                <li>Developing and maintaining web applications using Django and other related technologies.</li>
                <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.</li>
                <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
                <li>Participating in code reviews and providing constructive feedback to other developers.</li>
              </ul>
            </div>
            </div>
          </div>
          
          <div className="text-white grid grid-cols-4 h-12">
            <div className="relative border-l-4 md:border-b-4 border-white md:rounded-bl-3xl md:bottom-1/2 left-1/2 bottom-0"></div>
            <div className="md:visible invisible col-span-2 relative border-b-4 border-white bottom-1/2"></div>
            <div className="md:visible invisible relative border-t-4 border-r-4 rounded-tr-3xl border-white top-[calc(50%-4px)] right-1/2"></div>
          </div>
          
          <div className="text-white grid grid-cols-4">
            <div className="relative left-1/2 visible md:invisible border-l-4 border-white">
              <span className="absolute h-9 w-9 top-5 -left-5 flex justify-center items-center rounded-full bg-white text-black text-2xl font-bold"><img className='' src='https://www.qulabs.ai/asset/images/qulabs-ai_logo.png'/></span>
            </div>
            <div className="col-span-2 md:text-right py-5">
              <h5 className="text-2xl">Yashoda Hospitals</h5>
              <ul className="m-0 pl-5 text-right">
                <li className='relative'>I learned a lot about ClassName Based Views and Django Rest Framework. &#8226;</li>
                <li>Also got to discover multiple authentication ways in Django including OAuth2. &#8226;</li>
                <li>Learnt playing around with serializers and JSon.  &#8226;</li>
                <li>Developing and maintaining web applications using Django and other related &#8226; technologies. </li>
                <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.&#8226; </li>
                <li>Implementing responsive design and ensuring cross-browser compatibility. &#8226;</li>
                <li>Participating in code reviews and providing constructive feedback to other  &#8226; developers.</li>
              </ul>
            </div>
            <div className="md:visible invisible relative border-r-4 border-white right-1/2">
              <span className="absolute h-9 w-9 top-5 -right-5 flex justify-center items-center rounded-full bg-white text-black text-2xl font-bold">2</span>
            </div>
          </div>
          
          {/* <div className="text-white grid grid-cols-4 h-12">
            <div className="relative md:border-t-4 border-l-4 md:rounded-tl-3xl border-white top-0 md:top-[calc(50%-4px)] left-1/2"></div>
            <div className="md:visible invisible col-span-2 relative border-b-4 border-white bottom-1/2"></div>
            <div className="md:visible invisible relative border-r-4 border-b-4 border-white rounded-br-3xl border-img-blue bottom-1/2 right-1/2"></div>
          </div> */}
          
          {/* <div className="text-white grid grid-cols-4">
            <div className="relative border-l-4 border-white left-1/2">
              <span className="absolute h-9 w-9 top-5 -left-5 flex justify-center items-center rounded-full bg-white text-black text-2xl font-bold">3</span>
            </div>
            <div className="col-span-2 py-5">
              <h5 className="text-2xl">Title</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
            </div>
          </div> */}
          
        </div>
      
      </div>
      </div>
    )
  }

  export default Timeline