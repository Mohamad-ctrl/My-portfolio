import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Terminal } from "lucide-react";
import { Link } from "wouter";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";

export default function Home() {
  const featuredProjects = [
    {
      title: "Remote Item Inspection & Delivery",
      description: "A comprehensive mobile and web application that facilitates remote item inspection and delivery services. Connects users with qualified inspection agents to verify item conditions before purchase.",
      tags: ["Flutter", "Firebase", "Supabase", "Dart"],
      imageUrl: "/project_images/Mohamad-Sharif-21587035-Remote-Item-Inspection-and-Delivery-Service-for-Long-Distance-Purchasesfinalreport/001.webp",
      githubUrl: "https://github.com/Mohamad-ctrl/Remote-Item-Inspection-and-Delivery-Service-Application",
      reportId: "remote-item-inspection",
      featured: true
    }
  ];

  const experiences = [
    {
      role: "Software Engineer",
      company: "Ibtikar",
      period: "Sep 2024 – Present",
      location: "Remote",
      description: [
        "Developed mobile applications for cross-platform compatibility using Flutter (Dart) and integrated backend services built with Spring Boot (Java).",
        "Collaborated with product teams to create APIs that were scalable, optimize the flow of data and improve user experience.",
        "Conducted code reviews and embedded clean architecture and CI/CD processes in order to build sustainable releases."
      ],
      skills: ["Flutter", "Spring Boot", "Java", "Dart", "API Design"]
    },
    {
      role: "QA Engineer Intern",
      company: "ThingLogix",
      period: "Jun 2024 – Sep 2024",
      location: "Remote",
      description: [
        "Created automated backend and UI tests in Python, optimizing test coverage and decreasing regression periods.",
        "Identified performance bottlenecks in the system and optimized scripts for testing efficiency and reliability and scalability.",
        "Worked in Agile sprints with developers and analysts to align QA priorities with the needs of the client."
      ],
      skills: ["Python", "Automation Testing", "Performance Optimization"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center border-b-2 border-border overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.png" 
            alt="Abstract Technical Background" 
            className="w-full h-full object-cover opacity-20 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border-2 border-border bg-secondary font-mono text-sm font-bold uppercase tracking-wider">
              <span className="h-2 w-2 bg-green-500 animate-pulse rounded-full"></span>
              Available for work
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-600">Scalable</span> Software
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed font-light">
              I'm <span className="font-bold text-foreground">Mohamad Sharif</span>, a Full-Stack Software Engineer specializing in high-performance mobile and web applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/projects">
                <Button size="lg" className="neo-button text-lg h-14">
                  View Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button asChild variant="outline" size="lg" className="h-14 border-2 border-border hover:bg-secondary text-lg font-bold uppercase tracking-wider rounded-none">
                <a href="/Mohamad-Sharif-Resume.pdf" download>
                  Download CV <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Visual/Terminal */}
          <div className="hidden lg:block relative">
            <div className="neo-card bg-black text-green-500 font-mono p-6 rounded-none min-h-[400px] flex flex-col">
              <div className="flex items-center justify-between border-b border-green-500/30 pb-4 mb-4">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-green-500/70">mohamad@portfolio:~/skills</div>
              </div>
              <div className="space-y-4 text-sm md:text-base">
                <div className="flex gap-2">
                  <span className="text-blue-400">➜</span>
                  <span className="text-purple-400">~</span>
                  <span className="typing-effect">whoami</span>
                </div>
                <div className="pl-4 text-white/90">
                  Full-Stack Engineer | Flutter Expert | Clean Code Enthusiast
                </div>
                
                <div className="flex gap-2 pt-2">
                  <span className="text-blue-400">➜</span>
                  <span className="text-purple-400">~</span>
                  <span>ls -la ./skills</span>
                </div>
                <div className="pl-4 grid grid-cols-2 gap-x-8 gap-y-1 text-white/80">
                  <div>drwx------ Flutter</div>
                  <div>drwx------ Spring_Boot</div>
                  <div>drwx------ ReactJS</div>
                  <div>drwx------ Python</div>
                  <div>drwx------ PostgreSQL</div>
                  <div>drwx------ CI/CD</div>
                </div>

                <div className="flex gap-2 pt-2">
                  <span className="text-blue-400">➜</span>
                  <span className="text-purple-400">~</span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-[-20px] right-[-20px] w-full h-full border-2 border-accent bg-transparent"></div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                Selected Works
              </h2>
              <div className="h-2 w-24 bg-accent"></div>
            </div>
            <Link href="/projects">
              <Button variant="link" className="text-lg font-bold uppercase tracking-widest hover:text-accent p-0">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-secondary/30 border-y-2 border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 sticky top-24">
                Experience
              </h2>
              <p className="text-muted-foreground text-lg mb-8 sticky top-40">
                A timeline of my professional journey in software engineering, from internships to full-time roles.
              </p>
              <Link href="/experience">
                <Button variant="outline" className="hidden lg:inline-flex sticky top-64 border-2 border-border hover:bg-accent hover:text-accent-foreground font-bold uppercase tracking-wider rounded-none">
                  Full Resume <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="lg:col-span-8 relative">
              {/* Vertical Line for Desktop */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-border hidden md:block"></div>
              
              <div className="space-y-12 md:pl-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Dot for Desktop */}
                    <div className="absolute left-[-53px] top-6 h-4 w-4 bg-accent border-2 border-border hidden md:block z-10"></div>
                    <ExperienceCard {...exp} />
                  </div>
                ))}
              </div>
              
              <div className="mt-8 lg:hidden">
                <Link href="/experience">
                  <Button variant="outline" className="w-full border-2 border-border hover:bg-accent hover:text-accent-foreground font-bold uppercase tracking-wider rounded-none">
                    Full Resume <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-8 max-w-4xl mx-auto leading-tight">
            Ready to build something <span className="text-accent">extraordinary</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            I'm currently available for freelance projects and full-time opportunities. Let's discuss how I can contribute to your team.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-black hover:bg-accent hover:text-white border-2 border-transparent hover:border-white text-xl font-bold uppercase tracking-wider px-12 py-8 h-auto rounded-none transition-all">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
