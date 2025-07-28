import React, { useState } from 'react'; // Removed useEffect as it was not used
 
// Main App component
const App = () => {
  // State to manage the current active section for navigation
  const [activeSection, setActiveSection] = useState('home');
 
  // Function to render the content based on the active section
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'skills':
        return <SkillsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };
 
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-green-700 to-gray-900 p-4 shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Portfolio Title/Name */}
          <div className="text-white text-3xl font-bold mb-4 md:mb-0">
            {/* Changed <a> to <button> for accessibility, as navigation is handled by onClick */}
            <button onClick={() => setActiveSection('home')} className="text-white text-3xl font-bold hover:text-blue-200 transition duration-300 focus:outline-none">
              Neo Junior Mokoana
            </button>
          </div>
          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center md:space-x-8 space-x-4">
            <li>
              <button
                onClick={() => setActiveSection('home')}
                className={`text-lg px-4 py-2 rounded-full transition duration-300 ${
                  activeSection === 'home' ? 'bg-white text-blue-700 shadow-md' : 'text-white hover:bg-white hover:text-blue-700'
                } focus:outline-none`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('projects')}
                className={`text-lg px-4 py-2 rounded-full transition duration-300 ${
                  activeSection === 'projects' ? 'bg-white text-blue-700 shadow-md' : 'text-white hover:bg-white hover:text-blue-700'
                } focus:outline-none`}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('skills')}
                className={`text-lg px-4 py-2 rounded-full transition duration-300 ${
                  activeSection === 'skills' ? 'bg-white text-blue-700 shadow-md' : 'text-white hover:bg-white hover:text-blue-700'
                } focus:outline-none`}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('contact')}
                className={`text-lg px-4 py-2 rounded-full transition duration-300 ${
                  activeSection === 'contact' ? 'bg-white text-blue-700 shadow-md' : 'text-white hover:bg-white hover:text-blue-700'
                } focus:outline-none`}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
 
      {/* Main Content Area */}
      <main className="container mx-auto p-6 py-12">
        {renderSection()}
      </main>
 
      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center mt-12">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Neo Junior Mokoana. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};
 
// Home Section Component
const HomeSection = () => {
  return (
    <section id="home" className="bg-white p-8 rounded-lg shadow-xl animate-fade-in">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">Welcome to My Portfolio</h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        {/* Placeholder for Profile Image */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <img
            src="src/Image icon.jpeg"
            alt="Your Profile"
            className="rounded-full w-48 h-48 object-cover border-4 border-blue-500 shadow-lg"
          />
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-blue-700 mb-4">Professional Biography</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            I am a passionate and dedicated Data and AI enthusiast with a strong foundation in machine learning algorithms, deep learning frameworks, data analysis and visualization tools.
            Having completed an intensive bootcamp, I have honed my skills in building and deploying intelligent systems,
            solving complex problems, and extracting actionable insights from data. My goal is to leverage cutting-edge AI technologies
            to create innovative solutions that drive impact and efficiency.
          </p>
 
          <h3 className="text-3xl font-semibold text-purple-700 mb-4">Career Objectives</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            My primary career objective is to secure a challenging role as an Data/Machine Learning Engineer or Data Scientist where I can
            contribute to impactful projects, continuously learn, and grow my expertise in artificial intelligence and machine learning.
            I am eager to apply my technical skills to real-world problems and collaborate with dynamic teams to push the boundaries of technology.
          </p>
 
          <h3 className="text-3xl font-semibold text-green-700 mb-4">Personal Branding Statement</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            "An analytical and innovative Data and Machine Learning professional dedicated to transforming complex data into intelligent solutions.
            I combine strong technical acumen with a collaborative spirit to build robust, scalable, and ethical AI systems
            that deliver tangible business value."
          </p>
        </div>
      </div>
    </section>
  );
};
 
// Projects Section Component
const ProjectsSection = () => {
  // Array of featured projects
  const projects = [
    {
      id: 1,
      title: "Financial Sentiment Dashboard",
      description: "Financial Sentiment Dashboard An interactive web application built with Streamlit and the Google Gemini API for analyzing sentiment in text data. This dashboard allows users to input text and receive multi-class sentiment classification (Positive, Negative, Neutral) along with a confidence score and key sentiment drivers.",
      technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "Streamlit", "Google Gemini API"],
      demoLink: "https://financial-sentiment-dashboard-nnn5itht9qjfwfwnxp7xqz.streamlit.app/", // Placeholder link
      githubLink: "https://github.com/neomokoana/Financial-Sentiment-Dashboard", // Placeholder link
      image: "src/image 1.jpg" // Placeholder image
    },
    {
      id: 2,
      title: "Natural Language Processing Assistant Chatbot",
      description: "NLP Chatbot Deployment Guide This guide provides instructions on how to deploy both the Python Flask backend and the HTML/JavaScript frontend of your Natural Language Processing Chatbot.",
      technologies: ["Python", "PyTorch", "HTML", "JavaScript", "Flask", "Dockscikit-learn"],
      demoLink: "https://example.com/demo/project2", // Placeholder link
      githubLink: "https://github.com/neomokoana/NLP-Chatbot", // Placeholder link
      image: "src/image 2.2.jpg"
    },
    {
      id: 3,
      title: "Computer Vision for Object Detection",
      description: "Transportation Bias Audit: Towards Equitable Commutes in South Africa Project Overview This project conducts a comprehensive bias audit on a simulated AI-powered transportation route optimization system. The core aim is to identify and mitigate potential biases that could unfairly impact commuters from different demographic regions in South Africa (Rural, Township, Urban) on their journeys to the Central Business District (CBD) using various transport modes (taxis, buses, Uber).",
      technologies: ["Python", "Jupyter Notebook", "Scikit-learn","Seaborn", "Matplotlib"],
      githubLink: "https://github.com/neomokoana/TransportBiasAudit", // Placeholder link
      image: "src/image 3.jpg"
    }
  ];
 
  return (
    <section id="projects" className="bg-white p-8 rounded-lg shadow-xl animate-fade-in">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div key={project.id} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-bold text-blue-700 mb-3">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="mb-4">
              <span className="font-semibold text-gray-800">Technologies:</span>
              <ul className="flex flex-wrap mt-2">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-around mt-4">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-600 mt-8 text-lg">
        Explore more projects on my <a href="https://github.com/neomokoana" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub profile</a>.
      </p>
    </section>
  );
};
 
