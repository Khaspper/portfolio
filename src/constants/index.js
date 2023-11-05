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
    rps,
    workout,
    python,
    tailwind,
    nodejs,
    git,
    figma,
    stocks,
    csn,
    sorting,
    workoutTracker,
    sortingvisualizer,
    calculator,
    stock_news,
    etch,
    portfolio,
    threejs,
    kevin,
    sam,
    welya,
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
        "Hey, I've gotta say, you nailed it as a TA! You cut through the tech talk and made those tough concepts clear as day you\'ve been a massive help, for real.",
      name: "Kevin Hagood",
      destination: "Prof.",
      company: "College of Southern Nevada",
      image: kevin,
    },
    {
      testimonial:
      "I must say, your exceptional grasp of computer science theories and concepts and your ability to apply them creatively in the coding assignments is really impressive.",
      name: "Sam Black",
      destination: "Prof.",
      company: "University of Nevada, Las Vegas",
      image: sam,
    },
    {
      testimonial:
      "You're my favorite person to work with.",
      name: "Welya Tan",
      destination: "Manager",
      company: "Kabuki, Las Vegas",
      image: welya,
    },
  ];
  
  const projects = [
    {
      name: "Portfolio",
      description:
        "Designing and developing a personalized web space to showcase my professional skills, projects, and experiences.",
      tags: [
        {
          name: "ThreeJS",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "Framer Motion",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Khaspper/portfolio",
    },
    {
      name: "Sorting Visualizer",
      description:
        "A Visualizer that graphically represents the process of 6 different sorting algorithm organizing data, using bars and colors to illustrate the algorithm's steps and how it arranges elements into a sorted order.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: sortingvisualizer,
      source_code_link: "https://github.com/Khaspper/sorting_visualizer",
      live_link: "https://srtingvisualizer.netlify.app",
    },
    {
      name: "Calculator",
      description:
        "Web application that provides users with a tool to perform arithmetic operations and mathematical calculations directly within the web page.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: calculator,
      source_code_link: "https://github.com/Khaspper/calculator",
      live_link: "https://khaspper.github.io/calculator/",
    },
    {
      name: "Etch-a-Sketch",
      description:
        "The Etch-a-Sketch project is an interactive web-based application that emulates the classic drawing toy, allowing users to create pixel art using mouse movements.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: etch,
      source_code_link: "https://github.com/Khaspper/etch-a-sketch",
      live_link: "https://khaspper.github.io/etch-a-sketch/",
    },
    {
      name: "Pokemon Rock Paper Scissors",
      description:
        "This project is a simple implementation of the classic game \"Rock Paper Scissors\" with a twist as part of The Odin Project's curriculum. It's a browser-based game that allows users to play against the computer.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: rps,
      source_code_link: "https://github.com/Khaspper/rps-odin/blob/main/README.md",
      live_link: "https://khaspper.github.io/rps-odin/",
    },
    {
      name: "Workout Tracker",
      description:
        "The Workout Tracker is a Python-based application that streamlines the exercise logging process through an intuitive user interface and robust data integration with Nutritionix and Sheety APIs.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Nutritionix API",
          color: "green-text-gradient",
        },
        {
          name: "Sheety API",
          color: "pink-text-gradient",
        },
      ],
      image: workoutTracker,
      source_code_link: "https://github.com/Khaspper/Udemy-Python-Projects/blob/master/Workout_tracker/main.py",
    },
    {
      name: "Stock News SMS",
      description:
        "An automated system that provides daily stock price updates and relevant news articles via SMS, enhancing decision-making for investors.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Twilio API",
          color: "green-text-gradient",
        },
        {
          name: "NewsAPI",
          color: "pink-text-gradient",
        },
      ],
      image: stock_news,
      source_code_link: "https://github.com/Khaspper/Udemy-Python-Projects/blob/master/stock-news/main.py",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };