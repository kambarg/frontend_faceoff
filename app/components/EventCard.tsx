import Link from 'next/link'

interface EventCardProps {
  id: string
  title: string
  date: string
  description: string
}

export default function EventCard({ id, title, date, description }: EventCardProps) {
  return (
    <Link href={`/events/${id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 cursor-pointer border border-gray-100">
        <h3 className="text-xl font-semibold text-42-black mb-2">{title}</h3>
        <p className="text-42-blue font-medium mb-3">{date}</p>
        <p className="text-gray-600 line-clamp-2">{description}</p>
      </div>
    </Link>
  )
} 