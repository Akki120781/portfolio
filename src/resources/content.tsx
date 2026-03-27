import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Akshat",
  lastName: "Soni",
  name: "Akshat Soni",
  role: "Business Analyst and Aspiring Data Scientist",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi "], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Akki120781",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/akshat-12-soni/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/akshat_soni_12/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/akshat_soni_12",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:akshatsoni5380@gmail.com",
    essential: true,
  },
  {
    name: "Resume",
    icon: "document",
    link: "/resume.pdf",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Akki</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
    I'm Akshat, a Business Analyst<Text as="span" size="xl" weight="strong" />, where I craft intuitive dashboards and user experiences. After hours, I build my own projects.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/akshat-soni-gyeuca",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: [
      "Akshat is a third-year Business Analyst student with a strong interest in bridging data-driven insights and user-centric design.",
      "He is passionate about solving real-world business problems through analytics, intuitive dashboards, and effective communication.",
      "Eager to learn and contribute, Akshat is building a solid foundation in both business strategy and technology.",
    ],
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "IIT Ropar",
        timeframe: "Jan 2025 – Present",
        role: "MERN Stack Developer Intern (Virtual)",
        achievements: [
          <>
            Undergoing structured training in full-stack web development with the MERN stack (MongoDB, Express.js, React.js, Node.js) under IIT Ropar’s virtual internship program.
          </>,
          <>
            Building and deploying RESTful APIs with Node.js and Express, and designing interactive frontends using React.js with component-based architecture.
          </>,
          <>
            Working with MongoDB for database design, schema modeling, and CRUD operations integrated with backend services.
          </>,
        ],
        images: [],
      },
      {
        company: "LPU",
        timeframe: "2023 - Present",
        role: "Data Analyst Intern",
        achievements: [
          <>
            Created an end-to-end machine learning pipeline to predict AQI for Indian cities, processing 1M+ air
quality records and achieving R² ≈ 0.9 using Random Forest and XGBoost models.
          </>,
          <>
             Engineered CPCB-compliant AQI computation, feature pipelines, and an automated health-alert system
that translates model outputs into actionable advisories.
          </>,
          <>
             Automated data ingestion and pipeline updates with GitHub Actions, ensuring reproducibility and
continuous data refresh.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Interactive dashboard showcasing AQI predictions and health advisories.",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "LPU",
        timeframe: "2023 - Present",
        role: "Software Engineer Intern(Algorithm and DSA)",
        achievements: [
          <>
            Implemented A* pathfinding algorithm in Java within a state management system, optimizing route calculations by 30% for a logistics application.
          </>,
          <>
            Integrated traffic-weighted cost modeling for dynamic route optimization.
          </>,
           <>
           Applied heuristic functions to improve search efficiency, reducing average computation time by 25%.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Lovely Professional University",
        description: <>Studied Data Science and Business Analytics.</>,
      },
      {
        name: "Mount Litera Zee School, Indore",
        description: <>Completed 10th and 12th with 85% and 87% respectively.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Data Science & Analytics",
        description: (
          <>Transforming raw data into actionable insights using Machine Learning, SQL, and Power BI.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Power BI",
            icon: "chart",
          },
          {
            name: "SQL",
            icon: "database",
          },
        ],
        images: [
          {
            src: "/images/projects/aqi_monitoring.png",
            alt: "AQI Monitoring Dashboard",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/stock_prediction.png",
            alt: "Stock Prediction Analysis",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Full-Stack Development",
        description: (
          <>Building robust web applications and interactive dashboards with MongoDB, Express.js, React.js, and Node.js.</>
        ),
        tags: [
          {
            name: "React.js",
            icon: "react",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
          {
            name: "Express.js",
            icon: "javascript",
          },
          {
            name: "Git",
            icon: "github",
          },
        ],
        images: [
          {
            src: "/images/projects/stock_dashboard.png",
            alt: "Stock Dashboard Application",
            width: 16,
            height: 9,
          },
          {
             src: "/images/projects/route_navigator.png",
             alt: "Route Navigator Network Visualization",
             width: 16,
             height: 9,
          }
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
