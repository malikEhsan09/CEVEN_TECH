import React from "react";
import { SparklesCore } from "../ui/sparkles";
import AnimatedTooltip from "../ui/animated-tooltip";

// Import images
import CEO from "../../assets/CEO CTO/malaika (2).jpg";
import CTO from "../../assets/CEO CTO/ajmaledit.jpg";
import ehsan from "../../assets/team/ehsan1.jpg";
import moiz from "../../assets/team/moiz.jpg";
import waheed from "../../assets/team/Waheed.jpg";
import haseeb from "../../assets/team/haeeb.jpg";
import awais from "../../assets/team/awais.jpg";

const leaders = [
  {
    id: 1,
    name: "Malaika Zia",
    role: "Cofounder & CEO",
    image: CEO,
    linkedin: "https://www.linkedin.com/in/malaikazia/",
    email: "malaikazia@ceventech.com",
  },
  {
    id: 2,
    name: "Ajmal Malik",
    role: "Cofounder & CTO",
    image: CTO,
    linkedin: "https://www.linkedin.com/in/muhammad-ajmal-malik/",
    email: "ajmal@ceventech.com",
  },
];

const team = [
  {
    id: 1,
    name: "Malaika Zia",
    designation: "CEO",
    image: CEO,
  },
  {
    id: 2,
    name: "Ajmal Malik",
    designation: "CTO",
    image: CTO,
  },
  {
    id: 3,
    name: "Awais ur Rehman",
    designation: "CPO (Chief Product Officer)",
    image: awais,
  },
  {
    id: 4,
    name: "Abdul Moiz",
    designation: "Operation Manager",
    image: moiz,
  },
  {
    id: 5,
    name: "Ehsan Ahmed",
    designation: "Full Stack Engineer",
    image: ehsan,
  },
  {
    id: 6,
    name: "Abdul Waheed",
    designation: "Full Stack Engineer",
    image: waheed,
  },
  {
    id: 7,
    name: "Haseeb Ur Rehman",
    designation: "Full Stack Engineer",
    image: haseeb,
  },
];

function CTeam() {
  return (
    <div className="py-20 space-y-20">
      {/* Tech Leads Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-10">
          Our Tech Leads
        </h2>
        <div className="relative h-20 mb-10">
          <SparklesEffect />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {leaders.map((leader) => (
            <LeaderCard key={leader.id} {...leader} />
          ))}
        </div>
      </section>

      {/* Tech Team Section */}
      <section className="container mx-auto pb-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-1">
          Our Tech Team
        </h2>
        <div className="relative h-40 mb-1">
          <SparklesEffect />
        </div>
        <div className="flex flex-wrap justify-center">
          <AnimatedTooltip items={team} />
        </div>
      </section>
    </div>
  );
}

function SparklesEffect() {
  return (
    <>
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={1200}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
    </>
  );
}

function LeaderCard({ name, role, image, linkedin, email }) {
  return (
    <div className="bg-richBlack text-white rounded-lg shadow-2xl p-6 flex flex-col md:flex-row items-center transition-transform duration-300 ease-in-out hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
      />
      <div className="text-center md:text-left">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-400 uppercase mb-4">{role}</p>
        <div className="flex justify-center md:justify-start space-x-4">
          <SocialLink href={linkedin} icon="linkedin" />
          <SocialLink href={`mailto:${email}`} icon="email" />
        </div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon }) {
  const icons = {
    linkedin: (
      <path d="M9 4C6.2504839 4 4 6.2504839 4 9L4 41C4 43.749516 6.2504839 46 9 46L41 46C43.749516 46 46 43.749516 46 41L46 9C46 6.2504839 43.749516 4 41 4L9 4zM9 6L41 6C42.668484 6 44 7.3315161 44 9L44 41C44 42.668484 42.668484 44 41 44L9 44C7.3315161 44 6 42.668484 6 41L6 9C6 7.3315161 7.3315161 6 9 6zM14 11.011719C12.904779 11.011719 11.919219 11.339079 11.189453 11.953125C10.459687 12.567171 10.011719 13.484511 10.011719 14.466797C10.011719 16.333977 11.631285 17.789609 13.691406 17.933594A0.98809878 0.98809878 0 0013.695312 17.935547A0.98809878 0.98809878 0 0014 17.988281C16.27301 17.988281 17.988281 16.396083 17.988281 14.466797A0.98809878 0.98809878 0 0017.986328 14.414062C17.884577 12.513831 16.190443 11.011719 14 11.011719zM14 12.988281C15.392231 12.988281 15.94197 13.610038 16.001953 14.492188C15.989803 15.348434 15.460091 16.011719 14 16.011719C12.614594 16.011719 11.988281 15.302225 11.988281 14.466797C11.988281 14.049083 12.140703 13.734298 12.460938 13.464844C12.78117 13.19539 13.295221 12.988281 14 12.988281zM11 19A1.0001 1.0001 0 0010 20L10 39A1.0001 1.0001 0 0011 40L17 40A1.0001 1.0001 0 0018 39L18 33.134766L18 20A1.0001 1.0001 0 0017 19L11 19zM20 19A1.0001 1.0001 0 0019 20L19 39A1.0001 1.0001 0 0020 40L26 40A1.0001 1.0001 0 0027 39L27 29C27 28.170333 27.226394 27.345035 27.625 26.804688C28.023606 26.264339 28.526466 25.940057 29.482422 25.957031C30.468166 25.973981 30.989999 26.311669 31.384766 26.841797C31.779532 27.371924 32 28.166667 32 29L32 39A1.0001 1.0001 0 0033 40L39 40A1.0001 1.0001 0 0040 39L40 28.261719C40 25.300181 39.122788 22.95433 37.619141 21.367188C36.115493 19.780044 34.024172 19 31.8125 19C29.710483 19 28.110853 19.704889 27 20.423828L27 20A1.0001 1.0001 0 0026 19L20 19zM12 21L16 21L16 33.134766L16 38L12 38L12 21zM21 21L25 21L25 22.560547A1.0001 1.0001 0 0026.798828 23.162109C26.798828 23.162109 28.369194 21 31.8125 21C33.565828 21 35.069366 21.582581 36.167969 22.742188C37.266572 23.901794 38 25.688257 38 28.261719L38 38L34 38L34 29C34 27.833333 33.720468 26.627107 32.990234 25.646484C32.260001 24.665862 31.031834 23.983076 29.517578 23.957031C27.995534 23.930001 26.747519 24.626988 26.015625 25.619141C25.283731 26.611293 25 27.829667 25 29L25 38L21 38L21 21z" />
    ),
    email: (
      <path d="M29.94 6.68a1 1 0 0 0-.09-.18.94.94 0 0 0-.05-.11 1.6 1.6 0 0 0-.31-.24l-.17-.06H2.94a1 1 0 0 0-.21 0l-.17.06a1 1 0 0 0-.15.1 1 1 0 0 0-.15.13.93.93 0 0 0-.05.11.79.79 0 0 0-.21.39A.93.93 0 0 0 2 7v18a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V7a.93.93 0 0 0 0-.12 1 1 0 0 0-.06-.2ZM26.06 8 16 15.74 5.94 8ZM28 24H4V9l11.39 8.76a1 1 0 0 0 1.22 0L28 9Z" />
    ),
  };

  return (
    <a
      href={href}
      className="text-gray-400 hover:text-white transition-colors duration-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        className="h-6 w-6 fill-current"
      >
        {icons[icon]}
      </svg>
    </a>
  );
}

export default CTeam;
