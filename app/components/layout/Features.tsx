import { CalendarCheck, Signal, Users } from "lucide-react";

const Features = () => {
  return (
    <div className='py-75 px-2 bg-base-200 flex flex-col items-center justify-center'>
      <h1 className='bg-gray-200 text-sm py-1 px-1 rounded-md text-muted-foreground/105'>
        Our Features
      </h1>

      <h3 className='md:text-3xl text-md font-bold py-4'>
        Everything you need to manage tasks effectively
      </h3>
      <p className='text-muted-foreground -mt-4 md:text-[15px] text-sm  text-center'>
        Our powerful features help teams stay organized and deliver projects on
        time
      </p>

      <div className='flex items-center justify-between mt-10'>
        <div className='md:flex gap-4'>
          <div className='flex flex-col items-center gap-4'>
            <div className='w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center'>
              <Users className='w-5 h-5' />
            </div>
            <h1 className='font-bold'>Team Collaboration</h1>
            <p className='text-center text-muted-foreground text-sm'>
              Work together seamlessly with your team in shared workspaces with
              real-time updates
            </p>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <div className='mt-4 md:mt-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center'>
              <CalendarCheck className='w-5 h-5' />
            </div>
            <h1 className='font-bold'>Task Management</h1>
            <p className='text-center text-muted-foreground text-sm'>
              Organize tasks with priorities, due dates,comments and track
              progress visually
            </p>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <div className='mt-4 md:mt-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center'>
              <Signal className='w-5 h-5' />
            </div>
            <h1 className='font-bold'>Progress Tracking</h1>
            <p className='text-center text-muted-foreground text-sm'>
              Visualize project progress with beautiful charts and get insights
              into team productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
