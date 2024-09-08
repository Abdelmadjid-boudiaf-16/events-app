import Button from "@/ui/button";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
const EventItem = ({ event }) => {
  const humanReadableDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <li className="flex flex-col md:flex-row w-full gap-4 border border-gray-200/80 shadow-lg rounded-lg overflow-hidden bg-gradient-to-t from-gray-300/35 via-gray-300/30 to-gray-300/25">
      <div className="w-full md:w-2/5 h-full">
        <Image
          src={event.image}
          alt={event.title}
          width={800}
          height={600}
          className="object-cover w-full h-full "
          quality={100}
          priority
        />
      </div>
      <div className="flex-1 flex flex-col gap-5 pl-3">
        <h1 className="text-4xl text-green-500 font-bold">{event.title}</h1>
        <div className="text-gray-500 font-semibold text-xl italic flex items-center gap-3">
          <IoLocationOutline />
          <span>{event.location}</span>
        </div>
        <div className="text-gray-700 text-lg flex items-center gap-3">
          <CiCalendar /> <span>{humanReadableDate}</span>
        </div>
        <div className="flex items-end justify-end flex-1 m-2">
          <Button link={`/events/${event.id}`}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
