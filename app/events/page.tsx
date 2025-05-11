import Header from '../components/Header'
import EventListItem from '../components/EventListItem'

// Mock data for all events (in a real app, this would come from an API)
const allEvents = [
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
  {
    id: "4",
    title: "Web Development Workshop",
    date: "April 15, 2024",
    description: "Learn modern web development techniques using React, Next.js, and other cutting-edge technologies.",
  },
  {
    id: "5",
    title: "Cybersecurity Fundamentals",
    date: "May 1, 2024",
    description: "An introductory workshop covering essential cybersecurity concepts, best practices, and hands-on exercises.",
  }
] as const;

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">All Events</h1>
          <div className="bg-zinc-900 rounded-lg shadow-xl overflow-hidden border border-zinc-800">
            {allEvents.map((event) => (
              <EventListItem
                key={event.id}
                id={event.id}
                title={event.title}
                date={event.date}
                description={event.description}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 