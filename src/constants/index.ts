export interface Tag {
  id: number;
  name: string;
  path: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  subDescription: string[];
  href: string;
  logo: string;
  image: string;
  tags: Tag[];
}

export interface Social {
  name: string;
  href: string;
  icon: string;
}

export interface Experience {
  title: string;
  job: string;
  date: string;
  contents: string[];
}

export interface Review {
  name: string;
  username: string;
  body: string;
  img: string;
}

export const myProjects: Project[] = [
  {
    id: 1,
    title: "File Management System - StoreIt",
    description:
      "💾 Full-Stack Cloud Storage — Developed a web-based file storage and management solution using Next.js and Appwrite, enabling users to upload, view, and manage files in a cloud environment",
    subDescription: [
      "📊 Advanced Features — Implemented file categorization, usage statistics tracking, and a responsive user interface for optimal user experience",
      "🛠️ Technology Stack — Built with Next.js, TypeScript, Appwrite, React, Tailwind CSS, ShadCN, and other modern web technologies",
    ],
    href: "https://store-it-beryl.vercel.app/",
    logo: "",
    image: "/assets/projects/storeit.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 3,
        name: "AppWrite",
        path: "/assets/logos/appwrite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Assistly AI App",
    description:
      "🤖 Conversational AI Platform — Created a React-based web application with integrated chatbot functionality powered by the TogetherAI API.",
    subDescription: [
      "📱 Data Management — Utilized GraphQL and Apollo Client for efficient data interactions, implementing serverless functions through Next.js API routes.",
      "🔐 User Authentication — Integrated Clerk for secure user authentication and identity management.",
      "🧰 Technology Stack — Built with Next.js, Clerk, TypeScript, Tailwind CSS, DaisyUI, GraphQL, and PostgreSQL",
    ],
    href: "https://assistly-ai-app-two.vercel.app/",
    logo: "",
    image: "/assets/projects/assistly_ai.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "Clerk",
        path: "/assets/logos/clerk.svg",
      },
      {
        id: 3,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Uber Clone",
    description:
      "🚗 Full-stack Ride-Hailing Platform — Developed a comprehensive ride-sharing application clone with React-Vite frontend and Node.js-Express backend for seamless transportation services",
    subDescription: [
      "🔒 Secure Authentication — Implemented JWT tokens and Bcrypt hashing for robust user and captain signup/login and profile management",
      "⚡ Real-time Updates — Engineered Socket.IO/WebSocket communication for instant driver-passenger status notifications and ride tracking",
      "🗺️ Interactive Mapping — Created dynamic pickup/drop-off selection and route rendering powered by Google Maps JavaScript API",
      "🔄 RESTful Architecture — Built Express.js API endpoints with MongoDB (Mongoose) schemas for ride booking, management, and persistent data storage",
    ],
    href: "https://github.com/SanketLV/Uber",
    logo: "",
    image: "/assets/projects/uber-clone.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "Express.js",
        path: "/assets/logos/expressjs.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Interactive Portfolio Website",
    description:
      "✨ Modern Developer Showcase — Created an immersive, interactive portfolio using Three.js and React to highlight projects and professional experience with engaging 3D elements.",
    subDescription: [
      "🌐 3D Visualization — Implemented Three.js for stunning 3D elements and animations that create an engaging, memorable user experience",
      "⚡ Performance Optimization — Utilized React with Vite for fast loading times and smooth interactions, ensuring optimal performance across devices",
      "🎨 Custom Design — Designed and developed a unique, responsive interface with Tailwind CSS that effectively showcases projects and skills",
      "🔄 Dynamic Content — Built with TypeScript for type safety and implemented modular components for easy content updates and maintenance",
    ],
    href: "https://sanket.is-a.dev/",
    logo: "",
    image: "/assets/projects/portfolio.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Three.js",
        path: "/assets/logos/threejs.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  // {
  //   id: 5,
  //   title: "WordPress Custom Theme",
  //   description:
  //     "A fully customizable WordPress theme optimized for performance and SEO.",
  //   subDescription: [
  //     "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
  //     "Integrated Tailwind CSS for modern styling and UI enhancements.",
  //     "Optimized SEO and page speed using Vite.js for fast builds.",
  //     "Implemented custom widgets and plugin compatibility for extended functionality.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/wordpress-theme.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "WordPress",
  //       path: "/assets/logos/wordpress.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "HTML5",
  //       path: "/assets/logos/html5.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "CSS3",
  //       path: "/assets/logos/css3.svg",
  //     },
  //     {
  //       id: 4,
  //       name: "Vite.js",
  //       path: "/assets/logos/vitejs.svg",
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: "Online Learning Platform",
  //   description:
  //     "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
  //   subDescription: [
  //     "Built using Blazor WebAssembly for a seamless SPA experience.",
  //     "Implemented video streaming with Azure Media Services.",
  //     "Added a quiz system with dynamic question generation and real-time grading.",
  //     "Integrated Stripe API for secure payment processing.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/elearning.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "Blazor",
  //       path: "/assets/logos/blazor.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "Azure",
  //       path: "/assets/logos/azure.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "Stripe",
  //       path: "/assets/logos/stripe.svg",
  //     },
  //     {
  //       id: 4,
  //       name: "TailwindCSS",
  //       path: "/assets/logos/tailwindcss.svg",
  //     },
  //   ],
  // },
];

export const mySocials: Social[] = [
  {
    name: "WhatsApp",
    href: "https://github.com/SanketLV",
    icon: "/assets/socials/github-white.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/sanket-lakhani/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences: Experience[] = [
  {
    title: "SDE - 1",
    job: "Dotnitron Technologies",
    date: "2023-2024",
    contents: [
      "🚀 Developed POC Projects — Leveraged Next.js, Plasmo, and Python FastAPI to create and refine proof-of-concept projects, conducting thorough viability assessments aligned with business requirements",
      "🤝 Cross-Team Collaboration — Fostered effective communication and teamwork by collaborating closely with various teams to ensure technical solutions aligned perfectly with business objectives",
      "🔍 Technology Research — Conducted comprehensive research to identify emerging technologies and innovative products that strategically supported company goals and market positioning",
      "📈 Technical Growth Initiatives — Implemented efficient development practices that simultaneously enhanced technical capabilities and supported long-term business growth strategies",
    ],
  },
  // {
  //   title: "Back-End Developer",
  //   job: "Car Manufacture",
  //   date: "2023-2024",
  //   contents: [
  //     "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
  //     "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
  //     "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
  //     "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
  //     "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
  //   ],
  // },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2024-Present",
    contents: [
      "🎨 Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "🔄 Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
export const reviews: Review[] = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
