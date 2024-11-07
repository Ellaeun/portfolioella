import React, { useState } from 'react';
import Mysql from '../assets/Mysql/MySQL.jpg';
import HTML from '../assets/HTML/html.jpg';
import JavaScript from '../assets/JavaScript/JavaScript.png';
import CSS from '../assets/CSS/CSS-Logo.png';
import ReactFrameworks from '../assets/ReactFrameworks/React.png';
import Tailwind from '../assets/Tailwind/tailwindcss-logo.png';
import JavaSwing from '../assets/JavaSwing/JavaSwing.png';

const skillsData = [
  { name: "MySQL", img: Mysql, info: "MySQL has been a cornerstone in my understanding of relational databases. It's taught me how to efficiently manage and query data, making it a powerful tool for backend development. The importance of well-structured data became clear to me as I worked on projects that required seamless data integration." },
  { name: "Java Swing", img: JavaSwing, info: "Java Swing introduced me to the world of graphical user interfaces. It challenged me to think about user experience from a desktop application's perspective, and I’ve learned how to create clean, functional designs that offer a smooth experience." },
  { name: "HTML", img: HTML, info: "HTML is where my journey began. It’s the skeleton of every web project, and it taught me how to structure content effectively. Learning HTML felt like unlocking the first step towards turning ideas into something tangible on the web." },
  { name: "JavaScript", img: JavaScript, info: "JavaScript has always been a thrill for me. It’s the programming language that brings websites to life, allowing dynamic content, interactivity, and complex functionality. Mastering JavaScript was like learning the magic behind websites, enabling me to build things users can actually interact with." },
  { name: "CSS", img: CSS, info: "CSS is the styling language that brings creativity to web pages. It’s given me the ability to express my designs visually, ensuring that the pages I build are not just functional but also aesthetically pleasing. I learned how even the smallest styling details can make a huge difference." },
  { name: "React", img: ReactFrameworks, info: "React revolutionized the way I think about web development. It’s taught me how to break down a user interface into reusable components and how to handle complex states and dynamic data flow. React made it easier to build fast, responsive, and scalable applications." },
  { name: "Tailwind", img: Tailwind, info: "Tailwind CSS has been a game changer for me. It allows me to style my projects quickly without writing long custom CSS. Its utility-first approach has helped me create visually stunning designs while staying efficient and organized in my workflow." },
];

const SkillItem = ({ skill, onSkillClick }) => {
  return (
    <div className='relative flex flex-col items-center justify-center m-4 w-[80px] md:w-[100px] rounded-lg p-3'>
      <img
        src={skill.img}
        alt={skill.name}
        className='transition-transform transform hover:scale-150 cursor-pointer rounded-lg shadow-md hover:shadow-xl'
        onClick={() => onSkillClick(skill.name)} // Only handle click
      />
      <p className='font-serif text-white text-xl mt-2'>{skill.name}</p>
    </div>
  );
};

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const handleSkillClick = (skillName) => {
    setActiveSkill(prevSkill => (prevSkill === skillName ? null : skillName));
  };

  return (
    <div className='bg-black h-screen w-full max-w-none mx-auto py-12'>
      <div className='container mx-auto text-center'>
        <h2 className='text-pink-600 text-3xl sm:text-4xl font-bold mb-8'>Experience</h2>

        {/* Skills Grid */}
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8'>
          {skillsData.map((skill, index) => (
            <SkillItem 
              key={index} 
              skill={skill} 
              onSkillClick={handleSkillClick} 
            />
          ))}
        </div>

        {/* Scrollable area for skill info */}
        <div className='mt-8 max-w-xl mx-auto'>
          <div className='overflow-auto h-[200px] w-full md:w-[400px] border-2 border-white rounded-lg bg-pink-900 p-4'>
            {activeSkill && (
              <div className='text-white'>
                <h3 className='font-bold text-xl mb-2'>{activeSkill}</h3>
                <p className='text-sm'>{skillsData.find(skill => skill.name === activeSkill).info}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
