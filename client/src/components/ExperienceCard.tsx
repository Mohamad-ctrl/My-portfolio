import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills?: string[];
}

export default function ExperienceCard({
  role,
  company,
  period,
  location,
  description,
  skills,
}: ExperienceCardProps) {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Timeline line for mobile */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-border md:hidden"></div>
      <div className="absolute left-[-5px] top-6 h-3 w-3 bg-accent border-2 border-border md:hidden"></div>

      <Card className="neo-card mb-8 bg-card">
        <CardHeader className="pb-2 border-b-2 border-border/10 bg-secondary/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <CardTitle className="text-xl font-bold uppercase tracking-tight text-accent">
                {role}
              </CardTitle>
              <h3 className="text-lg font-bold uppercase tracking-wider mt-1">
                {company}
              </h3>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <span className="font-mono text-sm font-bold bg-foreground text-background px-2 py-1">
                {period}
              </span>
              <span className="text-sm text-muted-foreground mt-1 font-mono uppercase">
                {location}
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-3 list-none">
            {description.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 min-w-[6px] bg-accent"></span>
                <span className="text-muted-foreground leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          
          {skills && skills.length > 0 && (
            <div className="mt-6 pt-4 border-t-2 border-border/10 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="rounded-none font-mono text-xs uppercase tracking-wider bg-muted text-muted-foreground"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
