const data = [
  {
    id: "e1",
    title: "Coding for everyone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi eius beatae similique culpa labore at quod itaque magnam natus? Nobis excepturi quod ea eveniet qui illum harum quae suscipit?",
    location: "Alger's, Algeria",
    date: "2024-09-08",
    image: "/images/coding-event.jpg",
    isFeatured: true,
  },
  {
    id: "e2",
    title: "Networking",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi eius beatae similique culpa labore at quod itaque magnam natus? Nobis excepturi quod ea eveniet qui illum harum quae suscipit?",
    location: "Alger's, Algeria",
    date: "2024-09-08",
    image: "/images/networking-event.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "tech event",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi eius beatae similique culpa labore at quod itaque magnam natus? Nobis excepturi quod ea eveniet qui illum harum quae suscipit?",
    location: "Alger's, Algeria",
    date: "2025-05-13",
    image: "/images/tech-event.jpg",
    isFeatured: true,
  },
  {
    id: "e4",
    title: "gaming",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi eius beatae similique culpa labore at quod itaque magnam natus? Nobis excepturi quod ea eveniet qui illum harum quae suscipit?",
    location: "Alger's, Algeria",
    date: "2025-01-01",
    image: "/images/gaming-event.jpg",
    isFeatured: false,
  },
];

export const getFeaturedEvents = () => {
  return data.filter((event) => event.isFeatured);
};

export const getAllEvents = () => {
  return data;
};

export const getFilteredEvents = (dateFilter) => {
  const { year, month } = dateFilter;

  let filteredEvents = data.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};

export const getEventById = (eventId) => {
  return data.find((event) => event.id === eventId);
};
