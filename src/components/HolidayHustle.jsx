import React from 'react';
import { Dumbbell, HeartHandshake, Megaphone, ExternalLink } from 'lucide-react';
import { colors } from '../constants/theme';

const FORM_URL = 'https://forms.gle/MUa1B6t4BFdV3Ra7A';

const steps = [
  {
    title: 'Log Your Workouts',
    desc: 'Throughout December, every gym class, yoga session, or personal training hour counts as a point. Runners, walkers, and cyclists get a fair point conversion too.',
    icon: <Dumbbell />,
    color: colors.neonGreen,
  },
  {
    title: 'Backers Pledge',
    desc: 'Local downtown restaurants, breweries, businesses, and shops pledge donations based on the total points our coalition racks up. No cost to you.',
    icon: <HeartHandshake />,
    color: colors.neonPink,
  },
  {
    title: 'Community Champions',
    desc: 'Partner gyms, studios, and clubs are featured on flyers, digital leaderboards, and social media updates.',
    icon: <Megaphone />,
    color: colors.neonBlue,
  },
];

const HolidayHustle = () => (
  <section className="max-w-4xl mx-auto px-4 py-16">
    <div className="mb-12">
      <div className="text-xs font-black mb-2 uppercase tracking-widest" style={{ color: colors.neonPink }}>
        December 2026
      </div>
      <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase italic tracking-tighter">
        <span aria-hidden="true">🎄</span> Sanford{' '}
        <span style={{ color: colors.neonGreen, textShadow: `0 0 20px ${colors.neonGreen}44` }}>Holiday Hustle</span>{' '}
        <span aria-hidden="true">🎄</span>
      </h2>
      <p className="text-xl text-gray-400">
        Turn everyday health, reps, and miles into real holiday magic for Sanford neighbors who need it most.
      </p>
    </div>

    <p className="text-gray-400 leading-relaxed mb-12">
      The Sanford Holiday Hustle is a city-wide fitness coalition bringing together gyms, run clubs, fitness
      clubs, studios, and individuals for one massive, combined cause: supporting local families in need through
      Ladies 327 Inc. Instead of a financial donation, we're asking for your sweat equity and your community's
      incredible energy.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {steps.map((step) => (
        <div key={step.title} className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all">
          <div className="mb-4 p-3 rounded-xl bg-zinc-800 w-fit">
            {React.cloneElement(step.icon, { className: 'w-6 h-6', style: { color: step.color } })}
          </div>
          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
        </div>
      ))}
    </div>

    <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 text-center">
      <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-2">Ready to Hustle?</h3>
      <p className="text-gray-400 mb-6">Submit your workouts on our Google Form to add to the city-wide total.</p>
      <a
        href={FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-transform hover:scale-105"
        style={{ backgroundColor: colors.neonGreen, color: 'black' }}
      >
        Log Your Score <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  </section>
);

export default HolidayHustle;
