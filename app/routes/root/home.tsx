import React from "react";
import type { Route } from "../../+types/root";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Link } from "react-router";
import Header from "@/components/layout/Header";
import HomeHeader from "@/components/layout/HomeHeader";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "taskHub" },
    { name: "description", content: "Welcome to Chronos" },
  ];
}
const home = () => {
  return (
    <div className='max-w-4xl mx-auto mt-2'>
      <HomeHeader />
      {/* <Link to='/sign-in'>
        <Button className='bg-blue-500 text-white'>Login</Button>
      </Link>
      <Link to='/sign-up'>
        <Button variant={"outline"} className='bg-blue-500 text-white'>
          Sign Up
        </Button>
      </Link> */}
    </div>
  );
};

export default home;
