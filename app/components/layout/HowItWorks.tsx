import { CalendarCheck, Lock, Send, Signal, Users } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className='py-10 px-2 bg-base-200 flex flex-col items-center justify-center'>
      <h1 className='bg-gray-200 text-sm py-1 px-1 rounded-md text-muted-foreground/105'>
        How It Works
      </h1>

      <h3 className='md:text-3xl text-md font-bold py-4'>
        Simple Process, powerful results
      </h3>
      <p className='text-muted-foreground -mt-4 md:text-[15px] text-sm  text-center'>
        Get started in minutes and see improved team productivity
      </p>

      <div className='flex items-center justify-between mt-10'>
        <div className='md:flex gap-4'>
          <div className='flex flex-col items-center gap-4'>
            <div className='w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center'>
              <Lock className='w-5 h-5' />
            </div>
            <h1 className='font-bold'>Create an Account</h1>
            <p className='text-center text-muted-foreground text-sm'>
              Sign up for free and setup your first workspace in seconds
            </p>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <div className='mt-4 md:mt-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center'>
              <Users className='w-5 h-5' />
            </div>
            <h1 className='font-bold'>Invite your team</h1>
            <p className='text-center text-muted-foreground text-sm'>
             Add your team members and start collaborating right away
            </p>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <div className='mt-4 md:mt-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center'>
              <Send  className='w-5 h-5' />
            </div>
            <h1 className='font-bold'>Get things done</h1>
            <p className='text-center text-muted-foreground text-sm'>
              Create projects, assign tasks, and track progress in real time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
