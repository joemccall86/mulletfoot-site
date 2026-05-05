import React from 'react';
import { MapPin, Beer, Coffee } from 'lucide-react';
import { colors } from '../constants/theme';

const ScheduleCard = ({ item, variant = 'web' }) => {
  const isGreen = item.type === 'green';
  const iconColor = isGreen ? colors.neonGreen : colors.neonBlue;

  if (variant === 'flyer') {
    const Icon = isGreen ? Beer : Coffee;
    return (
      <div className={`run-card ${item.type}`} style={{ borderLeftColor: iconColor }}>
        <div className="run-content">
          <div className="run-day" style={{ color: iconColor }}>
            <Icon className="run-icon" size={16} />
            {item.day} @ {item.time}
          </div>
          <div className="run-location">{item.location}</div>
          <div className="run-address">{item.address}</div>
          <span className={`run-reward ${item.type}`}>{item.reward}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 rounded-3xl bg-zinc-900 border-l-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6" style={{ borderLeftColor: iconColor }}>
      <div>
        <div className="flex items-center gap-2 mb-2">
          {isGreen ? <Beer className="w-6 h-6" style={{ color: colors.neonGreen }} /> : <Coffee className="w-6 h-6" style={{ color: colors.neonBlue }} />}
          <span className="font-black text-2xl uppercase tracking-tight">{item.day} @ {item.time}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{item.location}</h3>
        <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
          <MapPin className="w-4 h-4" /> {item.address}
        </div>
        <div className="px-3 py-1 rounded-full bg-zinc-800 text-xs font-bold inline-block" style={{ color: iconColor }}>
          {item.reward}
        </div>
      </div>
       <button
         className="w-full md:w-auto px-6 py-3 bg-white text-black font-black rounded-xl hover:bg-gray-200 transition-colors uppercase text-sm cursor-pointer"
         onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(item.address)}`, '_blank')}
       >
         Get Directions
       </button>
    </div>
  );
};

export default ScheduleCard;
