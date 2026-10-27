const portfolioData = {

  name: "Madhusudan Bhandari",
  title: "Software Engineer | Developer",
  avatar: "/profile.jpg",
  "bio":"A Software Engineering graduate passed out in september 2026, always passionate about learnig new things in the tech and growing my depth and expertise in the Backend Deveopment. Want to work in the team and contribute to the team and grow in this profession with the passion and hardwork. Looking for the opportunites to grow in this field of software engineering and want to perform. I have grown interest in Backend Development and problem solving and learning new backend concepts,trying to excel in this domain.  ",
  email: "madhusudanb636@gmail.com",
  github: "https://github.com/madhusudanbhandari",
  linkedin: "https://www.linkedin.com/in/madhusudan-bhandari-70a392259/",
  location: "Bafal, Kathmandu",
  resumeUrl: "/Resume.pdf",
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
      title:"Business Management System (WorkSphere)",
      description:"A full-stack business management platform built with ASP.NET Core Web API, C#, Entity Framework Core, PostgreSQL, and React (Vite). Implements layered architecture, Repository-Service-Controller pattern, DTOs, AutoMapper, JWT authentication, and role-based authorization. Features organization and employee management, teams, projects, tasks, attendance, leave and salary management, and real-time chat using SignalR, with organization-level data isolation and a responsive, role-based UI.",
      github:"https://github.com/madhusudanbhandari/BMS",
      tech:['ASP.NET',"React",'PostgreSQL',"EFCore","Docker"],
      live:"https://bms-sand-seven.vercel.app/login",
      highlight:true,
    },

    {
      title:"Employee Management System",
      description:"Developed an enterprise EMS implementing JWT-based authentication and role-based authorization for employee and department management, leave management with HR approval workflows, payroll management, and employee-specific data access. Built RESTful APIs using a Repository–Service–Controller architecture, with EF Core and LINQ for database operations, pagination, searching, sorting, and optimizedquerying. Integrated SignalR for real-time employee communication and chat, including conversation and participant management. Used DTOs, AutoMapper, FluentValidation, BCrypt password hashing, Redis for caching and PostgreSQL for a scalable and maintainable backend.",
      github:"https://github.com/madhusudanbhandari/EMS",
      tech:['ASP.NET',"React",'PostgreSQL',"Redis","Docker"],
      highlight:true,
    },
    {
      title: "Hami chhau",
      description: "A local marketplace and service request platform built with Flutter and Supabase.Haami Chhau is a mobile application that connects customers with nearby merchants and service providers. Users can request products or services, receive offers from merchants, chat in real-time, and manage their orders seamlessly. The application is designed to provide a fast, secure, and user-friendly marketplace experience.",
      tech: ["Flutter", "Supabase"],
      github: "https://github.com/madhusudanbhandari/hami_chhau",
      live:"https://play.google.com/store/apps/details?id=com.madhusudan.haamichhau&hl=en&pli=1" ,
      highlight: true,
    },

     {
      title:"Food-Delivery App",
      description:"I built this project to practice and demonstrate real-world backend concepts such as REST APIs, JWT authentication, role-based authorization, Entity Framework Core, repository/service architecture, Redis caching, background services, SignalR, Docker, health checks, and production-oriented application design.",
      tech:['ASP.NET',"React",'PostgreSQL',"Redis","Docker"],
      github:"https://github.com/madhusudanbhandari/FDP",
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