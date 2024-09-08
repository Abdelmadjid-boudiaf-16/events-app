"use client";
import EventsList from "@/events/events-list";
import { getAllEvents } from "../../data/dummy-data";
import EventSearch from "@/events/event-search";
import { useRouter } from "next/navigation";
const EventsPage = () => {
  const allEvents = getAllEvents();

  const router = useRouter();

  const handleFindEvent = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <section className="flex items-center justify-center flex-col">
      <EventSearch onSearch={handleFindEvent} />
      <EventsList events={allEvents} />
    </section>
  );
};

export default EventsPage;
