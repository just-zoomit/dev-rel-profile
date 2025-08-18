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
import { ExternalLink, Calendar, Clock } from "lucide-react";

import { projects } from "@/lib/content/ai-engineer/ai-engineer";

const ProjectsPosts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Extended projects posts data for demonstration
  
  const allProjectsPosts = projects

  const totalPages = Math.ceil(allProjectsPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = allProjectsPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6"> AI Engineer Project</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore all my AI Engineer project covering modern AI development practices, 
            cloud technologies, and software engineering insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentPosts.map((post) => (
            <Card key={post.title} className="h-full shadow-card border-none hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString()}
                  <Clock className="h-4 w-4 ml-2" />
                  {post.readTime}
                </div>
                <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 min-h-0">
                <p className="text-muted-foreground mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        Read More
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          <br/>
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

export default ProjectsPosts;