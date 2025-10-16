import React from 'react';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="my-8">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      {skills.map((category, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{category.category}</h3>
          <ul className="flex flex-wrap gap-2">
            {category.items.map((skill, skillIndex) => (
              <li
                key={skillIndex}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-4 py-1 text-sm"
              >
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
