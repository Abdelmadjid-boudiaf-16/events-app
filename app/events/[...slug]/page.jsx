"use client";

import { useParams } from "next/navigation";

import { getFilteredEvents } from "../../../data/dummy-data";
import EventsList from "@/events/events-list";
import Button from "@/ui/button";

const FilteredEvents = () => {
  const params = useParams();

  const filteredData = params.slug;

  const yearFiltered = filteredData[0];
  const monthFiltered = filteredData[1];

  const numYear = +yearFiltered;
  const numMonth = +monthFiltered;

  if (!filteredData)
    return (
      <div className="w-full flex items-center justify-center">
        {" "}
        <p className="text-lg bg-teal-300 p-8 rounded-xl">Loading..</p>
      </div>
    );

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2024 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <div className="w-full flex items-center justify-center flex-col gap-4">
        <p className="text-lg bg-teal-300 p-8 rounded-xl">Invalid filter. please adjust your values!</p>
        <Button link="/events">All Events</Button>
      </div>
    );
  }
  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0)
    return (
      <div className="w-full flex items-center justify-center flex-col gap-4">
        {" "}
        <p className="text-lg bg-teal-300 p-8 rounded-xl">
          No events found with chosen filter!
        </p>
        <Button link="/events">All Events</Button>
      </div>
    );

  return (
    <div>
      <EventsList events={filteredEvents} />
    </div>
  );
};

export default FilteredEvents;
