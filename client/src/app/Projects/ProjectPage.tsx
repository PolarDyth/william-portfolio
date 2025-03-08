import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ProjectCard from "@/components/ProjectCard";


const projects = [

  {
    img: "https://kzmqem5a2thfoqjtshg0.lite.vusercontent.net/placeholder.svg",
    title: "Project 1",
    description:
      "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    skills: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    github: "github.com/polardyth",
    demo: "test.com"
  },
  {
    img: "https://kzmqem5a2thfoqjtshg0.lite.vusercontent.net/placeholder.svg",
    title: "Project 2",
    description:
      "A responsive web application for a local business, built with React and hosted on Netlify.",
    skills: ["React", "Netlify"],
    github: "github.com/polardyth",
  },
  {
    img: "https://kzmqem5a2thfoqjtshg0.lite.vusercontent.net/placeholder.svg",
    title: "Project 3",
    description:
      "A mobile app for tracking fitness goals, built with React Native and Expo.",
    skills: ["React Native", "Expo"],
    github: "github.com/polardyth",
  },
  {
    img: "https://kzmqem5a2thfoqjtshg0.lite.vusercontent.net/placeholder.svg",
    title: "Project 4",
    description:
      "A data visualization tool for analyzing sales data, built with D3.js and hosted on GitHub Pages.",
    skills: ["D3.js", "GitHub Pages"],
    github: "github.com/polardyth",
  },
  {
    img: "https://kzmqem5a2thfoqjtshg0.lite.vusercontent.net/placeholder.svg",
    title: "Project 5",
    description:
      "A machine learning model for predicting stock prices, built with Python and TensorFlow.",
    skills: ["Python", "TensorFlow"],
    github: "github.com/polardyth",
  },
  {
    img: "https://kzmqem5a2thfoqjtshg0.lite.vusercontent.net/placeholder.svg",
    title: "Project 6",
    description:
      "A social media platform for connecting with friends and family, built with React and Firebase.",
    skills: ["React", "Firebase"],
    github: "github.com/polardyth",
  },
  {
    img: "https://kzmqem5a2thfoqjtshg0.lite.vusercontent.net/placeholder.svg",
    title: "Project 7",
    description:
      "A real-time chat application for group projects, built with React and Socket.IO.",
    skills: ["React", "Socket.IO"],
    github: "github.com/polardyth",
  },
];

export default function ProjectPage() {

  return (
    <>
      <Nav />
      <div className="flex flex-col py-20 gap-4">
        <div className="mb-12 text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore my portfolio of projects spanning web development, data science, and more. Each project represents a
            unique challenge and learning opportunity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              img={[project.img]}
              title={project.title}
              description={project.description}
              skills={project.skills}
              github={project.github}
              demoLink={project.demo}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}