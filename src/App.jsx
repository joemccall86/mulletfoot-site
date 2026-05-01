import React, { useState, useEffect } from 'react';
import logo from './assets/logo.svg';
import logoNoText from './assets/logo_no_text.svg';
import { Calendar, MapPin, Beer, Coffee, Users, Instagram, Facebook, Twitter, CheckCircle, Dog, Baby, Footprints, ExternalLink, ChevronRight } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  // Theme colors based on Logo
  const colors = {
    neonGreen: '#39FF14',
    neonPink: '#FF6AD5',
    neonBlue: '#00D4FF',
    darkBg: '#0D0D0D',
    cardBg: '#1A1A1A'
  };

  const schedule = [
    {
      day: 'Thursdays',
      time: '6:30 PM',
      location: 'Celery City Craft',
      address: '114 S Palmetto Ave, Sanford, FL',
      vibe: 'Miles n Mugs',
      reward: 'Free drink with completed run!',
      icon: <Beer className="w-6 h-6" style={{ color: colors.neonGreen }} />,
      color: colors.neonGreen
    },
    {
      day: 'Sundays',
      time: '6:30 AM',
      location: 'Foxtail Coffee',
      address: '201 Sanford Ave, Sanford, FL 32771',
      vibe: 'Morning Miles',
      reward: 'Coffee & Community',
      icon: <Coffee className="w-6 h-6" style={{ color: colors.neonBlue }} />,
      color: colors.neonBlue
    }
  ];

  const races = [
    { name: "Sanford Love Your Shorts 5K", date: "Feb 15, 2024", location: "Sanford, FL" },
    { name: "Best Damn Race Orlando", date: "Mar 2, 2024", location: "Orlando, FL" },
    { name: "Zoolu 5K / 10K", date: "Mar 23, 2024", location: "Sanford, FL" },
    { name: "Winter Park 10k", date: "Mar 30, 2024", location: "Winter Park, FL" }
  ];

  const c25kProgram = [
    { week: 1, mon: "Rest", tue: "Run 2 min, Walk 4 min (x5)", wed: "Rest", thu: "Run 2 min, Walk 4 min (x5)", fri: "Rest", sat: "Run 2 min, Walk 4 min (x5)", sun: "30 min Walk" },
    { week: 2, mon: "Rest", tue: "Run 3 min, Walk 3 min (x5)", wed: "Rest", thu: "Run 3 min, Walk 3 min (x5)", fri: "Rest", sat: "Run 3 min, Walk 3 min (x5)", sun: "30 min Walk" },
    { week: 3, mon: "Rest", tue: "Run 5 min, Walk 2.5 min (x4)", wed: "Rest", thu: "Run 5 min, Walk 2.5 min (x4)", fri: "Rest", sat: "Run 5 min, Walk 2.5 min (x4)", sun: "30 min Walk" },
    { week: 4, mon: "Rest", tue: "Run 7 min, Walk 2 min (x3)", wed: "Rest", thu: "Run 7 min, Walk 2 min (x3)", fri: "Rest", sat: "Run 7 min, Walk 2 min (x3)", sun: "30 min Walk" },
    { week: 5, mon: "Rest", tue: "Run 8 min, Walk 2 min (x3)", wed: "Rest", thu: "Run 8 min, Walk 2 min (x3)", fri: "Rest", sat: "Run 8 min, Walk 2 min (x3)", sun: "30 min Walk" },
    { week: 6, mon: "Rest", tue: "Run 9 min, Walk 2 min (x3)", wed: "Rest", thu: "Run 9 min, Walk 2 min (x3)", fri: "Rest", sat: "Run 9 min, Walk 2 min (x3)", sun: "30 min Walk" },
    { week: 7, mon: "Rest", tue: "Run 11 min, Walk 1.5 min (x3)", wed: "Rest", thu: "Run 11 min, Walk 1.5 min (x3)", fri: "Rest", sat: "Run 11 min, Walk 1.5 min (x3)", sun: "30 min Walk" },
    { week: 8, mon: "Rest", tue: "Run 13 min, Walk 2 min (x2)", wed: "Rest", thu: "Run 13 min, Walk 2 min (x2)", fri: "Rest", sat: "Run 13 min, Walk 2 min (x2)", sun: "30 min Walk" },
    { week: 9, mon: "Rest", tue: "Run 15 min, Walk 1 min (x2)", wed: "Rest", thu: "Run 15 min, Walk 1 min (x2)", fri: "Rest", sat: "Run 15 min, Walk 1 min (x2)", sun: "30 min Walk" },
    { week: 10, mon: "Rest", tue: "Run 20 min", wed: "Rest", thu: "Run 25 min", fri: "Rest", sat: "5K RACE", sun: "30 min Walk" }
  ];

  return (
    <div className="min-h-screen text-gray-100 font-sans" style={{ backgroundColor: colors.darkBg }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
           <div className="flex items-center gap-2">
              <img src={logoNoText} alt="Mullet Foot" className="w-12 h-12 md:w-14 md:h-14" />
              <span className="font-black text-lg tracking-tighter uppercase hidden sm:block">
                Mullet <span style={{ color: colors.neonGreen }}>Foot</span>
              </span>
           </div>
          <div className="flex gap-4 md:gap-8 text-sm font-bold uppercase tracking-widest">
            {['home', 'schedule', 'training', 'races'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="transition-colors hover:text-white"
                style={{ color: activeTab === tab ? colors.neonGreen : '#888' }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeTab === 'home' && (
        <main>
          <section className="relative py-20 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-[120px] opacity-20" style={{ backgroundColor: colors.neonGreen }}></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-[120px] opacity-20" style={{ backgroundColor: colors.neonPink }}></div>
            
            <div className="relative z-10 max-w-3xl">
              <img src={logo} alt="Mullet Foot Running Club" className="w-48 md:w-64 mx-auto mb-6" />
              <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter">
                <span style={{ color: colors.neonGreen, textShadow: `0 0 20px ${colors.neonGreen}44` }}>MILES N MUGS</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Party in the back, pace in the front. A community for runners, walkers, and ruckers who don't take themselves too seriously.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button onClick={() => setActiveTab('schedule')} className="px-8 py-3 rounded-full font-bold transition-transform hover:scale-105" style={{ backgroundColor: colors.neonGreen, color: 'black' }}>
                  Join Next Run
                </button>
                <button onClick={() => setActiveTab('training')} className="px-8 py-3 rounded-full border-2 font-bold transition-transform hover:scale-105" style={{ borderColor: colors.neonPink, color: colors.neonPink }}>
                  Start 5K Plan
                </button>
              </div>
            </div>
          </section>

          {/* About Vibe Grid */}
          <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Approachable", desc: "First-time runners are our favorites. We stay together.", icon: <Users /> },
              { title: "Stroller Friendly", desc: "Bring the kiddos. Smooth paths for all wheels.", icon: <Baby /> },
              { title: "Dog Friendly", desc: "Four-legged runners are always welcome on leash.", icon: <Dog /> },
              { title: "All Paces", desc: "Runners, walkers, and ruckers. No one finishes alone.", icon: <Footprints /> },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all">
                <div className="mb-4 text-white p-3 rounded-xl bg-zinc-800 w-fit">
                  {React.cloneElement(item.icon, { className: "w-6 h-6", style: { color: i % 2 === 0 ? colors.neonGreen : colors.neonPink } })}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </section>
        </main>
      )}

      {/* Schedule Section */}
      {activeTab === 'schedule' && (
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-black mb-12 uppercase tracking-tighter flex items-center gap-3">
            <Calendar style={{ color: colors.neonGreen }} /> Weekly Meetups
          </h2>
          <div className="space-y-6">
            {schedule.map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-zinc-900 border-l-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6" style={{ borderLeftColor: item.color }}>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {item.icon}
                    <span className="font-black text-2xl uppercase tracking-tight">{item.day} @ {item.time}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.location}</h3>
                  <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4" /> {item.address}
                  </div>
                  <div className="px-3 py-1 rounded-full bg-zinc-800 text-xs font-bold inline-block" style={{ color: item.color }}>
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
            ))}
          </div>
        </section>
      )}

      {/* Training Program Section */}
      {activeTab === 'training' && (
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter italic">Couch to 5K</h2>
            <p className="text-gray-400 mb-2">A beginner-friendly 10-week program designed to get you from the sofa to the Sanford finish line.</p>
            <a href="https://www.runnersworld.com/beginner/a40267826/couch-to-5k-runners-program/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-bold hover:underline" style={{ color: colors.neonBlue }}>
              Source: Runner's World <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-zinc-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-900 text-xs uppercase tracking-widest text-gray-500">
                  <th className="p-4 text-left font-black">Week</th>
                  <th className="p-4 text-left font-bold">Mon</th>
                  <th className="p-4 text-left font-bold">Tue</th>
                  <th className="p-4 text-left font-bold">Wed</th>
                  <th className="p-4 text-left font-bold">Thu</th>
                  <th className="p-4 text-left font-bold">Fri</th>
                  <th className="p-4 text-left font-bold">Sat</th>
                  <th className="p-4 text-left font-bold">Sun</th>
                </tr>
              </thead>
              <tbody>
                {c25kProgram.map((item, i) => {
                  const isRaceWeek = item.week === 10;
                  return (
                    <tr key={i} className="border-t border-zinc-800 hover:bg-zinc-800/50 transition-colors" style={isRaceWeek ? { backgroundColor: '#39FF140D' } : i % 2 === 0 ? {} : { backgroundColor: '#ffffff05' }}>
                      <td className="p-4 font-black text-lg" style={{ color: isRaceWeek ? colors.neonGreen : i < 3 ? colors.neonGreen : i < 6 ? colors.neonBlue : colors.neonPink }}>{item.week}</td>
                      <td className="p-4 text-gray-400">{item.mon}</td>
                      <td className="p-4 text-gray-300">{item.tue}</td>
                      <td className="p-4 text-gray-400">{item.wed}</td>
                      <td className="p-4 text-gray-300">{item.thu}</td>
                      <td className="p-4 text-gray-400">{item.fri}</td>
                      <td className="p-4 font-bold" style={{ color: isRaceWeek ? colors.neonGreen : '#D1D5DB' }}>{item.sat}</td>
                      <td className="p-4 text-gray-400">{item.sun}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Races Section */}
      {activeTab === 'races' && (
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-black mb-8 uppercase italic tracking-tighter">Local Race Calendar</h2>
          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">
            {races.map((race, i) => (
              <div key={i} className="p-6 border-b border-zinc-800 last:border-0 flex justify-between items-center hover:bg-zinc-800/30 transition-colors">
                <div>
                  <div className="text-xs font-black mb-1 uppercase tracking-widest" style={{ color: colors.neonPink }}>{race.date}</div>
                  <div className="text-lg font-bold">{race.name}</div>
                  <div className="text-sm text-gray-500">{race.location}</div>
                </div>
                <ExternalLink className="w-5 h-5 text-zinc-600 cursor-pointer hover:text-white" />
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-2xl bg-blue-900/10 border border-blue-900/30 flex items-start gap-4">
             <div className="p-2 rounded bg-blue-500/20">
               <MapPin className="w-5 h-5 text-blue-400" />
             </div>
             <div>
               <h4 className="font-bold text-blue-300">New to racing?</h4>
               <p className="text-sm text-blue-300/70">Join our group chat to coordinate carpools and meetup spots at these local events!</p>
             </div>
          </div>
        </section>
      )}

      {/* Footer / Socials */}
      <footer className="mt-20 py-12 border-t border-zinc-800 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black italic mb-2 tracking-tight uppercase">
              Mullet <span style={{ color: colors.neonGreen }}>Foot</span>
            </h3>
            <p className="text-gray-500 text-sm">Stay wild. Run often. Drink responsibly.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-3 rounded-full bg-zinc-900 text-gray-400 hover:text-white hover:bg-zinc-800 transition-all">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-600 uppercase tracking-widest">Socials Coming Soon</p>
          </div>
        </div>
        <div className="text-center mt-12 text-[10px] text-gray-600 uppercase tracking-widest">
          &copy; 2024 Mullet Foot Miles n Mugs | Sanford, FL
        </div>
      </footer>
    </div>
  );
};

export default App;
