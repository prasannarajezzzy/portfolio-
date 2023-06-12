/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Prasanna V.",
  title: "Hi all, I'm Prasanna",
  subTitle1: emoji("As an experienced Engineer with a strong background in various areas like Data Science and Full Stack Web Development"),
  subTitle2: emoji("With a keen focus on programming, problem-solving, and research, I am eager to make a valuable contribution to your team"),
  resumeLink: "https://drive.google.com/file/d/1HUkYTMuta3mC4DDKdACHxdXZI48qKkMj/view"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/prasannarajezzzy",
  linkedin: "https://www.linkedin.com/in/prasanna-rajendra/",
  microsoft: "mailto: prvaddkkepurakkal@csuchico.edu",
  gmail: "mailto: prasannavadk@gmail.com",
  // // facebook: "https://www.facebook.com/prasanna.kanchan/",
  envelope: "https://medium.com/@sauravnk30",
  // // Instagram and Twitter are also supported in the links!
  // twitter: "https://twitter.com/sauravnk30"
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Blockchain and backend developer who likes to explore new tech",
  skills: [
    emoji("⚡ Machine Learning "),
    emoji("⚡ Computer Vision"),
    emoji("⚡ Natural Language Processing"),
    emoji("⚡ Sensor Fusion"),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "django"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Pytorch"
    },
    {
      skillName: "mysql"
    },
    {
      skillName: "Tensorflow"
    },
    {
      skillName: "NLTK"
    },
    {
      skillName: "Scikit-learn"
    },
    {
      skillName: "Docker"
    },
    {
      skillName: "Reactjs"
    },
    {
      skillName: "VueJS"
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Science Intern",
      company: "Center for Healthy Communities",
      companylogo: require("./assets/images/chc.jpg"),
      date: "August 2022 – December 2022",
      desc: "",
      descBullets: [
        "Achieved 88% accuracy using ensemble methods in machine learning algorithm identifying most effective campaign partner, resulting 20% increase in conversion rate",
        "Applied Natural Language Processing text analytics, cleaning, and topic modeling analyzing over 3000 feedback and survey data",
      ]
    },
    {
      role: "Machine learning Engineer",
      company: "EdCast Asia Pvt. Ltd",
      companylogo: require("./assets/images/edcast.png"),
      date: "July 2020 – July 2022",
      descBullets: [
        "Strategize and Implemented Computer Vision API model attaining 92% accuracy, detecting real-time elements, integrating it with Web Application",
        "Designed restful API architecture at backend by implementing multithreading to fasten response time by 80%",
        "Engineered single-page application with React JS, improving front-end development, component lifecycle, and modular reusability, leading to a 33% increase in turnaround time",
        "Resolved critical bugs and issues, performing comprehensive debugging to ensure high-quality code"
      ]
    },
    {
      role: "Artifical Intelligence Engineer",
      company: "Indian Institute of Tropical Meteorology",
      companylogo: require("./assets/images/IITM.png"),
      date: "Jan 2019 – Feb 2019",
      desc: "Photovoltaic cells crack detection using Computer Vision.\nTech stack used:",
      descBullets: [
        "Created efficient Deep Learning algorithm SRCNN (Super-Resolution Convolutional Neural Network) with 93% accuracy which performs pixel-wise arrangements of low to high-resolution image",
        "Assisted scientists in the heavy computation of 30 years of rainfall data processing data about size 30TB and model training on India's fastest supercomputer (HPC), Prathyush and Mihir supercomputer"
      ]
    },
    {
      role: "Computer Vision Intern",
      company: "Mahindra Susten",
      companylogo: require("./assets/images/susten-logo.png"),
      date: "Jan 2019 – Feb 2019",
      desc: "Photovoltaic cells crack detection using Computer Vision.\nTech stack used:",
      descBullets: [
        "Built an automated system with Deep learning model annotation, segmentation, and recognition of cells with 0.92 F1 score on solar panels’ infrared images and temperature analysis",
        "System reduced manual reporting by 60%, resulting in increased efficiency and productivity"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "SauravKanchan", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/ISRO.svg"),
    },
    {
      image: require("./assets/images/dogwalker.png"),

    },
    {
      image: require("./assets/images/dayswappers.png"),
    },
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Hackathons and Competition Won ",
      subtitle: "",
      image: require("./assets/images/hackathon.gif"),
      descBullets: [
        "Smart India Hackathon 2020",
        "BitCamp 2019, CSI RAIT",
        "Excellent Paper Presentation at IRAJ",
        "Terna IOT Competitions",
      ],
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"}
      ]
    },
    {
      title: "Research Papers",
      subtitle: "",
      image: require("./assets/images/research.gif"),
      descBullets: [
        "[1] Deep-Learning based down-scaling of summer monsoon rainfall data over Indian region”",
        "[2] Smart Surveillance Using OpenCV, Motion Analysis And Facial Landmark",
        "[3] Photovoltaic Cell Defect Detection in Solar Panel"
      ],
      footerLink: [
        {
          name: "Research [1]",
          url: "https://search.proquest.com/openview/c33191ce44fd7ab76fec7ba08a653848/1?pq-origsite=gscholar&cbl=2029987"
        },
        {
          name: "Research [2]",
          url: "https://www.academia.edu/42015328/Novel_Approaches_to_Text_Steganography?coauthor_invite=e85c2e0d5f38a0cd6f8c3f7c49f44b0e&src=view_btn"
        },
        {
          name: "Research [3]",
          url: "https://digitalxplore.org/pps.php?pd_id=6934"
        }
      ]
    },

    {
      title: "Certfications",
      subtitle: "",
      image: require("./assets/images/coursera.svg"),
      descBullets: [
        "Machine Learning by Standford University",
        "Introduction to Deep Learning & Neural Networks with Keras by IBM",
        "Python 101 for Data Science",
        "Interactivity with JavaScript",
      ],
      footerLink: [
        {name: "Essentials", url: "https://courses.cognitiveclass.ai/certificates/53b82d96041b4399801af075ec2ff813"},
        {
          name: "Foundation Developer",
          url: "https://courses.cognitiveclass.ai/certificates/ee212efde2834dd8a4f6ada799ccfc3a"
        }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://www.arcana.network/blog/web3-entry-barriers-with-meta-transactions",
      title: "Breaking Web3 Entry Barriers with Meta Transactions",
      description: "A Meta-Transaction refers to a method where a user signs and submits a transaction without incurring any gas fees."
    },
    {
      url: "https://medium.com/@sauravnk30/anonymous-web-authentication-4d41b2c26bee",
      title: "Anonymous web authentication",
      description: "A modern approach to authenticate users without email and password. This blog discuss the problem " +
        "with current implementation and it's solution"
    },
    {
      url: "https://medium.com/coinmonks/compiling-deploying-and-interacting-with-smart-contract-using-javascript-641cf0342824",
      title: "Compiling, Deploying and Interacting with Smart Contract using JavaScript",
      description: "Instead of using truffle you can also compile, deploy and interact with smart contracts using ethersjs with ease"
    },
    {
      url: "https://dev.to/sauravkanchan/svelte-bootstrap-with-material-design-1j99",
      title: "Svelte Bootstrap with Material Design",
      description: "This project is based on the latest Bootstrap 4 and Svelte 3. Absolutely no jQuery. It is inspired by mdbreact. This blog post will be about how to install it and use it."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "How to begin your web3 developer journey?",
      subtitle: "TPH's builderseries: part 8",
      event_url: "https://twitter.com/0xTPH/status/1560246399102754816"
    },
    {
      title: "Shamir's Secete Sharing",
      subtitle: "Cryptographic algorithm to share secrete",
      event_url: "https://twitter.com/ArcanaNetwork/status/1464150537901801474"
    }, 
    {
      title: "Breaking into Blockchain",
      subtitle: "Practical workshop on the fundamentals of Blockchain technology.",
      event_url: "https://twitter.com/0xTPH/status/1560246399102754816"
    },
    {
      title: "Faculty development program in UMIT",
      subtitle: "Training program focused on the Blockchain technology",
      event_url: "https://www.picuki.com/media/2068816140826916633"
    },
    {
      title: "Automate the boring stuffs with python",
      subtitle: "Workshop conducted by ISTE RAIT",
      event_url: "https://www.facebook.com/isteraitofficial/photos/a.2047088395524310/2510579635841848/?type=3"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 530 591-0471",
  email_address: "prasannavadk@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName: "sauravnk30"//Replace "twitter" with your twitter username without @

};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
