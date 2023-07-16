/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Prasanna V",
  title: "Hi all, I'm Prasanna",
  subTitle: emoji("A Data Scientist with 3 years of experience in work and Projects. I excel in  data analytics, data visualization, machine learning, natural language processing (NLP), predictive modeling, and data mining. With expertise in programming, problem-solving, and research."),
  resumeLink: "https://drive.google.com/file/d/1HUkYTMuta3mC4DDKdACHxdXZI48qKkMj/view?usp=sharing&usp=embed_facebook"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/prasannarajezzzy",
  linkedin: "https://www.linkedin.com/in/prasanna-rajendra/",
  gmail: "prasannavadk@gmail.com",
  // facebook: "https://www.facebook.com/prasanna.kanchan/",
  medium: "https://medium.com/@sauravnk30",
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Data lover who love solving problems with data",
  skills: [
    emoji("⚡ Building LLM models"),
    emoji("⚡ Machine Learning "),
    emoji("⚡ Deep Learning "),
    emoji("⚡ Web Development"),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Machine Learning"
    },
    {
      skillName: "Natural Language Processing"
    },
    {
      skillName: "tensorflow"
    },
    {
      skillName: "scikit"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "cpp",
    },
    {
      skillName: "django"
    },
    {
      skillName: "react"
    },
    {
      skillName: "vue"
    },
    {
      skillName: "Flask"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
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
      company: "Center for Healthy Communities, Chico, CA",
      companylogo: require("./assets/images/chc.jpg"),
      date: "August 2022 - December 2022",
      desc: "",
      descBullets: [
        "Achieved 88% accuracy using ensemble methods in machine learning algorithm identifying most effective campaign partner, resulting 20% increase in conversion rate",
        "Applied Natural Language Processing (NLP) techniques, including BERT, for text analytics, data cleaning, and topic modeling to analyze and process over 3000 feedback and survey data, providing valuable insights for decision-making"
      ]
    },
    {
      role: "Software Engineer",
      company: "Edcast Pvt Ltd",
      companylogo: require("./assets/images/edcast.png"),
      date: "July 2020 - July 2022",
      descBullets: [
        "Engineered single-page application with Vue JS, improving front-end development, component lifecycle, and modular reusability, leading to a 33% increase in turnaround time",
        "Strategize and Implemented Computer Vision API model attaining 92% accuracy, detecting real-time elements, integrating it with Web Application",
        "Designed restful API architecture at backend by implementing multithreading to fasten response time by 80%",
        "Resolved critical bugs and issues, performing comprehensive debugging to ensure high-quality code"
      ]
    },
    {
      role: "Artificial Intelligence Research Intern",
      company: "Indian Institute of Tropical Meteorology (IITM),Pune",
      companylogo: require("./assets/images/IITM.png"),
      date: "July 2019 - March 2020",
      desc: "Photovoltaic cells crack detection using Computer Vision.\nTech stack used:",
      descBullets: [
        "Created efficient Deep Learning algorithm SRCNN (Super-Resolution Convolutional Neural Network) with 93% accuracy which performs pixel-wise arrangements of low to high-resolution image",
        "Assisted scientists in the heavy computation and ETL of 30 years of rainfall data processing large datasets about size 25TB and model training on India's fastest supercomputer (HPC), Prathyush and Mihir supercomputer"
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
  githubUserName: "Prasanna Rajendra", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false
};


// // Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/isro.svg"),
      link: "https://github.com/prasannarajezzzy/ISRO-NowCasting-using-ConvLSTM"
    },
    {
      image: require("./assets/images/Codex.png"),
      link: "https://www.instagram.com/codex_it_solutions/?igshid=MzRlODBiNWFlZA%3D%3D"
    },
    {
      image: require("./assets/images/dog-walker.png"),
      link: "https://github.com/prasannarajezzzy/Dog-walker-Searcher"
    },
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Hackathons Won",
      subtitle: "",
      image: require("./assets/images/hackathon.gif"),
      descBullets: [
        
        "Chief Technical Officer Grigora Avis Technical Club, California State University, Chico, 2022",
        "Chief Executive Officer CodeX Edtech startup connecting talent with Opportunities 2020",
        "Winner of Smart India Hackathon, under 1500 participants in ISRO (Indian Space Research Organization) Domain 2020",
        "Excellent Paper Presentation Award",
        "Winner of Terna IOT Competition",
        "3rd runner up in Bitcamp conducted by CSI RAIT"
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
        "[1] Deep-Learning based down-scaling of summer monsoon rainfall data over Indian region published in Theoretical and  Applied Climatology Journal 2020",
        "[2] Smart Surveillance Using OpenCV, Motion Analysis And Facial LandmarkSmart Surveillance Using OpenCV, Motion Analysis And Facial Landmark  SSRG International Journal of VLSI & Signal Processing (SSRG - IJVSP) · Jun 10, 2020",
        "[3] Photovoltaic Cell Defect Detection in Solar Panel"
      ],
      footerLink: [
        {
          name: "Research [1]",
          url: "https://www.researchgate.net/figure/An-overview-of-SRCNN-and-DeepSD-methods-In-the-DeepSD-the-downscaling-is-done-in-steps_fig2_346143605"
        },
        {
          name: "Research [2]",
          url: "https://www.internationaljournalssrg.org/IJVSP/2020/Volume7-Issue1/IJVSP-V7I1P103.pdf"
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
      image: require("./assets/images/ibm.png"),
      descBullets: [
        "Machine Learning by Standford University ",
        "Introduction to Deep Learning & Neural Networks with Keras by IBM",        
        "Interactivity with JavaScript Interactivity with JavaScript",
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
      url: "",
      title: "Basics of NLP",
      description: "A small introduction to NLP and its challenges"
    },
    {
      url: "",
      title: "Transformer and LLM",
      description: "Basic Intoduciton and code and paper reiview to Transformer"
    },

  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Anybody can code with Python..",
      subtitle: "Live Python Coding with Experts",
      event_url: "https://www.instagram.com/p/CSjYCi-IVVd/?igshid=MzRlODBiNWFlZA%3D%3D"
    },
    {
      title: "GET INTERVIEW READY 1.0!",
      subtitle: "Bringing you everything related to Coding, Interviews, Internships, Live coding Webinars, Podcasts ",
      event_url: "https://www.instagram.com/p/CSZTVWwDGNu/?igshid=MzRlODBiNWFlZA%3D%3D"
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

  userName: "prasannavadk@gmail.com"//Replace "twitter" with your twitter username without @

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
