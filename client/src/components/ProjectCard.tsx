import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Github } from "lucide-react";
import { Link } from "wouter";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  reportId?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  reportId,
  featured = false,
}: ProjectCardProps) {
  const ImageWrapper = ({ children }: { children: React.ReactNode }) => {
    if (reportId) {
      return (
        <Link href={`/report/${reportId}`} className="block cursor-pointer w-full h-full">
          {children}
        </Link>
      );
    }
    return <div className="block cursor-default w-full h-full">{children}</div>;
  };

  return (
    <Card className={`neo-card h-full flex flex-col overflow-hidden bg-card ${featured ? 'md:col-span-2' : ''}`}>
      <div className="relative aspect-video w-full overflow-hidden border-b-2 border-border group">
        <ImageWrapper>
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            {reportId && (
              <div className="bg-background/80 backdrop-blur px-4 py-2 border-2 border-foreground font-bold uppercase tracking-wider text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                View Report
              </div>
            )}
          </div>
        </ImageWrapper>
      </div>
      
      <CardHeader className="space-y-2 p-6">
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="rounded-none border-border font-mono text-xs uppercase tracking-wider bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-2xl font-bold uppercase tracking-tight line-clamp-2">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 p-6 pt-0">
        <p className="text-muted-foreground leading-relaxed line-clamp-4">
          {description}
        </p>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex gap-4 mt-auto">
        {githubUrl && (
          <Button 
            asChild 
            variant="outline" 
            className="flex-1 rounded-none border-2 border-border hover:bg-accent hover:text-accent-foreground font-bold uppercase tracking-wider"
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Code
            </a>
          </Button>
        )}
        {reportId && (
          <Link href={`/report/${reportId}`} className="flex-1">
            <Button 
              className="w-full rounded-none bg-foreground text-background hover:bg-accent hover:text-accent-foreground border-2 border-transparent hover:border-border font-bold uppercase tracking-wider"
            >
              <FileText className="mr-2 h-4 w-4" /> Report
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
