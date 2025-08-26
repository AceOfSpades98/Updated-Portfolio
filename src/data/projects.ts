export type Project = {
  title: string;
  img: string;
  alt: string;
  desc: string;
  tools: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Password Strength Checker",
    img: "images/Projects/PasswordChecker.png",
    alt: "Password Strength Checker",
    desc:
      "A simple GUI to validate the strength of your password by checking a list of common passwords and other criteria.",
    tools: ["Python", "Tkinter"],
    href: "https://github.com/AceOfSpades98/passwordStrengthChecker",
  },
  {
    title: "Pay Calculator",
    img: "images/Projects/PayCalculator.png",
    alt: "Pay Calculator",
    desc:
      "A simple GUI to calculate a net pay rate when an employee's rate of pay and hours worked are entered. My first ever project!",
    tools: ["Python", "Tkinter"],
    href: "https://github.com/AceOfSpades98/payCalculator",
  },
  {
    title: "Live WebSocket Chat",
    img: "images/Projects/SocketChat.png",
    alt: "Live WebSocket Chat",
    desc:
      "A live chat application with login; stores user credentials and messages in a database.",
    tools: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
    href:
      "https://github.com/Keyin-SD14-S3/fullstack-databases-final-sprint-team-super-awesome-team-nl-nw-js-hs",
  },
  {
    title: "Genealogy Website",
    img: "images/Projects/whiffenGene.png",
    alt: "Genealogy Website",
    desc:
      "A simple webpage intended to be used for my genealogy research.",
    tools: ["HTML", "CSS"],
    href: "https://github.com/NoahWhiffen/familyTreeSite",
  },
  {
    title: "Dog Image API",
    img: "images/Projects/dogApi.png",
    alt: "Dog API App",
    desc:
      "Pulls dog images from an API based on selected breed and desired number of images.",
    tools: ["JavaScript", "React", "CSS"],
    href: "https://github.com/NoahWhiffen/dog-breed-gallery",
  },
  {
    title: "To-Do List App",
    img: "images/Projects/ToDoApp.png",
    alt: "To-Do App",
    desc:
      "A to-do list app that allows the user to keep track of tasks.",
    tools: ["JavaScript", "React", "CSS"],
    href: "https://github.com/NoahWhiffen/to-do-app",
  },
  {
    title: "Gym Management App",
    img: "images/Projects/GymManagement.png",
    alt: "Gym Management System",
    desc:
      "A CLI app to manage a gym’s customers and employees and store necessary data in a database.",
    tools: ["Java", "PostgreSQL"],
    href: "https://github.com/Noah-Lambe/Gym_Management_System",
  },
  {
    title: "Math Competition App",
    img: "images/Projects/mathCompetition.png",
    alt: "Math Competition App",
    desc:
      "An Express app that generates random math questions and tracks high scores.",
    tools: ["JavaScript", "Express.js", "CSS"],
    href:
      "https://github.com/Keyin-SD14-S3/fullstack-qap-2-NoahWhiffen",
  },
];


// Keeping these just in case I decide I want to display them later

  // {
  //   title: "Bitcoin Price Tracker",
  //   img: "images/Projects/bitcoinTracker.png",
  //   alt: "Bitcoin Price Tracker",
  //   desc:
  //     "A React app that pulls the current price of Bitcoin from an API and displays it in 4 separate currencies.",
  //   tools: ["JavaScript", "React", "CSS"],
  //   href: "https://github.com/AceOfSpades98/bitcoin-price-app",
  // },
  // {
  //   title: "CLI Menu Application",
  //   img: "images/Projects/PythonMenu.png",
  //   alt: "Python Menu App",
  //   desc:
  //     "A comprehensive menu application that runs 5 different programs based on user input.",
  //   tools: ["Python"],
  //   // no link provided
  // },
  // {
  //   title: "One Stop Insurance Company",
  //   img: "images/Projects/OneStopInsurance.png",
  //   alt: "Insurance Company App",
  //   desc: "An application that generates invoices for an insurance company.",
  //   tools: ["Python"],
  //   // no link provided
  // },
  // {
  //   title: "Conference Manager",
  //   img: "images/Projects/conferenceManager.png",
  //   alt: "Conference Management App",
  //   desc:
  //     "A CLI app to manage conference information (speakers, topics, etc.) using PostgreSQL queries.",
  //   tools: ["JavaScript", "Node.js", "PostgreSQL"],
  //   href: "https://github.com/NoahWhiffen/qap4-Term1/tree/main/PythonQAP4",
  // },