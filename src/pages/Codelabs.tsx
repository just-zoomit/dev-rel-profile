import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import { ExternalLink } from "lucide-react";

const Codelabs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const codelabsPerPage = 6;

  // Extended codelabs data for demonstration
  const allCodelabs = [
    {
      title: "Build a Real-time Chat App with WebSockets",
      description: "Step-by-step tutorial to create a fully functional chat application using WebSockets, Node.js, and React.",
      duration: "45 min",
      difficulty: "Intermediate",
      technologies: ["WebSockets", "Node.js", "React"],
      url: "#"
    },
    {
      title: "Deploy ML Models with Docker & Kubernetes", 
      description: "Learn to containerize and deploy machine learning models in a scalable Kubernetes cluster.",
      duration: "60 min",
      difficulty: "Advanced",
      technologies: ["Docker", "Kubernetes", "Python", "ML"],
      url: "#"
    },
    {
      title: "Create a REST API with Express & MongoDB",
      description: "Build a complete RESTful API with authentication, data validation, and database integration.",
      duration: "30 min", 
      difficulty: "Beginner",
      technologies: ["Express", "MongoDB", "Node.js"],
      url: "#"
    },
    {
      title: "Build a Progressive Web App",
      description: "Create a PWA with offline capabilities, push notifications, and app-like experience.",
      duration: "50 min",
      difficulty: "Intermediate",
      technologies: ["PWA", "Service Workers", "React"],
      url: "#"
    },
    {
      title: "Serverless Functions with Vercel",
      description: "Deploy and manage serverless functions using Vercel's platform with real-world examples.",
      duration: "35 min",
      difficulty: "Beginner",
      technologies: ["Vercel", "Serverless", "JavaScript"],
      url: "#"
    },
    {
      title: "GraphQL API with Apollo Server",
      description: "Build a modern GraphQL API with Apollo Server, including subscriptions and real-time updates.",
      duration: "55 min",
      difficulty: "Advanced",
      technologies: ["GraphQL", "Apollo", "Node.js"],
      url: "#"
    },
    {
      title: "React Native Mobile App",
      description: "Create a cross-platform mobile application using React Native with navigation and state management.",
      duration: "70 min",
      difficulty: "Intermediate",
      technologies: ["React Native", "Navigation", "Redux"],
      url: "#"
    },
    {
      title: "Microservices with Docker Compose",
      description: "Architecture and deploy a microservices application using Docker Compose and inter-service communication.",
      duration: "65 min",
      difficulty: "Advanced",
      technologies: ["Docker", "Microservices", "API Gateway"],
      url: "#"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Advanced": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const totalPages = Math.ceil(allCodelabs.length / codelabsPerPage);
  const startIndex = (currentPage - 1) * codelabsPerPage;
  const currentCodelabs = allCodelabs.slice(startIndex, startIndex + codelabsPerPage);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">All Codelabs</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive, hands-on tutorials designed to help developers learn new technologies 
            through practical, step-by-step coding exercises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentCodelabs.map((codelab) => (
            <Card key={codelab.title} className="h-full shadow-card border-none hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getDifficultyColor(codelab.difficulty)}>
                    {codelab.difficulty}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{codelab.duration}</span>
                </div>
                <CardTitle className="text-xl leading-tight">{codelab.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="text-muted-foreground mb-4 flex-grow">
                  {codelab.description}
                </p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {codelab.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="default" className="w-full">
                    Start Codelab
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    isActive={page === currentPage}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(page);
                    }}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
};

export default Codelabs;