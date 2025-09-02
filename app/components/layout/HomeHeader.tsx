import { Clock, ListChecks, SquareCheckBigIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router";

const HomeHeader = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex gap-2'>
        <ListChecks className='w-6 h-6 bg-blue-500 text-white rounded-md' />
        <h4 className='font-bold'>Chronos</h4>
      </div>
      <div className='flex gap-4 items-center'>
        <Link to='/sign-in'>Sign In</Link>
        <Button size={"sm"} className='bg-blue-500 text-white'>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default HomeHeader;
