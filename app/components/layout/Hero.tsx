import React from "react";
import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <div className='bg-base-200 mt-30'>
      <div className='flex px-5 md:flex-row flex-col items-center gap-10'>
        <div className=''>
          <h1 className='md:text-4xl font-bold md:text-start text-center'>
            Get more done with <span className='text-blue-700'>Chronos</span>
          </h1>
          <p className='py-3 text-muted-foreground'>
            The modern task management platform that helps teams organize, track
            and complete task efficiently.
          </p>
          <div className='flex items-center gap-4 py-2 justify-center md:justify-start'>
            <Button className='bg-blue-700 text-xs'>Try for Free</Button>
            <Button variant={"outline"} className='border text-xs'>
              See Features
            </Button>
          </div>

          <div className='flex items-center gap-2 py-4'>
            <div className='flex items-center gap-2'>
              <CheckCircle className="md:w-4 md:h-4 w-3 h-3" />
              <p className='text-xs text-muted-foreground'>
                No credit card required
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <CheckCircle className="md:w-4 md:h-4 w-3 h-3" />
              <p className='text-xs text-muted-foreground'>
                Free plan available
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <CheckCircle className="md:w-4 md:h-4 w-3 h-3" />
              <p className='text-xs text-muted-foreground'>Cancel anytime</p>
            </div>
          </div>
        </div>
        <div className=''>
          <img
            className='rounded-md md:w-[500px] w-[350px]'
            src='/Hero.jpg'
            alt='Hero image'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
