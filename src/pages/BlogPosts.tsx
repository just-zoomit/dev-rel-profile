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

const BlogPosts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Extended blog posts data for demonstration
  const allBlogPosts = [
    {
      title: "Building Scalable Microservices with Kubernetes",
      excerpt: "A comprehensive guide to deploying and managing microservices in production environments.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["Kubernetes", "DevOps", "Microservices"],
      url: "#"
    },
    {
      title: "Modern React Patterns for Better Code Organization",
      excerpt: "Explore advanced React patterns that will make your code more maintainable and scalable.",
      date: "2024-01-08", 
      readTime: "6 min read",
      tags: ["React", "JavaScript", "Best Practices"],
      url: "#"
    },
    {
      title: "Getting Started with Serverless Architecture",
      excerpt: "Learn how to build and deploy serverless applications using AWS Lambda and other cloud services.",
      date: "2023-12-20",
      readTime: "10 min read", 
      tags: ["Serverless", "AWS", "Cloud"],
      url: "#"
    },
    {
      title: "Advanced Docker Techniques for Development",
      excerpt: "Master Docker containers with advanced techniques for better development workflows.",
      date: "2023-12-15",
      readTime: "7 min read",
      tags: ["Docker", "DevOps", "Containers"],
      url: "#"
    },
    {
      title: "GraphQL vs REST: A Complete Comparison",
      excerpt: "Deep dive into the differences between GraphQL and REST APIs with practical examples.",
      date: "2023-12-10",
      readTime: "9 min read",
      tags: ["GraphQL", "REST", "API"],
      url: "#"
    },
    {
      title: "Building Progressive Web Apps with React",
      excerpt: "Create fast, reliable, and engaging web applications using modern PWA techniques.",
      date: "2023-12-05",
      readTime: "12 min read",
      tags: ["PWA", "React", "Web Development"],
      url: "#"
    },
    {
      title: "Machine Learning in JavaScript",
      excerpt: "Explore how to implement machine learning models directly in the browser with JavaScript.",
      date: "2023-11-28",
      readTime: "11 min read",
      tags: ["Machine Learning", "JavaScript", "TensorFlow.js"],
      url: "#"
    },
    {
      title: "Building Real-time Applications with WebSockets",
      excerpt: "Learn to create responsive real-time applications using WebSocket technology.",
      date: "2023-11-20",
      readTime: "8 min read",
      tags: ["WebSockets", "Real-time", "Node.js"],
      url: "#"
    }
  ];

  const totalPages = Math.ceil(allBlogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = allBlogPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">All Blog Posts</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore all my technical articles covering modern development practices, 
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
              <CardContent className="flex flex-col h-full">
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
                    Read More
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

export default BlogPosts;