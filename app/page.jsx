import {getFeaturedEvents } from '../data/dummy-data'

import EventsList from "@/events/events-list";

export default function Home() {
const featuredEvents = getFeaturedEvents()
  return (
    <section>
      <EventsList events={featuredEvents} />
    </section>
  );
}
