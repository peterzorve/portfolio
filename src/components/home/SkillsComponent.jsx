import React from 'react';
import './SkillsComponent.css';
import { skills } from '../../assets/data/skills';

// const skills = {
//   "Programming Languages": ["Python", "JavaScript", "React", "React Native"],
//   "Machine and Deep Learning": ["Scikit-learn", "PyTorch"],
//   "Data Analysis": ["Pandas", "NumPy", "Exploratory Data Analysis (EDA)"],
//   "Data Visualization": ["Matplotlib", "Beautiful Soup"],
//   "Web Technologies": ["AWS", "SQL", "PostgreSQL", "Spark", "HTML", "CSS", "Docker"], 
//   "Web": ["AWS", "SQL", "PostgreSQL", "Spark", "HTML", "CSS", "Docker"]
// };

const SkillsComponent = () => {
  return (
    <div className="skills-container">
      {Object.entries(skills).map(([category, items], index) => (
        <div key={index} className="category-container">
          <h2 className="category-title">{category}</h2>
          <div className="skills-list">
            {items.map((item, idx) => (
              <div key={idx} className="skill-item">{item}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsComponent;