// Skills Section Component
const SkillsSection = () => {
  const technicalSkills = {
    "Programming Languages": ["Python", "SQL", "JavaScript" , "HTML", "CSS" , "React"],
    "Machine Learning": ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Feature Engineering", "Model Evaluation"],
    "Deep Learning Frameworks": ["TensorFlow", "PyTorch", "Keras"],
    "Data Science Libraries": ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    "Cloud Platforms": [ "Google Cloud Platform (AI Platform, BigQuery)"],
    "Databases": ["PostgreSQL", "MongoDB" , "MySQL"],
    "Tools & Version Control": ["Git", "GitHub", "Jupyter Notebooks", "VS Code", "Docker" , "Data Visualization Tools"],
    "Specialized AI/ML Areas": ["Natural Language Processing (NLP)", "Computer Vision (CV)", "Time Series Analysis", "Generative AI"]
  };
 
  return (
    <section id="skills" className="bg-white p-8 rounded-lg shadow-xl animate-fade-in">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Technical Skills & Competencies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(technicalSkills).map(([category, skills]) => (
          <div key={category} className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{category}</h3>
            <ul className="flex flex-wrap">
              {skills.map((skill, index) => (
                <li key={index} className="bg-green-100 text-green-800 text-md font-medium mr-2 mb-2 px-3 py-1 rounded-full shadow-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
 
// Contact Section Component
const ContactSection = () => {
  return (
    <section id="contact" className="bg-white p-8 rounded-lg shadow-xl animate-fade-in">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Connect With Me</h2>
      <div className="flex flex-col items-center space-y-6">
        <p className="text-lg text-gray-700 text-center max-w-2xl">
          I'm always open to new opportunities and collaborations. Feel free to reach out or connect with me on my professional platforms.
        </p>
        <div className="flex space-x-6">
          {/* GitHub Link */}
          <a
            href="https://github.com/neomokoana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600 transition duration-300 transform hover:scale-110"
            title="GitHub Profile"
          >
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.686-.208.686-.467 0-.232-.008-.865-.013-1.7C6.736 18.25 6.167 17.29 6.167 17.29c-.436-1.107-.905-1.395-.905-1.395-.742-.505.056-.495.056-.495.815.057 1.245.838 1.245.838.723 1.244 1.894.885 2.344.675.074-.523.286-.885.523-1.085-1.802-.206-3.692-.903-3.692-4.004 0-.889.317-1.62.838-2.194-.084-.206-.362-1.033.08-2.15 0 0 .68-.217 2.22.838.64-.18 1.32-.27 2.004-.27.684 0 1.364.09 2.004.27 1.54-1.055 2.22-.838 2.22-.838.442 1.117.164 1.944.08 2.15.52.574.838 1.305.838 2.194 0 3.109-1.894 3.793-3.699 4.004.293.252.556.75.556 1.514 0 1.085-.01 1.956-.01 2.22 0 .26.216.559.691.466C21.133 20.183 24 16.426 24 12.017 24 6.484 19.523 2 14 2h-2z" clipRule="evenodd" />
            </svg>
          </a>
 
          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/neojuniormokoana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600 transition duration-300 transform hover:scale-110"
            title="LinkedIn Profile"
          >
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.325-.028-3.044-1.853-3.044-1.854 0-2.136 1.445-2.136 2.95v5.663H9.591V9.248h3.413v1.56c.493-.88 1.398-1.516 2.486-1.516 2.668 0 3.16 1.763 3.16 4.065v6.295zM5.005 7.917a2.917 2.917 0 110-5.834 2.917 2.917 0 010 5.834zm-1.782 12.535h3.565V9.248H3.223v11.204z" />
            </svg>
          </a>
 
          {/* Email Placeholder */}
          <a
            href="Neojuniormokoana@gmail.com"
            className="text-gray-800 hover:text-blue-600 transition duration-300 transform hover:scale-110"
            title="Send an Email"
          >
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 8.5c0 .276-.224.5-.5.5h-3.5v3.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-3.5H7.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3.5V6.5c0-.276.224-.5.5-.5s.5.224.5.5v3.5h3.5c.276 0 .5.224.5.5z" />
            </svg>
          </a>
        </div>
        <p className="text-xl font-semibold text-gray-800 mt-6">
          Email: <a href="Neojuniormokoana@gmail.com" className="text-blue-600 hover:underline">Neojuniormokoana@gmail.com</a>
        </p>
      </div>
    </section>
  );
};
 
export default App;
 
 