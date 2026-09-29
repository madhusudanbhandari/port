const portfolioData = {

  name: "Madhusudan Bhandari",
  title: "Software Engineering Student",
  avatar: "/profile.jpg",
  bio: "Passionate software engineering student at Nepal College of Information Technology, Pokhara University with a love for building scalable systems, elegant UIs, and solving real-world problems through clean, efficient code. Currently seeking internship & full-time opportunities.",
  email: "madhusudanb636@gmail.com",
  github: "https://github.com/madhusudanbhandari",
  linkedin: "https://www.linkedin.com/in/madhusudan-bhandari-70a392259/",
  location: "Bafal, Kathmandu",
  resumeUrl: "/Resume.pdf",
  avatar: null,
  isOpenToWork: true,

  education: [
    {
      institution: "Nepal College of Information Technology, Pokhara University",
      degree: "Bachelor of Engineering in Software Engineering",
      period: "2022 – 2026",
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
      title:"Employee Management System",
      description:"Developed an enterprise EMS implementing JWT-based authentication and role-based authorization for employee and department management, leave management with HR approval workflows, payroll management, and employee-specific data access. Built RESTful APIs using a Repository–Service–Controller architecture, with EF Core and LINQ for database operations, pagination, searching, sorting, and optimizedquerying. Integrated SignalR for real-time employee communication and chat, including conversation and participant management. Used DTOs, AutoMapper, FluentValidation, BCrypt password hashing, Redis for caching and PostgreSQL for a scalable and maintainable backend.",
      github:"https://github.com/madhusudanbhandari/House-Worker-Booking",
      tech:['ASP.NET',"React",'PostgreSQL',"Redis","Docker"],
      live:"https://house-worker-booking-1.onrender.com/",
      highlight:true,
    },

     {
      title:"Food-Delivery App",
      description:"I built this project to practice and demonstrate real-world backend concepts such as REST APIs, JWT authentication, role-based authorization, Entity Framework Core, repository/service architecture, Redis caching, background services, SignalR, Docker, health checks, and production-oriented application design.",
      tech:['ASP.NET',"React",'PostgreSQL',"Redis","Docker"],
      github:"https://github.com/madhusudanbhandari/FDP",
      //live:"https://house-worker-booking-1.onrender.com/",
      highlight:true,
    },

    {
      title:"GharKoKaam",
      description:"A full-stack home services booking platform for Kathmandu, Nepal — connecting customers with verified local workers for plumbing, electrical, cleaning, and more.",
      tech:['Django',"React",'MySQL'],
      github:"https://github.com/madhusudanbhandari/House-Worker-Booking",
      live:"https://house-worker-booking-1.onrender.com/",
      highlight:true,
    },

    {
      title: "Venue-Booking App",
      description: "Venue bookinng application built with Flutter, allowing users to search for venues and make bookings, allowing the admin or the venue owner to upload venues and track bookings using Firebase as the backend.",
      tech: ["Flutter", "FastAPI", "Firebase", ],
      github: "https://github.com/madhusudanbhandari/Venue-booking",
      //live: "https://neuralnote.app",
      highlight: true,
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
    "Languages":          ["C#","Python", "JavaScript",   "SQL", "Html/CSS", "Dart"],
    "Frontend & Mobile":  ["Flutter","React"],
    "Backend & APIs":     ["ASP.NET","Django", "FastAPI", "REST", "Firebase"],
    "Data & ML":          [ "Pandas", "NumPy", "Scikit-learn", "Jupyter"],
    "Cloud & DevOps":     ["AWS"],
    "Databases":          ["PostgreSQL", "MongoDB"],
  },

  // achievements: []

  navLinks: ["About", "Education", "Experience", "Projects", "Skills", "Contact"],
};

export default portfolioData;