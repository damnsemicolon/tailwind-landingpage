import React from "react";
import Laptop from "../assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full bg-[#e7e7e7] py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className='w-[500px] mx-auto my-4 bg-[#e7e7e7]' src={Laptop} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#008adf] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi laudantium provident dolor blanditiis unde nisi quae possimus impedit laboriosam doloribus laborum rem sapiente voluptatum corporis quasi tenetur totam eos, ratione distinctio consectetur, enim alias saepe doloremque. Reiciendis ducimus impedit expedita consectetur ipsa at assumenda tenetur deserunt architecto, beatae earum.
          </p>
          <button className='bg-[#000700] text-[#008adf] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
