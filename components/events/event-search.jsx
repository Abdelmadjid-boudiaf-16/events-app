'use client'

import Button from "@/ui/button";
import { useRef } from "react";



const EventSearch = ({onSearch}) => {
  const yearRef = useRef();
    const monthRef = useRef();
    
    const handelSubmit = (e) => {
      e.preventDefault();
        const selectedYear = yearRef.current.value
        const selectedMonth = monthRef.current.value

        onSearch(selectedYear, selectedMonth)
    };
  return (
    <form className="w-full md:w-4/5 lg:w-3/4 xl:w-2/4 px-10 py-3 flex flex-col lg:flex-row gap-5 items-center justify-center bg-teal-50 border border-gray-500/60 rounded-lg shadow-lg " onSubmit={handelSubmit}>
      <div className="w-full flex items-center justify-center  gap-5">
        <div className="flex items-center justify-start gap-2">
          <label htmlFor="year" className="text-md lg:text-lg text-teal-950/80">
            Year
          </label>
          <select
            id="year"
            className="outline-none bg-teal-300/40 px-4 py-1 rounded-md"
            ref={yearRef}
          >
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
        <div className="flex items-center justify-start gap-2">
          <label htmlFor="year" className="text-md lg:text-lg text-teal-950/80">
            month
          </label>
          <select
            id="month"
            className="outline-none bg-teal-300/40 px-4 py-1 rounded-md"
            ref={monthRef}
          >
            <option value="1">january</option>
            <option value="2">february</option>
            <option value="3">march</option>
            <option value="4">april</option>
            <option value="5">may</option>
            <option value="6">june</option>
            <option value="7">july</option>
            <option value="8">august</option>
            <option value="9">september</option>
            <option value="10">october</option>
            <option value="11">november</option>
            <option value="12">december</option>
          </select>
        </div>
      </div>
      <div>
        <Button>Find Events</Button>
      </div>
    </form>
  );
};

export default EventSearch;
