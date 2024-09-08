import EventItem from "./event-item"

const EventsList = ({events}) => {
  return (
    <ul className='w-full p-4 grid grid-cols-1 lg:grid-cols-2 gap-4'>
      {events.map((event) => (
        <EventItem event={event} key={event.id} />
      ))}
    </ul>
  );
}

export default EventsList