import React from "react";
import { SparklesCore } from "../ui/sparkles";
import AnimatedTooltip from "../ui/animated-tooltip";
import { Linkedin, Mail } from "lucide-react";

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
          <SocialLink href={linkedin} icon={<Linkedin />} />
          <SocialLink href={`mailto:${email}`} icon={<Mail />} />
        </div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-white transition-colors duration-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      {React.cloneElement(icon, { size: 24 })}
    </a>
  );
}

export default CTeam;
