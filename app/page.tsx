"use client";

import Header from './components/Header'
import EventCard from './components/EventCard'

// Mock data for events (in a real app, this would come from an API)
const upcomingEvents = [
  {
    id: "1",
    title: "Coding Piscine March 2024",
    date: "March 15, 2024",
    description: "Join us for an intensive 4-week coding bootcamp where you'll learn the fundamentals of programming through peer-to-peer learning.",
  },
  {
    id: "2",
    title: "Tech Talk: AI in Education",
    date: "March 20, 2024",
    description: "Industry experts discuss the future of AI in education and its impact on learning methodologies.",
  },
  {
    id: "3",
    title: "Hackathon: Sustainable Tech",
    date: "April 5, 2024",
    description: "A 48-hour hackathon focused on developing sustainable technology solutions for environmental challenges.",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              description={event.description}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/events"
            className="inline-block px-6 py-3 bg-42-blue text-white rounded-lg hover:bg-opacity-90 transition-colors"
          >
            View All Events
          </a>
        </div>
      </main>
    </div>
  );
} 