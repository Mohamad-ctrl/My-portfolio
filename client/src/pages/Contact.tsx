import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col">
        <div className="bg-secondary/30 border-b-2 border-border py-20">
          <div className="container">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Interested in collaborating or have a project in mind? Let's connect and build something amazing together.
            </p>
          </div>
        </div>

        <div className="container py-20 flex-1 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="h-12 w-12 bg-accent text-accent-foreground flex items-center justify-center border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-1">Email</h3>
                    <a href="mailto:mohammadalsharif03@gmail.com" className="text-lg text-muted-foreground hover:text-accent hover:underline decoration-2 underline-offset-4 transition-colors">
                      mohammadalsharif03@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="h-12 w-12 bg-background text-foreground flex items-center justify-center border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-1">Phone</h3>
                    <a href="tel:+971561091235" className="text-lg text-muted-foreground hover:text-accent hover:underline decoration-2 underline-offset-4 transition-colors">
                      +971 56 109 1235
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="h-12 w-12 bg-background text-foreground flex items-center justify-center border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-1">Location</h3>
                    <p className="text-lg text-muted-foreground">
                      Abu Dhabi, United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t-2 border-border">
                <h3 className="text-xl font-bold uppercase tracking-tight mb-6">Social Profiles</h3>
                <div className="flex gap-4">
                  <Button asChild variant="outline" size="lg" className="h-14 w-14 p-0 border-2 border-border hover:bg-accent hover:text-accent-foreground rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                    <a href="https://github.com/Mohamad-ctrl" target="_blank" rel="noopener noreferrer">
                      <Github className="h-6 w-6" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-14 w-14 p-0 border-2 border-border hover:bg-accent hover:text-accent-foreground rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                    <a href="https://www.linkedin.com/in/mohamad-sharif" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <Card className="neo-card bg-black text-white border-black dark:border-white h-full flex flex-col justify-center p-8 md:p-12">
              <CardContent className="p-0 space-y-6 text-center">
                <div className="inline-block p-4 border-2 border-white rounded-full mb-4">
                  <Mail className="h-12 w-12" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
                  Let's Work Together
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                  <Button size="lg" className="w-full bg-white text-black hover:bg-accent hover:text-white border-2 border-transparent hover:border-white text-xl font-bold uppercase tracking-wider py-8 h-auto rounded-none transition-all mt-8" asChild>
                  <a href="mailto:mohammadalsharif03@gmail.com">
                    Send Message
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
