import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const allProjects = [
    {
      title: "Remote Item Inspection & Delivery Service",
      description: "A comprehensive mobile and web application that facilitates remote item inspection and delivery services. The application addresses the growing need for reliable inspection services before purchasing items, especially in scenarios where buyers cannot physically examine products. Features include user registration, inspection request management, delivery coordination, agent assignment, real-time tracking, and secure payment processing.",
      tags: ["Flutter", "Firebase", "Supabase", "Dart", "Google Maps API"],
      imageUrl: "/project_images/Mohamad-Sharif-21587035-Remote-Item-Inspection-and-Delivery-Service-for-Long-Distance-Purchasesfinalreport/001.webp",
      githubUrl: "https://github.com/Mohamad-ctrl/Remote-Item-Inspection-and-Delivery-Service-Application",
      reportId: "remote-item-inspection",
      featured: true
    },
    {
      title: "Bicycle Shop App",
      description: "An intuitive e-commerce mobile application for browsing and purchasing bicycles. The app provides a seamless shopping experience with features like product browsing, search functionality, shopping cart, user authentication, and profile management. Built with a focus on elegant UI design using an off-white, black, and white color palette.",
      tags: ["Flutter", "Kotlin", "Firebase Realtime DB", "Figma", "Git"],
      imageUrl: "/project_images/BicycleShopApp/001.webp",
      githubUrl: "https://github.com/Mohamad-ctrl/Bicycle-Shop-Application",
      reportId: "bicycle-shop"
    },
    {
      title: "Smart SOSA E-commerce Website",
      description: "A smart home product e-commerce website built using the Odoo framework. This group project focused on creating a comprehensive online store with product management, order tracking, user accounts, shopping cart, wishlist functionality, and a secure checkout process. Includes an admin panel for store management.",
      tags: ["Odoo", "Python", "PostgreSQL", "Scrum", "Web Development"],
      imageUrl: "/project_images/SmartSOSAE-Commercewebsite/001.webp",
      reportId: "smart-sosa"
    }
  ];

  return (
    <Layout>
      <div className="bg-secondary/30 border-b-2 border-border py-20">
        <div className="container">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A collection of my work in mobile and web development, featuring cross-platform applications, e-commerce solutions, and system architectures.
          </p>
        </div>
      </div>

      <div className="container py-20">
        {/* Filter/Tags Section (Visual only for now) */}
        <div className="flex flex-wrap gap-2 mb-12">
          {["All", "Mobile App", "Web Development", "Flutter", "Full Stack"].map((filter, i) => (
            <Badge 
              key={filter}
              variant={i === 0 ? "default" : "outline"}
              className={`rounded-none px-4 py-2 text-sm font-mono uppercase tracking-wider cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors ${i === 0 ? "bg-accent text-accent-foreground hover:bg-accent/90" : "bg-background"}`}
            >
              {filter}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
