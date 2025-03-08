import { Award, BarChart, Clock, Users, Zap } from "lucide-react"
import { useEffect, useState, JSX } from "react";
import { useParams } from "react-router-dom";
import ProjectGallery from "./components/ProjectGallery";
import ProjectHeader from "./components/ProjectHeader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProjectStats from "./components/ProjectStats";

interface ProjectPageProps {
  params: {
    slug: string
  }
}

interface Project {
  title: string
  description: string
  images: {
    src: string
    alt: string
    description: string
  }[]
  skills: string[]
  githubLink: string
  liveLink: string
  features: string[]
  challenges: string[]
  learnings: string[]
  stats: {
    label: string
    value: string
    icon: JSX.Element
  }[]
  timeline: {
    title: string
    date: string
    description: string
  }[]
  testimonial: {
    quote: string
  }
}

export default function ProjectPage() {



  const project = {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    images: [
      { 
        src: "https://kzmqem5a2thfoqjtshg0.lite.vusercontent.net/placeholder.svg", 
        alt: "E-Commerce Platform Dashboard",
        description: "Admin dashboard showing sales analytics and inventory management"
      },
      { 
        src: "https://kzmqem5a2thfoqjtshg0.lite.vusercontent.net/placeholder.svg", 
        alt: "Product Listing Page",
        description: "Responsive product catalog with filtering and sorting options"
      },
      { 
        src: "https://kzmqem5a2thfoqjtshg0.lite.vusercontent.net/placeholder.svg", 
        alt: "Shopping Cart",
        description: "User-friendly shopping cart with real-time updates"
      },
      { 
        src: "https://kzmqem5a2thfoqjtshg0.lite.vusercontent.net/placeholder.svg", 
        alt: "Checkout Process",
        description: "Streamlined checkout process with multiple payment options"
      },
    ],
    skills: ["React", "Java", "Spring Boot", "PostgreSQL", "Docker", "AWS"],
    githubLink: "https://github.com/yourusername/e-commerce-platform",
    liveLink: "https://e-commerce-platform-demo.vercel.app",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filter functionality",
      "Shopping cart and checkout process",
      "Admin panel for product and order management",
      "Integration with payment gateway",
      "Responsive design for mobile and desktop",
    ],
    challenges: [
      "Implementing secure user authentication and authorization",
      "Designing a scalable database schema for products, orders, and user data",
      "Optimizing performance for large product catalogs",
      "Ensuring data consistency across the frontend and backend",
    ],
    learnings: [
      "Gained experience in building full-stack applications",
      "Improved understanding of e-commerce business logic",
      "Learned best practices for secure payment processing",
      "Enhanced skills in state management and API design",
    ],
    stats: [
      { label: "Development Time", value: "12 weeks", icon: <Clock className="h-5 w-5 text-primary" /> },
      { label: "Team Size", value: "4 members", icon: <Users className="h-5 w-5 text-primary" /> },
      { label: "Code Coverage", value: "94%", icon: <Zap className="h-5 w-5 text-primary" /> },
      { label: "User Satisfaction", value: "4.8/5", icon: <Award className="h-5 w-5 text-primary" /> },
    ],
    timeline: [
      {
        title: "Project Planning & Research",
        date: "January 2023",
        description: "Conducted market research, defined requirements, and created wireframes."
      },
      {
        title: "Backend Development",
        date: "February 2023",
        description: "Built the API, database schema, and authentication system."
      },
      {
        title: "Frontend Implementation",
        date: "March 2023",
        description: "Developed the user interface, integrated with the backend API."
      },
      {
        title: "Testing & Deployment",
        date: "April 2023",
        description: "Conducted thorough testing and deployed to production."
      }
    ],
    testimonial: {
      quote: "This e-commerce platform transformed our business. The intuitive admin panel and robust feature set allowed us to scale our online presence significantly.",
      author: {
        name: "Sarah Johnson",
        role: "CEO, Fashion Boutique",
        avatar: "/placeholder.svg?height=100&width=100"
      }
    },
    insights: [
      {
        title: "Performance Optimization",
        content: "Implemented lazy loading and code splitting to improve page load times by 40%.",
        icon: <BarChart className="h-5 w-5 text-primary" />
      },
      {
        title: "Security Measures",
        content: "Integrated OAuth 2.0 and implemented CSRF protection to ensure secure user authentication.",
        icon: <Zap className="h-5 w-5 text-primary" />
      },
      {
        title: "Scalability Approach",
        content: "Designed with microservices architecture to handle increasing traffic and data volume.",
        icon: <Award className="h-5 w-5 text-primary" />
      }
    ],
    overview: `
      This e-commerce platform was developed to provide a comprehensive solution for online retailers. 
      The project focuses on creating a seamless shopping experience for users while giving store owners 
      powerful tools to manage their products and orders.
      
      The application is built with a React frontend and Spring Boot backend, with PostgreSQL as the database. 
      The system is containerized using Docker and deployed on AWS for scalability and reliability.
    `,
    process: `
      The development process followed an agile methodology, with regular sprints and iterative improvements. 
      The project began with extensive user research and wireframing to ensure the design met both customer 
      and business needs.
      
      After establishing the core architecture, I implemented the user authentication system, followed by 
      the product catalog and shopping cart functionality. The admin panel was developed last, with a focus 
      on providing comprehensive analytics and management tools.
    `,
  }

  const { slug } = useParams()
  const [projects, setProject] = useState<Project | null>(null)

  useEffect(() => {
    const selectedProject = project
    if (selectedProject) {
      setProject(selectedProject);
    }
  }, [slug])
  
  if (!projects) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Nav />
      <ProjectHeader 
        title={projects.title} 
        description={projects.description} 
        skills={projects.skills}
        github={projects.githubLink}
        demoLink={projects.liveLink}
      />
      <ProjectGallery images={projects.images}  />
      <ProjectStats stats={project.stats}/>
      <Footer />
    </div>
  )
}