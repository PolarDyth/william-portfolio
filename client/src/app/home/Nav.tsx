import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const navLocations = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export default function Nav() {
    return (
        <nav className="flex justify-between items-center">
           <div className="font-bold text-2xl">
            <Link to="/" className="flex gap-4">
              <span className="text-primary">WILLIAMS</span>
              <span>PORTFOLIO</span>
            </Link>
           </div>
           <div className="flex gap-4 items-center">
            {navLocations.map((location, index) => (
              <Link to={location.href} key={index} className="font-medium hover:text-primary transition-colors">
                {location.name}
              </Link>
            ))}
           </div>
           <div className="">
            <Button asChild className="font-semibold">
              <Link to="/contact">
                Contact Me
              </Link>
            </Button>
           </div>
        </nav>
    )
}