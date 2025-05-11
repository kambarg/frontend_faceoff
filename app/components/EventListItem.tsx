"use client";

import Link from 'next/link'

interface EventListItemProps {
  id: string
  title: string
  date: string
  description: string
}

export default function EventListItem({ id, title, date, description }: EventListItemProps) {
  return (
    <Link href={`/events/${id}`}>
      <div className="bg-zinc-900 hover:bg-zinc-800 transition-colors border-b border-zinc-800 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-400 line-clamp-2">{description}</p>
          </div>
          <div className="md:text-right">
            <p className="text-42-blue font-medium whitespace-nowrap">{date}</p>
          </div>
        </div>
      </div>
    </Link>
  )
} 