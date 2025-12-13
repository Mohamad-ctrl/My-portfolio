import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { Link, useRoute } from "wouter";

export default function ProjectReport() {
  const [match, params] = useRoute("/report/:id");
  const projectId = params?.id;

  const reports: Record<string, { title: string; file: string }> = {
    "remote-item-inspection": {
      title: "Remote Item Inspection & Delivery Service",
      file: "/reports/remote-item-inspection.pdf"
    },
    "bicycle-shop": {
      title: "Bicycle Shop App",
      file: "/reports/bicycle-shop.pdf"
    },
    "smart-sosa": {
      title: "Smart SOSA E-commerce Website",
      file: "/reports/smart-sosa.pdf"
    }
  };

  const report = projectId ? reports[projectId] : null;

  if (!report) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-4xl font-black uppercase mb-4">Report Not Found</h1>
          <Link href="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="h-[calc(100vh-64px)] flex flex-col">
        <div className="bg-secondary/30 border-b border-border py-4 px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/projects">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-lg font-bold uppercase truncate max-w-[200px] md:max-w-none">
              {report.title}
            </h1>
          </div>
          <Button asChild variant="outline" size="sm">
            <a href={report.file} download>
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </a>
          </Button>
        </div>
        <div className="flex-1 bg-muted/20 p-4 md:p-8">
          <iframe
            src={`${report.file}#toolbar=0`}
            className="w-full h-full rounded-lg border-2 border-border shadow-lg bg-white"
            title={`${report.title} Report`}
          />
        </div>
      </div>
    </Layout>
  );
}
