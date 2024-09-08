'use client'
import { useParams } from 'next/navigation';
import {getEventById} from '/data/dummy-data.js'
import { IoLocationOutline } from 'react-icons/io5';
import { CiCalendar } from 'react-icons/ci';
import Image from 'next/image';

const EventDetails = () => {
    const params = useParams()
    
    const eventId = params.eventId
    const eventDetails = getEventById(eventId)
    const humanReadableDate = new Date(eventDetails.date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return (
      <section>
        <div className="flex flex-col md:flex-row w-full gap-4 border border-gray-200/80 shadow-lg rounded-lg overflow-hidden bg-gradient-to-t from-gray-300/35 via-gray-300/30 to-gray-300/25">
          <div className="w-full md:w-2/5 h-full">
            <Image
              src={eventDetails.image}
              alt={eventDetails.title}
              width={800}
              height={600}
              className="object-cover w-full h-full "
              quality={100}
            />
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <h1 className="text-4xl text-green-500 font-bold">{eventDetails.title}</h1>
            <div className="text-gray-500 font-semibold text-xl italic flex items-center gap-3">
              <IoLocationOutline />
              <span>{eventDetails.location}</span>
            </div>
            <div className="text-gray-700 text-lg flex items-center gap-3">
              <CiCalendar /> <span>{humanReadableDate}</span>
            </div>
                    <div className='mb-4'>
                        <p className='text-teal-900/60'>
                            {eventDetails.description}
                        </p>
            </div>
          </div>
        </div>
      </section>
    );
    
};

export default EventDetails;
