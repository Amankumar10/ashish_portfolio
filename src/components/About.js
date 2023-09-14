import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faPython, faLaravel, faGit } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-4">
          Hi, My name is Ashish Thakur. I am a Full-Stack Developer based in Ranchi, Jharkhand.
        </p>
        <h1 className="text-xl mt-6 font-semibold">My Skills</h1>
        <div className="mt-2 flex flex-wrap items-center">
          <div className="flex items-center space-x-2 mr-4">
            <FontAwesomeIcon icon={faReact} className="text-blue-500 text-3xl" />
            <span>React.js</span>
          </div>
          <div className="flex items-center space-x-2 mr-4 mt-2">
            <FontAwesomeIcon icon={faNode} className="text-green-500 text-3xl" />
            <span>Node.js</span>
          </div>
          <div className="flex items-center space-x-2 mr-4 mt-2">
            <FontAwesomeIcon icon={faPython} className="text-blue-500 text-3xl" />
            <span>Django</span>
          </div>
          <div className="flex items-center space-x-2 mr-4 mt-2">
            <FontAwesomeIcon icon={faLaravel} className="text-red-500 text-3xl" />
            <span>Laravel</span>
          </div>
          <div className="flex items-center space-x-2 mr-4 mt-2">
            <FontAwesomeIcon icon={faGit} className="text-gray-500 text-3xl" />
            <span>Git</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
