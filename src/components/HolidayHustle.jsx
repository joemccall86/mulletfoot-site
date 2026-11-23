import React from "react";
import { Dumbbell, HeartHandshake, Trophy, ExternalLink } from "lucide-react";
import { colors } from "../constants/theme";
import hustleLogo from "../assets/hustle_logo.jpg";

const FORM_URL = "https://forms.gle/MUa1B6t4BFdV3Ra7A";

const steps = [
  {
    title: "Log Your Workouts",
    desc: "Throughout December, every 30 minutes of activity earns a point, up to 3 points per day. Gym classes, yoga, personal training, running, walking, and cycling all count.",
    icon: <Dumbbell />,
    color: colors.neonGreen,
  },
  {
    title: "Backers Pledge",
    desc: "Local downtown restaurants, breweries, businesses, and shops pledge donations based on the total points our coalition racks up.",
    icon: <HeartHandshake />,
    color: colors.neonPink,
  },
];

const HolidayHustle = () => (
  <section className="max-w-4xl mx-auto px-4 py-16">
    <div className="mb-12">
      <img
        src={hustleLogo}
        alt="The Sanford Holiday Hustle, December 2026"
        className="w-48 md:w-64 aspect-square object-cover rounded-full mx-auto mb-8"
      />
      <div
        className="text-xs font-black mb-2 uppercase tracking-widest"
        style={{ color: colors.neonPink }}
      >
        December 2026
      </div>
      <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase italic tracking-tighter">
        Sanford <span style={{ color: colors.neonGreen }}>Holiday Hustle</span>
      </h2>
      <p className="text-xl text-gray-400">
        Turn everyday health, reps, and miles into real holiday magic for
        Sanford neighbors who need it most.
      </p>
    </div>

    <p className="text-gray-400 leading-relaxed mb-12">
      The Sanford Holiday Hustle is a city-wide fitness coalition bringing
      together gyms, run clubs, fitness clubs, studios, and individuals for one
      massive, combined cause: supporting local families in need through Ladies
      327 Inc. Instead of a financial donation, we're asking for our sweat
      equity and our community's incredible energy.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {steps.map((step) => (
        <div
          key={step.title}
          className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all"
        >
          <div className="mb-4 p-3 rounded-xl bg-zinc-800 w-fit">
            {React.cloneElement(step.icon, {
              className: "w-6 h-6",
              style: { color: step.color },
            })}
          </div>
          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
        </div>
      ))}
    </div>

    <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 text-center">
      <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-2">
        Ready to Hustle?
      </h3>
      <p className="text-gray-400 mb-6">
        Submit your workouts on our Google Form to add to the city-wide total.
      </p>
      <a
        href={FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-transform hover:scale-105"
        style={{ backgroundColor: colors.neonGreen, color: "black" }}
      >
        Log Your Score <ExternalLink className="w-4 h-4" />
      </a>
    </div>

    <div className="mt-12 p-8 rounded-3xl bg-zinc-900 border border-zinc-800 text-center">
      <Trophy
        className="w-8 h-8 mx-auto mb-3"
        style={{ color: colors.neonBlue }}
      />
      <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-2">
        Leaderboard
      </h3>
      <p
        className="text-xs font-black uppercase tracking-widest"
        style={{ color: colors.neonPink }}
      >
        Coming Soon
      </p>
    </div>
  </section>
);

export default HolidayHustle;
