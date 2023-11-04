import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    cpp,
    html,
    css,
    reactjs,
    python,
    tailwind,
    nodejs,
    git,
    figma,
    stocks,
    csn,
    sorting,
    workout,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Software Engineer",
      icon: mobile,
    },
    {
      title: "Data Structures and Algorithm Enthusiast",
      icon: backend,
    },
    {
      title: "Teacher's Assistant / Tutor",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Teacher's Assistant and Tutor",
      company_name: "College of Southern Nevada",
      icon: csn,
      //! Don't know if i want the back ground white or not
      iconBg: "#383E56",
      date: "Aug 2021 - Dec 2021",
      points: [
        "Assist students with understanding the assignments, debugging code, and applying concepts taught in lectures.",
        "Responsible for grading assignments and providing feedback. While assessing the students' work for correctness, style, and efficiency, especially in programming assignments.",
        "Contribute to the development of course materials, such as homework assignments, exams, or lecture notes.",
        "Work with other TAs and the Professor to coordinate on grading standards, discussing student progress, and sometimes mediating student concerns.",
      ],
    },
    {
      title: "React Sorting Algorithm Visualizer",
      company_name: "Project",
      icon: sorting,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Oct 2023",
      points: [
        "Built a deep understanding of how different sorting algorithms work, including the logic behind merge sort, quick sort, heap sort, selection sort, insertion sort, and bubble sort. Strong knowledge of the time and space complexity of each algorithm.",
        "Knowledge of data structures, particularly arrays. Understand the role of trees in heap sort and how different data structures can impact performance.",
        "Designing an interactive interface that allows users to control the sorting speed and the array size. This helps the user experience design and how to create an intuitive and responsive interface.",
        "Practiced manipulating the DOM to visually represent the sorting process on the web page, updating the view as the sort progresses.",
      ],
    },
    {
      title: "Workout Tracker",
      company_name: "Project",
      icon: workout,
      iconBg: "#383E56",
      date: "Jan 2023 - Jan 2023",
      points: [
        "Learned how to work with external APIs, such as Nutritionix for fetching nutritional data and exercise information.",
        "Developed skills to store and manipulate data, using a Google Sheets via the Sheety API, which converts spreadsheets into RESTful APIs.",
        "Created an automated system that logs workouts without the need for manual data entry or using natural language processing to interpret user input.",
        "Implemented data validation to ensure the integrity of the input data.",
      ],
    },
    {
      title: "Stock News",
      company_name: "Project",
      icon: stocks,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Feb 2023",
      points: [
        "Implementing conditions to trigger alerts based on specific criteria like price drops or increases.",
        "Used automated scripting scheduling the script to run at regular intervals, using Python's schedule library, which encouraged me to set up a system to send alerts through different channels and formatting messages in a user-friendly way.",
        "Making use of libraries for sending notifications, such as \"smtplib\" for emails or the twilio API for SMS.",
        "Utilizing libraries like requests for HTTP \"requests\" or pandas for data analysis.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };