const portfolioData = {

  name: "Madhusudan Bhandari",
  title: "Software Engineering Student",
  bio: "Passionate software engineering student at Nepal College of Information Technology, Pokhara University with a love for building scalable systems, elegant UIs, and solving real-world problems through clean, efficient code. Currently seeking internship & full-time opportunities.",
  email: "madhusudanb636@gmail.com",
  github: "https://github.com/madhusudanbhandari",
  linkedin: "https://www.linkedin.com/in/madhusudan-bhandari-70a392259/",
  location: "Bafal, Kathmandu",
  resumeUrl: "/src/assets/resume.png",
  avatar: null,
  isOpenToWork: true,

  education: [
    {
      institution: "Nepal College of Information Technology, Pokhara University",
      degree: "Bachelor of Engineering in Software Engineering",
      period: "2022 – Current",
    },
    {
      institution: "Radiant College, Mahendranagar",
      degree: "+2",
      period: "2020-2022",
         },
  ],

  experience: [
  
  ],

  projects: [
    {
      title: "Venue-Booking App",
      description: "Venue bookinng application built with Flutter, allowing users to search for venues and make bookings, allowing the admin or the venue owner to upload venues and track bookings using Firebase as the backend.",
      tech: ["Flutter", "FastAPI", "Firebase", ],
      github: "https://github.com/madhusudanbhandari/Venue-booking",
      //live: "https://neuralnote.app",
      highlight: true,
    },
    {
      title: "Transport-app",
      description: "A mobile application for tracking and managing public transportation schedules and routes.",
      tech: ["Flutter", "Node.js", "MongoDB", ],
      github: "https://github.com/madhusudanbhandari/ktm-pbs",
      //live: "https://transport-app.vercel.app",
      highlight: false,
    },
    {
      title: "Sacred-Kathmandu",
      description: "A Website showcasing the sacred sites of Kathmandu, built with React.js providing information about the history and significance of each site.",
      tech: ["React.js"],
      github: "https://github.com/madhusudanbhandari/Sacred",
      live:"https://sacred-kathmandu.netlify.app/" ,
      highlight: false,
    },
    {
      title: "Movie-Recommendation-System",
      description: "A movie recommendation system built with Python, utilizing machine learning algorithms to provide personalized movie recommendations based on user preferences and viewing history.",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      github: "https://github.com/madhusudanbhandari/Movie-Recommendation-System",
      //live: "https://ecotrack.app",
      highlight: false,
    },
  ],

  skills: {
    "Languages":          ["Python", "JavaScript",  "C++", "SQL", "Html/CSS", "Dart"],
    "Frontend & Mobile":  ["Flutter","React",  "HTML/CSS"],
    "Backend & APIs":     ["Node.js", "FastAPI", "REST", "Firebase"],
    "Data & ML":          ["PyTorch", "TensorFlow", "Pandas", "NumPy", "Scikit-learn", "Jupyter"],
    "Cloud & DevOps":     ["AWS"],
    "Databases":          ["PostgreSQL", "MongoDB"],
  },

  // achievements: []

  navLinks: ["About", "Education", "Experience", "Projects", "Skills", "Contact"],
};

export default portfolioData;