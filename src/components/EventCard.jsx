import React from 'react';
import { MapPin, PartyPopper, ExternalLink } from 'lucide-react';
import { colors } from '../constants/theme';

const EventCard = ({ event }) => {
  const iconColor = colors.neonPink;

  return (
    <div className="p-8 rounded-3xl bg-zinc-900 border-l-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6" style={{ borderLeftColor: iconColor }}>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <PartyPopper className="w-6 h-6" style={{ color: iconColor }} />
          <span className="font-black text-2xl uppercase tracking-tight">{event.date} @ {event.time}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
        <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
          <MapPin className="w-4 h-4" /> {event.location} — {event.address}
        </div>
      </div>
      <a
        href={event.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-auto px-6 py-3 bg-white text-black font-black rounded-xl hover:bg-gray-200 transition-colors uppercase text-sm inline-flex items-center justify-center gap-2"
      >
        More Info <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
};

export default EventCard;
