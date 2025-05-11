import Header from '../../components/Header'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// Mock data (in a real app, this would come from an API)
const events = {
  "1": {
    title: "Coding Piscine March 2024",
    date: "March 15, 2024",
    description: "Join us for an intensive 4-week coding bootcamp where you'll learn the fundamentals of programming through peer-to-peer learning. The Piscine is a challenging but rewarding experience that will test your determination and ability to learn. Through our peer-to-peer learning methodology, you'll work on real projects while collaborating with fellow students.",
    location: "42 Abu Dhabi Campus",
    time: "9:00 AM - 5:00 PM",
  },
  "2": {
    title: "Tech Talk: AI in Education",
    date: "March 20, 2024",
    description: "Industry experts discuss the future of AI in education and its impact on learning methodologies. Join us for an insightful discussion on how artificial intelligence is transforming education. Learn about the latest trends, challenges, and opportunities in AI-powered learning systems.",
    location: "42 Abu Dhabi Auditorium",
    time: "2:00 PM - 4:00 PM",
  },
  "3": {
    title: "Hackathon: Sustainable Tech",
    date: "April 5, 2024",
    description: "A 48-hour hackathon focused on developing sustainable technology solutions for environmental challenges. Work with teams to create innovative solutions that address real-world environmental problems. Mentors will be available throughout the event to provide guidance and support.",
    location: "42 Abu Dhabi Innovation Lab",
    time: "Starts at 9:00 AM",
  },
  "4": {
    title: "Web Development Workshop",
    date: "April 15, 2024",
    description: "Learn modern web development techniques using React, Next.js, and other cutting-edge technologies. This hands-on workshop will cover frontend development best practices, responsive design, and modern JavaScript frameworks. Perfect for beginners and intermediate developers looking to expand their skills.",
    location: "42 Abu Dhabi Learning Hub",
    time: "10:00 AM - 4:00 PM",
  },
  "5": {
    title: "Cybersecurity Fundamentals",
    date: "May 1, 2024",
    description: "An introductory workshop covering essential cybersecurity concepts, best practices, and hands-on exercises. Learn about common security threats, encryption basics, and how to protect systems from cyber attacks. This workshop includes practical demonstrations and real-world case studies.",
    location: "42 Abu Dhabi Security Lab",
    time: "1:00 PM - 5:00 PM",
  }
} as const;

function getSortedEventIds() {
  return Object.entries(events)
    .sort(([, a], [, b]) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map(([id]) => id);
}

function getNavigation(currentId: string) {
  const sortedIds = getSortedEventIds();
  const currentIndex = sortedIds.indexOf(currentId);
  
  return {
    prevId: currentIndex > 0 ? sortedIds[currentIndex - 1] : null,
    nextId: currentIndex < sortedIds.length - 1 ? sortedIds[currentIndex + 1] : null,
  };
}

export default function EventPage({ params }: { params: { id: string } }) {
  const event = events[params.id as keyof typeof events];
  
  if (!event) {
    notFound();
  }

  const { prevId, nextId } = getNavigation(params.id);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-3xl mx-auto bg-zinc-900 rounded-lg shadow-xl p-8 border border-zinc-800">
          <h1 className="text-4xl font-bold text-white mb-4">{event.title}</h1>
          <div className="flex items-center space-x-4 text-42-blue mb-6">
            <p className="font-medium">{event.date}</p>
            <span className="text-gray-500">•</span>
            <p>{event.time}</p>
            <span className="text-gray-500">•</span>
            <p>{event.location}</p>
          </div>
          <div className="prose max-w-none mb-8">
            <p className="text-gray-300 text-lg leading-relaxed">{event.description}</p>
          </div>
          <div className="flex justify-between items-center pt-6 border-t border-zinc-800">
            {prevId ? (
              <Link 
                href={`/events/${prevId}`}
                className="flex items-center text-42-blue hover:text-opacity-80 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Previous Event</span>
              </Link>
            ) : (
              <div />
            )}
            {nextId ? (
              <Link 
                href={`/events/${nextId}`}
                className="flex items-center text-42-blue hover:text-opacity-80 transition-colors"
              >
                <span>Next Event</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </article>
      </main>
    </div>
  );
} 