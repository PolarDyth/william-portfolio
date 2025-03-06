import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function Projects() {
  const projects = [
    {
      img: "https://kzmqem5a2thfoqjtshg0.lite.vusercontent.net/placeholder.svg",
      title: "Project 1",
      description:
        "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
      skills: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    },
    {
      img: "https://kzmqem5a2thfoqjtshg0.lite.vusercontent.net/placeholder.svg",
      title: "Project 2",
      description:
        "A responsive web application for a local business, built with React and hosted on Netlify.",
      skills: ["React", "Netlify"],
    },
  ];

  return (
    <section className="py-20">
      <div className="text-left flex flex-col">
        <h2 className="text-4xl font-semibold">Featured Projects</h2>
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">
            A collection of my recent work showcasing my skills and expertise.
          </p>

          <Link to="/" className="p-0">
            <Button variant="link" className="cursor-pointer p-0">
              View All <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {projects.map((project, index) => (
            <div className="bg-card rounded-xl overflow-hidden flex flex-col group hover:shadow-lg hover:shadow-primary/20 transition-all">
                <div key={index} className="relative">
                    <img src={project.img} alt={project.title} className="object-cover w-full h-[240px]" />

                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                        <Button asChild variant="secondary" className="">
                                <Link to="/">View Project</Link>
                        </Button>
                    </div>
                </div>
                <div className="mt-4 p-6 flex flex-col flex-1 gap-3 text-left">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="mt-auto self">
                        {project.skills.map((skill, index) => (
                            <span key={index} className="g-background rounded-full px-2 py-1 text-sm">{skill}</span>
                        ))}
                    </div>
                </div>
          </div>
        ))}
      </div>
    </section>
  );
}
