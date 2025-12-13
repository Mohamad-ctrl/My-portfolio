import Layout from "@/components/Layout";
import ExperienceCard from "@/components/ExperienceCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Experience() {
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
      skills: ["Flutter", "Spring Boot", "Java", "Dart", "API Design", "CI/CD"]
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
      skills: ["Python", "Automation Testing", "Performance Optimization", "Agile"]
    },
    {
      role: "Full Stack Web Developer Intern",
      company: "Technical Coding Research (TCR) Innovation",
      period: "Jun 2023 – Oct 2023",
      location: "Remote",
      description: [
        "Assisted in developing web applications using JavaScript, HTML, CSS, and Node.js.",
        "Interacted with MySQL databases and REST APIs for dynamic web content.",
        "Engaged in agile development and learned a Git-based collaboration workflow."
      ],
      skills: ["JavaScript", "Node.js", "MySQL", "HTML/CSS", "Git"]
    }
  ];

  const education = [
    {
      degree: "BSc (Hons) Computer Science",
      school: "University Of West London",
      period: "Oct 2022 – Jun 2025",
      details: "First Class Honours, Equivalent to 3.8 GPA"
    },
    {
      degree: "Coding School Piscine",
      school: "42 Coding School",
      period: "Jul 2021 – Apr 2022",
      details: "Completed and passed the intensive coding piscine"
    }
  ];

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "Dart", "Java", "SQL"]
    },
    {
      title: "Frameworks",
      skills: ["Odoo", "Spring Boot", "Flutter", "Node.js", "ReactJS"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "Firebase", "Supabase"]
    },
    {
      title: "Tools",
      skills: ["Git", "CI/CD", "Selenium", "REST APIs", "Figma"]
    }
  ];

  return (
    <Layout>
      <div className="bg-secondary/30 border-b-2 border-border py-20">
        <div className="container flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
              Experience
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              My professional journey, education, and technical expertise.
            </p>
          </div>
          <Button variant="outline" size="lg" className="border-2 border-border hover:bg-accent hover:text-accent-foreground font-bold uppercase tracking-wider rounded-none h-14 px-8" asChild>
            <a href="/Mohamad-Sharif-Resume.pdf" download>
              Download CV <Download className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content: Experience & Education */}
          <div className="lg:col-span-8 space-y-20">
            {/* Work Experience */}
            <section>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 flex items-center gap-4">
                <span className="h-3 w-3 bg-accent"></span>
                Work History
              </h2>
              <div className="relative border-l-2 border-border ml-3 md:ml-0 pl-8 md:pl-12 space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    <div className="absolute left-[-41px] md:left-[-57px] top-6 h-5 w-5 bg-background border-4 border-accent rounded-full z-10"></div>
                    <ExperienceCard {...exp} />
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 flex items-center gap-4">
                <span className="h-3 w-3 bg-accent"></span>
                Education
              </h2>
              <div className="grid gap-6">
                {education.map((edu, index) => (
                  <Card key={index} className="neo-card bg-card">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                        <CardTitle className="text-xl font-bold uppercase tracking-tight">
                          {edu.degree}
                        </CardTitle>
                        <span className="font-mono text-sm font-bold bg-secondary px-2 py-1">
                          {edu.period}
                        </span>
                      </div>
                      <h3 className="text-lg text-muted-foreground font-medium">
                        {edu.school}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground font-medium">
                        {edu.details}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar: Skills */}
          <div className="lg:col-span-4 space-y-12">
            <div className="sticky top-24">
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                <span className="h-3 w-3 bg-accent"></span>
                Technical Skills
              </h2>
              
              <div className="space-y-8">
                {skillCategories.map((category, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-lg font-bold uppercase tracking-wider border-b-2 border-border/10 pb-2">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="outline" 
                          className="rounded-none border-2 border-border px-3 py-1.5 font-mono text-sm hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-black text-white neo-card border-black dark:border-white">
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-accent">
                  Certifications
                </h3>
                <ul className="space-y-4 font-mono text-sm">
                  <li className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span>Software Engineer</span>
                    <span className="text-white/50">2024</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span>Full Stack Web Dev</span>
                    <span className="text-white/50">2023</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span>IELTS Academic</span>
                    <span className="text-white/50">2021</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
